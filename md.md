Below are the corrected Markdown files for `/docs/`, all using only VitePress’s frontmatter and “Writing” primitives. You can copy each into its respective file.

---

### `docs/migration.md`

````markdown
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
The dump has no `results` table; all scoring data lives in `ratings`.
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
mv ~/Downloads/<your-new-slug>.sql db/
git add db/<your-new-slug>.sql
git commit -m "Add exported schema + initial data"
```

````

---

### `docs/setup.md`

````markdown
---
title: Development Setup
description: Configure your local environment and run the app with hot‑reload.
---

# Development Setup

Follow these steps after migrating your repository.

## 1. Prerequisites

- **XAMPP**: Apache & MySQL  
- **Node.js** v20+ (LTS)

## 2. Start Services

1. Open the XAMPP Control Panel.  
2. Start **Apache** and **MySQL**.

## 3. Clone & Navigate

```bash
cd C:/xampp/htdocs
git clone https://github.com/aclc‑iriga/<your-new-slug>.git
cd <your-new-slug>
```

## 4. Install Dependencies

```bash
npm install
```

## 5. Verify Database & Data

::: tip
In phpMyAdmin, confirm that tables exist and initial records (criteria, participants, titles) are present.
:::

## 6. Run Dev Server

```bash
npm run dev
```

* Note the port in the console (e.g., `5173`).
* **Public:**  `http://localhost:<port>/<your-new-slug>/`
* **Admin:**   `http://localhost:<port>/<your-new-slug>/app`

## 7. Manage Data

* Use the Admin Dashboard for all CRUD operations.
* Resort to direct SQL only in emergencies.

## 8. Test Application Flows

1. **As Admin**: add sample data, assign judges.
2. **As Judge**: submit ratings and verify the `ratings` table.
3. **As Viewer**: check public results.

````

---

### `docs/testing.md`

````markdown
---
title: Backend Testing
description: Set up and run PHPUnit tests against a test database.
---

# Backend Testing

Automated tests help you catch regressions as you add features.

## Prerequisites

- **Composer** installed globally.  
- A test database named `test_<your-new-slug>`.

## 1. Configure Test Database

```bash
cp tests/backend/config/test-database.example.php tests/backend/config/test-database.php
# Edit credentials: DB name, user, password
```

In phpMyAdmin:

1. Create database `test_<your-new-slug>`.
2. Import your production `.sql` dump.

## 2. Install PHP Dependencies

```bash
composer install
```

## 3. Write Tests

* **Unit tests:** `tests/backend/unit`
* **Feature tests:** `tests/backend/feature`

Use `setUp()` methods to seed minimal data as needed.

## 4. Run Tests

```bash
vendor/bin/phpunit
```

Fix any failures, then commit:

```bash
git add tests/
git commit -m "Add/fix tests"
```

## 5. CI Integration

::: warning
Manage test DB credentials via environment variables—do not commit them.
:::

````

---

### `docs/production.md`

````markdown
---
title: Production Deployment (Local)
description: Deploy the application locally for real events and handle backups.
---

# Production Deployment (Local)

Prepare your localhost environment for event use.

## 1. Build Assets

```bash
npm run build
```

## 2. Copy to XAMPP

1. Stop the dev server (`npm run dev`).
2. Copy the project folder into `C:/xampp/htdocs/<your-new-slug>`.
3. Ensure `app/config/database.php` points to your `<your-new-slug>` database.

## 3. Set Permissions

Ensure `/app/crud/uploads` is writable by Apache if photos will be uploaded.

## 4. Access the Application

* **Public:**  `http://localhost/<your-new-slug>/`
* **Admin:**   `http://localhost/<your-new-slug>/app` (change default password)

## 5. Backups

::: details Backup Workflow

* **During event:**

    * Export DB via phpMyAdmin regularly.
    * Backup `/app/crud/uploads`.
* **After event:**

    * Export clean schema dump (omit `ratings`).
    * Archive final results separately.
      :::

## 6. LAN Access (Optional)

1. Find your machine’s LAN IP (e.g., `192.168.1.50`).
2. Access via `http://192.168.1.50/<your-new-slug>/`.
3. Open HTTP port in your firewall if needed.

## 7. Cleanup

After the event, reset or re-import a fresh template for the next pageant and archive logs.

````

---

### `docs/websocket.md`

````markdown
---
title: WebSocket Dashboard
description: Integrate the Bullet‑Train WebSocket service for real‑time updates.
---

# WebSocket Dashboard

Enable live score updates via a WebSocket server.

## 1. Clone & Install WS Service

```bash
cd path_where_services
git clone https://github.com/aclc-iriga/tabulation-ws.git
cd tabulation-ws
npm install
npm run start
```

By default, it listens on `ws://localhost:6001`.

## 2. Configure Your App

```bash
cp app/config/websocket.example.php app/config/websocket.php
```

Edit `app/config/websocket.php`:

```php
return [
  'url'  => 'ws://localhost:6001',
  'port' => 6001
];
```

## 3. Access the Dashboard

1. Ensure the WS service is running.
2. Visit `http://localhost/<your-new-slug>/app/dashboard`.

## 4. Test Real‑Time Updates

1. Submit a rating via the Admin UI.
2. Watch live updates appear on the dashboard.

## 5. LAN Access (Optional)

::: details LAN Setup

* Bind the WS service to `0.0.0.0` or your LAN IP.
* Access via `ws://<host-ip>:6001` and
  `http://<host-ip>/<your-new-slug>/app/dashboard`.
* Adjust firewall rules for the WS port.
:::

````

---

All files now use valid VitePress frontmatter keys, standard Markdown, and the “Writing” features (details containers, admonitions). Let me know if you encounter any remaining syntax errors!

