const { randomBytes } = require("node:crypto");

const COOLDOWN_MS = 5 * 60 * 1000;
const PAGE_SIZE = 20;

function sendJson(response, statusCode, payload, headers = {}) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    ...headers
  });
  response.end(JSON.stringify(payload));
}

function getVisitorId(request, response) {
  const cookie = request.headers.cookie?.split(";")
    .map(value => value.trim())
    .find(value => value.startsWith("madoka_visitor="));
  const existingId = cookie?.slice("madoka_visitor=".length);
  if (existingId && /^[A-Za-z0-9_-]{43}$/.test(existingId)) return existingId;

  const visitorId = randomBytes(32).toString("base64url");
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  response.setHeader("Set-Cookie", `madoka_visitor=${visitorId}; Max-Age=31536000; Path=/; HttpOnly; SameSite=Lax${secure}`);
  return visitorId;
}

function parseOffset(value) {
  const offset = Number(value ?? 0);
  return Number.isSafeInteger(offset) && offset >= 0 && offset <= 100000 ? offset : null;
}

function getUtcDateRange(now) {
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const firstDay = new Date(today);
  firstDay.setUTCDate(firstDay.getUTCDate() - 13);
  return {
    firstDay,
    firstDayString: firstDay.toISOString().slice(0, 10),
    todayString: today.toISOString().slice(0, 10)
  };
}

function createNeonService(sql) {
  let schemaPromise;
  async function initialize() {
    if (!schemaPromise) {
      schemaPromise = (async () => {
        await sql`CREATE TABLE IF NOT EXISTS reviews (
          id BIGSERIAL PRIMARY KEY,
          visitor_id TEXT NOT NULL,
          rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
          comment TEXT NOT NULL DEFAULT '' CHECK (char_length(comment) <= 500),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )`;
        await sql`CREATE INDEX IF NOT EXISTS reviews_created_at ON reviews (created_at DESC)`;
        await sql`CREATE TABLE IF NOT EXISTS review_visitors (
          visitor_id TEXT PRIMARY KEY,
          last_submission_at TIMESTAMPTZ NOT NULL
        )`;
      })().catch(error => {
        schemaPromise = null;
        throw error;
      });
    }
    await schemaPromise;
  }

  async function getDashboard(visitorId, offset, now) {
    await initialize();
    const { firstDay, firstDayString } = getUtcDateRange(now);
    const [
      [aggregate],
      distributionRows,
      dailyRows,
      [commentCount],
      comments,
      topComments,
      [visitor]
    ] = await Promise.all([
      sql`SELECT COUNT(*)::int AS total, ROUND(AVG(rating)::numeric, 1)::float AS average
        FROM reviews`,
      sql`SELECT rating, COUNT(*)::int AS count FROM reviews GROUP BY rating`,
      sql`SELECT TO_CHAR(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS date,
          COUNT(*)::int AS count
        FROM reviews
        WHERE created_at >= ${`${firstDayString}T00:00:00.000Z`}::timestamptz
        GROUP BY date`,
      sql`SELECT COUNT(*)::int AS total FROM reviews WHERE comment <> ''`,
      sql`SELECT id, rating, comment, created_at AS "createdAt"
        FROM reviews WHERE comment <> ''
        ORDER BY created_at DESC, id DESC LIMIT ${PAGE_SIZE} OFFSET ${offset}`,
      sql`SELECT id, rating, comment, created_at AS "createdAt"
        FROM reviews WHERE comment <> ''
        ORDER BY rating DESC, created_at DESC, id DESC LIMIT 3`,
      sql`SELECT last_submission_at AS "lastSubmissionAt"
        FROM review_visitors WHERE visitor_id = ${visitorId}`
    ]);
    const dailyCounts = new Map(dailyRows.map(row => [row.date, Number(row.count)]));
    const dailyRatings = Array.from({ length: 14 }, (_, index) => {
      const date = new Date(firstDay);
      date.setUTCDate(date.getUTCDate() + index);
      const dateString = date.toISOString().slice(0, 10);
      return { date: dateString, count: dailyCounts.get(dateString) || 0 };
    });
    const totalRatings = Number(aggregate.total);
    const nextSubmissionAt = visitor
      ? new Date(new Date(visitor.lastSubmissionAt).getTime() + COOLDOWN_MS)
      : null;

    return {
      summary: {
        totalRatings,
        averageRating: aggregate.average === null ? null : Number(aggregate.average),
        distribution: Object.fromEntries(
          Array.from({ length: 5 }, (_, index) => [index + 1, 0])
            .map(([rating]) => [rating, Number(distributionRows.find(row => Number(row.rating) === rating)?.count || 0)])
        ),
        dailyRatings,
        totalComments: Number(commentCount.total)
      },
      topComments,
      comments,
      pagination: {
        offset,
        limit: PAGE_SIZE,
        total: Number(commentCount.total),
        hasMore: offset + comments.length < Number(commentCount.total)
      },
      nextSubmissionAt: nextSubmissionAt && nextSubmissionAt.getTime() > now.getTime()
        ? nextSubmissionAt.toISOString()
        : null,
      dateRange: { from: firstDayString, through: getUtcDateRange(now).todayString }
    };
  }

  async function submitReview(visitorId, rating, comment) {
    await initialize();
    const inserted = await sql`WITH allowed AS (
        INSERT INTO review_visitors (visitor_id, last_submission_at)
        VALUES (${visitorId}, NOW())
        ON CONFLICT (visitor_id) DO UPDATE
          SET last_submission_at = NOW()
          WHERE review_visitors.last_submission_at <= NOW() - INTERVAL '5 minutes'
        RETURNING visitor_id, last_submission_at
      )
      INSERT INTO reviews (visitor_id, rating, comment, created_at)
      SELECT visitor_id, ${rating}, ${comment}, last_submission_at FROM allowed
      RETURNING created_at AS "createdAt"`;
    if (inserted.length) {
      const nextSubmissionAt = new Date(new Date(inserted[0].createdAt).getTime() + COOLDOWN_MS);
      return { accepted: true, nextSubmissionAt: nextSubmissionAt.toISOString() };
    }
    const [visitor] = await sql`SELECT last_submission_at AS "lastSubmissionAt"
      FROM review_visitors WHERE visitor_id = ${visitorId}`;
    const nextSubmissionAt = new Date(new Date(visitor.lastSubmissionAt).getTime() + COOLDOWN_MS);
    return { accepted: false, nextSubmissionAt: nextSubmissionAt.toISOString() };
  }

  return { getDashboard, initialize, submitReview };
}

