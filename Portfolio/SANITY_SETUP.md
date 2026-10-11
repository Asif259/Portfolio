# Sanity CMS Setup & Management Guide for Portfolio

This document provides a comprehensive operational manual for managing dynamic portfolio content using **Sanity CMS**, running both an embedded Studio at `/studio` and a standalone Studio in `studio-portfolio`, with live data fetching, image hosting, and robust local fallbacks.

---

## Table of Contents

1. [Overview & Architecture](#1-overview--architecture)
2. [Sanity Project Configuration](#2-sanity-project-configuration)
3. [Environment Variables](#3-environment-variables)
4. [Accessing Sanity Studio](#4-accessing-sanity-studio)
5. [Managing Projects in the CMS Dashboard](#5-managing-projects-in-the-cms-dashboard)
6. [Data Migration (Initial 8 Projects)](#6-data-migration-initial-8-projects)
7. [Caching & Live Revalidation Strategy](#7-caching--live-revalidation-strategy)
8. [Vercel Deployment Configuration](#8-vercel-deployment-configuration)
9. [Common Issues & Troubleshooting](#9-common-issues--troubleshooting)

---

## 1. Overview & Architecture

* **Frontend:** Next.js 14 (App Router) on Vercel.
* **Content Management:** Sanity Headless CMS (`pqf64k7z`, dataset `production`).
* **Studio Access:**
  * **Embedded Studio:** Accessible directly in the Next.js app at `/studio`.
  * **Standalone Studio:** In sibling directory `studio-portfolio` running on Vite (`npm run dev` at `http://localhost:3333`).
* **Media Storage:** Sanity Asset CDN (`https://cdn.sanity.io`), configured with Next.js image optimization in `next.config.js`.
* **Zero Custom Backend:** Managed through Sanity Cloud; no Express/NestJS server or custom PostgreSQL instance required.
* **Resilient Fallback:** If Sanity is unreachable or unconfigured, the app falls back to local data in `data/portfolio.ts` without breaking the site.

---

## 2. Sanity Project Configuration

### 2.1 Sanity Project Details
* **Project ID:** `pqf64k7z`
* **Dataset:** `production`
* **API Version:** `2026-02-01`

### 2.2 Enabling CORS Origins
For browser requests and Visual Editing / Studio to communicate with Sanity, add your origins in [Sanity Manage](https://www.sanity.io/manage/project/pqf64k7z/api#cors-origins):
* `http://localhost:3000` (allow credentials)
* `http://localhost:3333` (allow credentials)
* `https://your-portfolio-domain.vercel.app` (allow credentials)

Or via Sanity CLI:
```bash
npx sanity cors add http://localhost:3000 --credentials
npx sanity cors add https://your-portfolio-domain.vercel.app --credentials
```

---

## 3. Environment Variables

Configure the following variables in `.env.local` (local) and Vercel Project Settings (Production):

| Variable Name | Environment | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Client & Server | Your Sanity Project ID (`pqf64k7z`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Client & Server | Your Dataset name (`production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Client & Server | Target API date (`2026-02-01`) |
| `SANITY_API_WRITE_TOKEN` | **Server / CLI Only** | **Secret Token** with write permissions used for initial migration. Never prefix with `NEXT_PUBLIC_`. |
| `DISABLE_SANITY_FALLBACK` | Server (Optional) | Set to `true` if you want hard errors instead of falling back to local files. |

> **Security Note:** Never expose `SANITY_API_WRITE_TOKEN` in client bundles or commit it to Git. It is only needed on the server or when running the migration script.

---

## 4. Accessing Sanity Studio

### Option A: Embedded Studio (In Next.js App)
1. Start your Next.js application:
   ```bash
   npm run dev
   ```
2. Navigate to:
   ```
   http://localhost:3000/studio
   ```
3. Authenticate with your Google or GitHub account linked to Sanity.

### Option B: Standalone Studio
1. Navigate to the standalone directory:
   ```bash
   cd studio-portfolio
   npm run dev
   ```
2. Open `http://localhost:3333` in your browser.

---

## 5. Managing Projects in the CMS Dashboard

### 5.1 Creating a New Project
1. Open the Studio at `/studio` or `http://localhost:3333`.
2. Click **Portfolio Project** in the navigation panel.
3. Click the **+ Create** button (pencil icon).
4. Fill in the fields:
   * **Project Title (`name`):** e.g., `FinTech Banking Platform`.
   * **Legacy ID (`legacyId`):** Unique integer used for `/projects/[id]` URL routing (e.g. `9`).
   * **Slug (`slug`):** Click **Generate** to derive from title.
   * **Category (`category`):** Choose `Frontend Development`, `Backend Development`, or `Full Stack Development`.
   * **Display Order (`displayOrder`):** Numeric position in gallery (e.g., `9`).
   * **Is Published (`isPublished`):** Ensure this is toggled on (`true`) for public visibility.
   * **Cover Image (`coverImage`):** Upload high-resolution screenshot and provide alt text.
   * **Gallery Images (`images`):** Upload additional screenshots for the detail page & lightbox.
   * **Short Description (`description`):** 1–2 sentence overview for the homepage card.
   * **Long Description (`longDescription`):** Full multi-paragraph overview for the "Overview" tab.
   * **Technologies (`technologies`):** Add tags (e.g., `Next.js`, `Tailwind CSS`, `PostgreSQL`).
   * **Key Features (`features`):** Add either:
     * *Simple Feature:* Flat feature bullet string.
     * *Structured Feature Section:* Section title with grouped `{ name, description }` cards.
   * **Challenges (`challenges`):** Add either:
     * *Simple Challenge:* Flat challenge bullet string.
     * *Structured Challenge:* Item with `{ title, description }`.
   * **Solution (`solution`):** Detailed narrative of architecture and implementation.
   * **Live URL / GitHub URLs (`liveUrl`, `githubUrl`):** Links to live demos and repositories.
   * **Date (`date`), Role (`role`), Client (`client`):** Project timeline and role metadata.
5. Click **Publish** (green button) in the bottom-right corner.

### 5.2 Editing & Updating Content
1. Select the project from the list.
2. Edit any field directly.
3. Click **Publish** to release changes to production.

### 5.3 Unpublishing or Deleting a Project
* **To Hide Without Deleting:** Toggle `isPublished` off and click **Publish**, OR click the document status menu dropdown and select **Unpublish**.
* **To Permanently Delete:** Click the three dots menu `...` in the bottom action bar and select **Delete**.

---

## 6. Data Migration (Initial 8 Projects)

A dedicated script (`scripts/migrate.ts`) reads all 8 legacy project records (`data/projects/project1.ts` to `project8.ts`), validates physical images in `/public/img/`, uploads them to Sanity CDN, and creates corresponding documents.

### Step 1: Run Dry-Run Validation (Safe)
Test local data and asset validity without connecting to Sanity:
```bash
npm run migrate:dry-run
```
Output verifies all 8 projects and ~45 screenshots on disk, including the corrected BariVara image paths.

### Step 2: Generate a Write Token
1. Go to [Sanity Manage API Settings](https://www.sanity.io/manage/project/pqf64k7z/api#tokens).
2. Click **+ Add API token**.
3. Name: `Portfolio Migration Token`.
4. Permissions: **Editor** (read and write).
5. Copy the generated token.

### Step 3: Run the Live Migration
Execute the migration:
```bash
SANITY_API_WRITE_TOKEN="your_generated_token_here" npm run migrate
```
The script will:
* Upload all project cover and gallery images to Sanity Asset Lake.
* Avoid redundant duplicate uploads across reruns.
* Generate deterministic documents (`project-1` through `project-8`).
* Format features and challenges into structured CMS objects.

### Step 4: Verify Content in Studio
Open `/studio` and verify all 8 projects appear with cover photos, technologies, and gallery images.

---

## 7. Caching & Live Revalidation Strategy

* **Next.js ISR (Incremental Static Regeneration):**
  * `revalidate: 60` is configured on all Sanity queries.
  * Pages revalidate every 60 seconds when new requests arrive.
  * Cache tags `['projects']` and `['project-<id>']` are attached for targeted cache invalidation.
* **On-Demand Webhook Revalidation (Optional):**
  * You can create an API route (`/api/revalidate`) using `revalidateTag('projects')` triggered by Sanity GROQ webhooks for instantaneous updates.
* **Fallback Behavior:**
  * If Sanity returns documents, dynamic CMS data is rendered.
  * If Sanity is empty or during setup, the app gracefully falls back to local data in `data/portfolio.ts`.
  * To disable the fallback after verifying the CMS in production, add `DISABLE_SANITY_FALLBACK=true` to your environment variables.

---

## 8. Vercel Deployment Configuration

1. In your Vercel Dashboard, select your Portfolio project.
2. Go to **Settings** → **Environment Variables**.
3. Add:
   * `NEXT_PUBLIC_SANITY_PROJECT_ID` = `pqf64k7z`
   * `NEXT_PUBLIC_SANITY_DATASET` = `production`
   * `NEXT_PUBLIC_SANITY_API_VERSION` = `2026-02-01`
4. Redeploy your project.
5. In Sanity Manage, add your Vercel production URL (e.g., `https://cry-zen.vercel.app`) to **CORS Origins** with credentials enabled.

---

## 9. Common Issues & Troubleshooting

### Issue 1: `Invalid src prop on next/image, hostname "cdn.sanity.io" is not configured`
* **Resolution:** Ensure `next.config.js` includes `cdn.sanity.io` in `images.remotePatterns`. (Already configured).

### Issue 2: `401 Unauthorized` or `403 Forbidden` in Studio
* **Resolution:** Ensure you are logged into Sanity and your local or production domain is listed under CORS origins in Sanity Manage.

### Issue 3: Project Detail Returns "Project Not Found"
* **Resolution:** Verify that `legacyId` matches the numeric URL ID and `isPublished` is set to `true`.

### Issue 4: BariVara (Project #8) Images Missing
* **Resolution:** The legacy typo `/images/bariara/` has been corrected to `/img/barivara/barivara[1-10].png`. The migration script automatically handles this path.

### Issue 5: ESLint 9 vs Next.js 14 Warning
* **Resolution:** Next.js 14.2 displays a warning regarding ESLint 9 options (`useEslintrc`, `extensions`). Production builds succeed normally (`next build`). To avoid this warning in local linting, pin `eslint: "^8.57.0"` or use `npm run build`.
