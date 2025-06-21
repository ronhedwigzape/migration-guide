---
title: Migration Guide
description: Fork, rebrand, import your DB, and insert initial data via the App Dashboard UI.
---

# Migration Guide

This guide walks you through forking or creating a new ACLC‑Iriga repository, importing your database, and seeding initial data via the UI.

## 1. Fork or Create the Base Repo

### Via GitHub Fork

1. Click **Fork** on the canonical template (e.g., `missiriga`).
2. Choose the **aclc‑iriga** organization as the target.

### Via New Repository

::: details CLI Instructions

```bash
git clone https://github.com/original/your-template.git
cd your-template
git remote remove origin
git remote add origin https://github.com/aclc‑iriga/<your-new-slug>.git
git push -u origin master
```

:::

## 2. Clone Your New Repo

```bash
cd C:/xampp/htdocs
git clone https://github.com/aclc‑iriga/<your-new-slug>.git
cd <your-new-slug>
```

::: tip
Replace `<your-new-slug>` with your desired slug (e.g., `mgsr-nabua`).
:::

## 3. Decide New Naming

* **If the title contains “Miss”**:
  `slug = 'miss' + condensed title` (lowercase, no spaces).
  *Example:* “Miss Iriga” → `missiriga`.

* **Otherwise**:
  `slug = uppercase initials + '-' + location` (no spaces).
  *Example:* “Miss Gay San Roque” → `mgsr-sanroque`.

## 4. Update Repository Metadata

1. **On GitHub**

   * Rename the repository to `<your-new-slug>`.
   * Update its description to:
     `Tabulation System for <Your Title> (<Your Location>)`.

2. **Locally**
   Search & replace across the codebase:

   * Old slug → new slug
   * Old title → new title
   * Old location → new location

## 5. Database Creation & Import

### Create Database

In phpMyAdmin, create a database named exactly `<your-new-slug>`.

### Import Dump

1. Go to the **Import** tab in phpMyAdmin.
2. Select the `.sql` dump in your cloned repo.
3. Click **Go**.

::: warning
All scoring data lives in `ratings`.
:::

## 6. Initial Data Insertion

```bash
npm install
npm run dev
```

* **Public URL:** `http://localhost:<port>/<your-new-slug>/`
* **Admin URL:**  `http://localhost:<port>/<your-new-slug>/app`

Use the Admin Dashboard to add:

* Criteria
* Titles
* Participants (with photos)
* Eliminations
* Judge Assignments

## 7. Export Final Database

::: details Export Steps
1. In phpMyAdmin, select the `<your-new-slug>` database.
2. Click **Export** → **Custom**.
3. Optionally deselect tables (e.g., `ratings`).
4. Download the `.sql` file.
   :::

```bash
mkdir -p db
mv ~/Downloads/<your-new-slug>.sql <your-new-slug>/
git add <your-new-slug>/<your-new-slug>.sql
git commit -m "Add exported schema + initial data"
```