let defaultServicePromise;
async function getDefaultService() {
  if (!process.env.DATABASE_URL) {
    const error = new Error("Configure DATABASE_URL with a Neon Postgres connection string.");
    error.statusCode = 503;
    throw error;
  }
  if (!defaultServicePromise) {
    defaultServicePromise = import("@neondatabase/serverless")
      .then(({ neon }) => createNeonService(neon(process.env.DATABASE_URL)))
      .catch(error => {
        defaultServicePromise = null;
        throw error;
      });
  }
  return defaultServicePromise;
}

function createHandler({ resolveService = getDefaultService, now = () => new Date() } = {}) {
  return async function reviewsHandler(request, response) {
    try {
      const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
      if (requestUrl.pathname !== "/api/reviews") {
        return sendJson(response, 404, { message: "Not found." });
      }
      const visitorId = getVisitorId(request, response);
      if (request.method === "GET") {
        const offset = parseOffset(requestUrl.searchParams.get("offset"));
        if (offset === null) return sendJson(response, 400, { message: "offset must be a non-negative integer." });
        const service = await resolveService();
        const dashboard = await service.getDashboard(visitorId, offset, now());
        return sendJson(response, 200, dashboard);
      }
      if (request.method !== "POST") {
        response.setHeader("Allow", "GET, POST");
        return sendJson(response, 405, { message: "Use GET or POST for this endpoint." });
      }

      let origin;
      try {
        origin = new URL(request.headers.origin).host;
      } catch {
        return sendJson(response, 403, { message: "Feedback must be submitted from this website." });
      }
      if (origin !== request.headers.host) {
        return sendJson(response, 403, { message: "Feedback must be submitted from this website." });
      }
      if (!request.headers["content-type"]?.toLowerCase().startsWith("application/json")) {
        return sendJson(response, 415, { message: "Send feedback as JSON." });
      }
      const payload = request.body;
      if (!payload || !Number.isInteger(payload.rating) || payload.rating < 1 || payload.rating > 5) {
        return sendJson(response, 400, { message: "Choose a rating from 1 to 5 stars." });
      }
      if (typeof payload.comment !== "string" || payload.comment.length > 500) {
        return sendJson(response, 400, { message: "Comments must be 500 characters or fewer." });
      }

      const service = await resolveService();
      const result = await service.submitReview(visitorId, payload.rating, payload.comment.trim());
      if (!result.accepted) {
        const retryAfter = Math.max(1, Math.ceil((Date.parse(result.nextSubmissionAt) - now().getTime()) / 1000));
        return sendJson(response, 429, {
          message: "Please wait five minutes before submitting feedback again.",
          nextSubmissionAt: result.nextSubmissionAt
        }, { "Retry-After": String(retryAfter) });
      }
      return sendJson(response, 201, {
        message: "Thanks! Your feedback has been submitted.",
        nextSubmissionAt: result.nextSubmissionAt
      });
    } catch (error) {
      const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;
      if (statusCode >= 500) console.error("Feedback API request failed:", error);
      return sendJson(response, statusCode, {
        message: statusCode === 503
          ? "Feedback storage is not configured. Connect a Neon database in Vercel."
          : statusCode >= 500
            ? "Something went wrong. Please try again later."
            : error.message
      });
    }
  };
}

module.exports = { createHandler, createNeonService, handler: createHandler() };
