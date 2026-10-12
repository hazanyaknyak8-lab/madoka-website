const assert = require("node:assert/strict");
const test = require("node:test");
const { createHandler } = require("../api/reviews");
const { createLocalServer } = require("../local-server");

test("exports the API handler in a Vercel-compatible form", () => {
  const api = require("../api/reviews");
  assert.equal(typeof api, "function");
  assert.equal(api.handler, api);
  assert.equal(typeof api.createHandler, "function");
});

async function startApp(t, service) {
  const server = createLocalServer({
    reviewsHandler: createHandler({ resolveService: async () => service })
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
  });
  return baseUrl;
}

function createService({ submissionResults = [] } = {}) {
  const calls = { dashboard: [], submissions: [] };
  return {
    calls,
    async getDashboard(visitorId, now) {
      calls.dashboard.push({ visitorId, now });
      return {
        summary: {
          totalRatings: 2,
          averageRating: 4.5,
          distribution: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1 },
          dailyRatings: [{ date: "2026-06-01", count: 2 }]
        },
        nextSubmissionAt: null
      };
    },
    async submitReview(visitorId, rating, comment) {
      calls.submissions.push({ visitorId, rating, comment });
      return submissionResults.shift();
    }
  };
}

async function postReview(baseUrl, cookie, review, headers = {}) {
  return fetch(`${baseUrl}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
      Origin: baseUrl,
      ...headers
    },
    body: JSON.stringify(review)
  });
}

test("serves rating analytics without exposing submitted comments", async t => {
  const service = createService();
  const baseUrl = await startApp(t, service);
  const initial = await fetch(`${baseUrl}/api/reviews`);
  assert.equal(initial.status, 200);
  assert.match(initial.headers.get("set-cookie"), /HttpOnly/);
  const cookie = initial.headers.get("set-cookie").split(";")[0];
  const data = await initial.json();

  assert.equal(data.summary.totalRatings, 2);
  assert.equal(data.summary.averageRating, 4.5);
  assert.deepEqual(data.summary.dailyRatings, [{ date: "2026-06-01", count: 2 }]);
  assert.equal("comments" in data, false);
  assert.equal("topComments" in data, false);
  assert.equal("pagination" in data, false);
  assert.match(service.calls.dashboard[0].visitorId, /^[A-Za-z0-9_-]{43}$/);
  assert.equal(service.calls.dashboard[0].visitorId, cookie.slice("madoka_visitor=".length));
});

test("validates same-origin JSON submissions and accepts valid feedback", async t => {
  const service = createService({
    submissionResults: [{ accepted: true, nextSubmissionAt: "2026-06-01T00:05:00.000Z" }]
  });
  const baseUrl = await startApp(t, service);
  const initial = await fetch(`${baseUrl}/api/reviews`);
  const cookie = initial.headers.get("set-cookie").split(";")[0];

  const invalidRating = await postReview(baseUrl, cookie, { rating: 6, comment: "" });
  assert.equal(invalidRating.status, 400);
  const invalidComment = await postReview(baseUrl, cookie, { rating: 4, comment: 5 });
  assert.equal(invalidComment.status, 400);
  const wrongOrigin = await postReview(baseUrl, cookie, { rating: 4, comment: "Hello" }, {
    Origin: "https://attacker.example"
  });
  assert.equal(wrongOrigin.status, 403);

  const accepted = await postReview(baseUrl, cookie, { rating: 5, comment: "  Looks great!  " });
  assert.equal(accepted.status, 201);
  const acceptedData = await accepted.json();
  assert.equal(acceptedData.nextSubmissionAt, "2026-06-01T00:05:00.000Z");
  assert.equal(acceptedData.message, "Thanks! Your feedback has been submitted.");
  assert.equal(service.calls.submissions.length, 1);
  assert.equal(service.calls.submissions[0].rating, 5);
  assert.equal(service.calls.submissions[0].comment, "Looks great!");
});

test("returns retry timing when the database enforces the five-minute cooldown", async t => {
  const service = createService({
    submissionResults: [{ accepted: false, nextSubmissionAt: new Date(Date.now() + 60_000).toISOString() }]
  });
  const baseUrl = await startApp(t, service);
  const initial = await fetch(`${baseUrl}/api/reviews`);
  const cookie = initial.headers.get("set-cookie").split(";")[0];
  const response = await postReview(baseUrl, cookie, { rating: 4, comment: "Wait a bit." });
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get("retry-after")) > 0);
  const data = await response.json();
  assert.ok(data.nextSubmissionAt);
  assert.match(data.message, /^Please wait five minutes/);
});

test("serves the static page and the animated avatar", async t => {
  const baseUrl = await startApp(t, createService());
  const site = await fetch(baseUrl);
  assert.equal(site.status, 200);
  assert.match(site.headers.get("content-type"), /text\/html/);
  const html = await site.text();
  assert.match(html, /rating-chart/);
  assert.match(html, /href="\/styles\.css"/);
  assert.doesNotMatch(html, /<style>/i);
  assert.doesNotMatch(html, /Community comments/);

  const stylesheet = await fetch(`${baseUrl}/styles.css`);
  assert.equal(stylesheet.status, 200);
  assert.match(stylesheet.headers.get("content-type"), /text\/css/);

  const avatar = await fetch(`${baseUrl}/madoka-avatar.gif`);
  assert.equal(avatar.status, 200);
  assert.match(avatar.headers.get("content-type"), /image\/gif/);
});
