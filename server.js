const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { handler } = require("./api/reviews");

const root = __dirname;
const port = Number(process.env.PORT) || 3000;
const staticFiles = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/madoka-avatar.gif": ["madoka-avatar.gif", "image/gif"]
};

function createLocalServer({ reviewsHandler = handler } = {}) {
  return http.createServer(async (request, response) => {
    const pathname = new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname;
    if (pathname === "/api/reviews") {
      let body = "";
      try {
        for await (const chunk of request) {
          body += chunk;
          if (Buffer.byteLength(body) > 8_192) {
            response.writeHead(413, { "Content-Type": "application/json; charset=utf-8" });
            response.end(JSON.stringify({ message: "Request body is too large." }));
            return;
          }
        }
      } catch (error) {
        console.error("Unable to read feedback request:", error);
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ message: "Unable to read request body." }));
        return;
      }

      let payload;
      if (body) {
        try {
          payload = JSON.parse(body);
        } catch {
          response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
          response.end(JSON.stringify({ message: "Request body must be valid JSON." }));
          return;
        }
      }
      try {
        await reviewsHandler({
          method: request.method,
          url: request.url,
          headers: request.headers,
          body: payload
        }, response);
      } catch (error) {
        console.error("Local feedback handler failed:", error);
        if (!response.headersSent) {
          response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
          response.end(JSON.stringify({ message: "Feedback request failed." }));
          return;
        }
        response.end();
      }
      return;
    }

    const file = staticFiles[pathname];
    if (!file) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const [name, contentType] = file;
    fs.createReadStream(path.join(root, name))
      .on("error", error => {
        console.error(`Unable to serve ${name}:`, error);
        if (!response.headersSent) {
          response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        }
        response.end("Unable to serve file");
      })
      .on("open", () => response.writeHead(200, { "Content-Type": contentType }))
      .pipe(response);
  });
}

if (require.main === module) {
  createLocalServer().listen(port, () => {
    console.log(`Madoka is available at http://localhost:${port}`);
  });
}

module.exports = { createLocalServer };

