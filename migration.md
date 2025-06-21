---
title: Migration Guide
description: Fork, rebrand, import your DB, and insert initial data via the App Dashboard UI.
---

# Migration Guide

This guide walks you through forking or creating a new ACLC‑Iriga repository, importing your database, and seeding initial data via the UI.

::: tip
I recommend using **PHPStorm** for its powerful “Replace in Path” refactoring when you need to update slugs, titles, locations, or ports.
:::

## 0. Decide Your New Slug

Determine the slug for your competition—this will name your GitHub repo, database, and URLs:

- **If the title contains “Miss”**  
  `slug = 'miss' + condensed title` (lowercase, no spaces)  
  _Example:_ “Miss Iriga” → `missiriga`

- **Otherwise**  
  `slug = uppercase initials + '-' + location` (no spaces)  
  _Example:_ “Miss Gay San Roque” → `mgsr-sanroque`

> Let’s call this `<competition-new-slug>` and your prior slug `<competition-old-slug>`.

---

## 1. Fork & Rename the Base Repo

1. On GitHub, click **Fork** on the canonical template (e.g., `missiriga`).  
2. Select the **aclc‑iriga** organization as the target.  
3. Rename your fork to `<competition-new-slug>`.  
4. Edit its description to:  
```
Tabulation System for <Competition Title> (<Competition Location>)
```

5. Uncheck “Copy the master branch only” if prompted, then **Create fork**.

---

## 2. Clone Locally

```bash
cd C:/xampp/htdocs
git clone https://github.com/aclc‑iriga/<competition-new-slug>.git
cd <competition-new-slug>
```

---

## 3. Refactor Identifiers & Bump Port

Use your IDE’s search‑and‑replace to update everywhere:

* **`<competition-old-slug>`** → **`<competition-new-slug>`**
* **Old competition title** → **New competition title**
* **Old competition location** → **New competition location**
* **Old port** (e.g. `5173`) → **New port** (e.g. `5174`)

Then, in `vite.config.js` (or similar):

```js
export default defineConfig({
  // …other config…
  server: {
    host: 'localhost',
    port: 5174,      // your new port
    strictPort: true
  }
})
```

---

## 4. Create & Import Database

### A. Create

In phpMyAdmin, create a database named exactly:

```
<competition-new-slug>
```

### B. Import

1. Open the **Import** tab in phpMyAdmin.
2. Select the `.sql` dump shipped in your repo.
3. Click **Go**.

::: warning
All scoring data lives in the `ratings` table—avoid importing while the app is running in development.
:::

---

## 5. Seed Initial Data

* **Admin:**  `http://localhost/<competition-new-slug>/app`

Use the Admin Dashboard to populate:

* Criteria
* Titles
* Participants/Teams (with photos)
* Eliminations
* Judge Assignments

---

## 6. Export Final Database

1. In phpMyAdmin, select `<competition-new-slug>`.
2. Click **Export** → **Custom**.
3. Download the `.sql` file.
4. Add it to your repo root as:
```
<competition-new-slug>.sql
```
