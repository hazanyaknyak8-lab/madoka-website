# Madoka website and community feedback API

## Local development

Use Node.js 22.13 or newer. Install the project dependencies, configure `DATABASE_URL` with a Neon Postgres connection string, then start the local server:

```powershell
npm install
$env:DATABASE_URL = "your Neon connection string"
npm start
```

Open `http://localhost:3000`. Do not open `index.html` directly: the feedback dashboard uses the same-origin `/api/reviews` endpoint. The Vercel function creates its tables and index on the first request; the Neon database user must have permission to create them.

Run the API tests with:

```powershell
npm test
```

The tests use a mocked service and do not need a database connection.

## Deploy to Vercel

1. Import this project into Vercel with the project root set to this folder. Vercel serves `index.html` and `madoka-avatar.gif` as static assets and detects `api/reviews.js` as a serverless function.
2. Create or connect a Neon Postgres database. Add its connection string to the Vercel project's environment variables as `DATABASE_URL` for every environment where the feedback form should work (Preview and Production as appropriate).
3. Redeploy after setting the environment variable. No database credentials belong in this repository.

Feedback is anonymous and identified by a browser cookie. The API enforces a five-minute cooldown per browser, stores ratings and comments in Neon, and returns public aggregate statistics and comments. Comments are displayed as plain text and featured comments are ranked by rating, then recency. There is no moderation or admin dashboard in this version; plan a moderation workflow before promoting the form to a large audience.
