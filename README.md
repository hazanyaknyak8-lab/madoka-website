# Madoka website

## Local development

Use Node.js 22.13 or newer. Install the project dependencies, configure `DATABASE_URL` with a Neon Postgres connection string, then start the local server:

```powershell
npm install
$env:DATABASE_URL = "your Neon connection string"
npm start
```

Open `http://localhost:3000`. Do not open `index.html` directly: the feedback dashboard uses the same-origin `/api/reviews` endpoint. The feedback API creates its tables and index on the first request; the Neon database user must have permission to create them.

Run the API tests with:

```powershell
npm test
```

The tests use mocked services and do not need a database connection.

## Feedback API

Feedback is anonymous and identified by a browser cookie. The API enforces a five-minute cooldown per browser and stores ratings and optional comments in Neon. The public dashboard exposes rating aggregates and the 14-day activity graph only; submitted comments are not returned or displayed. There is no moderation or admin dashboard in this version.

## Deploy to Vercel with working ratings

Ratings are stored in Neon Postgres. The homepage talks to the same-origin `/api/reviews` Vercel Function; no bot credentials or other bot environment variables are needed. The database schema is created automatically on the first API request, so the Neon database role used by `DATABASE_URL` must be allowed to create tables and indexes.

### 1. Create the Neon database

1. Sign in to [Neon](https://neon.tech/) and create a project.
2. In the project dashboard, open **Connect** and copy the PostgreSQL connection string. Use the pooled connection string if Neon offers that choice.
3. Keep this connection string private. Do not paste it into the website, commit it, or send it in chat.

### 2. Put the website on GitHub

1. Create a new, empty GitHub repository.
2. From this project folder, initialize Git if needed, add the website files, and push them to the repository. Do not include `.env` files, `node_modules`, or database credentials.
3. Confirm that `index.html`, `styles.css`, `api/reviews.js`, `package.json`, and `package-lock.json` are in the repository root (not nested inside an extra project folder).

### 3. Import the project into Vercel

1. In Vercel, choose **Add New → Project**, connect GitHub, and import the website repository.
2. Leave the **Root Directory** set to the repository root. Vercel should detect the `api/` folder as serverless functions.
3. No custom build command or output directory is required for this static HTML site and Node.js API function.
4. Before the first production deployment, open **Project Settings → Environment Variables** and add:
   - **Name:** `DATABASE_URL`
   - **Value:** the Neon PostgreSQL connection string from step 1
   - **Environments:** Production, Preview, and Development (select all)
5. Save the variable and deploy. If the first deployment was already made before adding `DATABASE_URL`, redeploy after saving it.

### 4. Verify ratings after deployment

1. Open the deployed website and visit the **Madoka Developers** page.
2. The rating summary should load (it may initially show zero ratings). Submit a test star rating; the success message should appear and the chart should update.
3. Open `https://YOUR-VERCEL-DOMAIN/api/reviews` in a browser. A working deployment returns JSON with the rating summary. If it returns a storage configuration error, check that `DATABASE_URL` is set for the deployed environment and redeploy.
4. A browser can submit one rating every five minutes. The rating and optional comment are stored in Neon, but comments are not shown in the public dashboard.

If the API returns an error after setup, check the Vercel deployment's **Functions/Runtime Logs** and confirm the Neon database is reachable and the connection string's role can create tables and indexes.
