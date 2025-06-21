---
title: Migration Guide
description: Fork, rebrand, import your DB, and insert initial data via the App Dashboard UI.
---

# Migration Guide

This guide walks you through forking or creating a new ACLC‑Iriga repository, importing your database, and seeding initial data via the UI.

::: tip
I recommend using PHPStorm as your IDE for its powerful search and replace features.
:::

## 1. Fork the Base Repo

### Via GitHub Fork

1. Click **Fork** on the canonical template (e.g., `missiriga`).  
2. Choose the **aclc‑iriga** organization as the target.

## 2. Clone Your New Repo

```bash
cd C:/xampp/htdocs
git clone https://github.com/aclc‑iriga/<competition-new-slug>.git
cd <competition-new-slug>
```

::: tip
Replace `<competition-new-slug>` with your desired slug (e.g., `mgsr-nabua`).
:::

## 3. Refactoring & Port Update

Before you begin forking and importing:

1. **Refactor identifiers**
   Open the project in **PHPStorm** (or your IDE of choice) and use its “Replace in Path” feature to update:

    * **`<competition-old-slug>`** → **`<competition-new-slug>`**
    * **Old competition title** → **New competition title**
    * **Old location** → **New location**
    * **Old port** (e.g. `5173`) → **New port** (e.g. `5174`)

2. **Update dev server port**
   In your Vite config (e.g. `vite.config.js`), change:

```js
export default defineConfig({
    // other configurations...
    server: {
        host: 'localhost',
        port: 5174, // Change to your new port
        strictPort: true
    }
    // other configurations...
})
```

## 4. Decide New Naming

* **If the title contains “Miss”**:
  `slug = 'miss' + condensed title` (lowercase, no spaces).
  *Example:* “Miss Iriga” → `missiriga`.

* **Otherwise**:
  `slug = uppercase initials + '-' + location` (no spaces).
  *Example:* “Miss Gay San Roque” → `mgsr-sanroque`.

## 5. Update Repository Metadata

1. **On GitHub**

    * Rename the repository to `<competition-new-slug>`.
    * Update its description to:
      `Tabulation System for <Competition Title> (<Competition Location>)`.

2. **Locally**
   Search & replace across the codebase:

    * **`<competition-old-slug>`** → **`<competition-new-slug>`**
    * **Old competition title** → **New competition title**
    * **Old competition location** → **New competition location**

## 6. Database Creation & Import

### Create Database

In phpMyAdmin, create a database named exactly `<competition-new-slug>`.

### Import Dump

1. Go to the **Import** tab in phpMyAdmin.
2. Select the `.sql` dump in your cloned repo.
3. Click **Go**.

::: warning
All scoring data lives in the `ratings` table.
:::

## 7. Initial Data Insertion

```bash
npm install
npm run dev
```

* **Public URL:** `http://localhost:5174/<competition-new-slug>/`
* **Admin URL:**  `http://localhost:5174/<competition-new-slug>/app`

Use the Admin Dashboard to add:

* Criteria
* Titles
* Teams (with photos for upload)
* Eliminations
* Judge Assignments

## 8. Export Final Database

1. In phpMyAdmin, select the `<competition-new-slug>` database.
2. Click **Export**.
3. Download the `.sql` file.
4. Store it in your repo at the root level as `<competition-new-slug>.sql`.
