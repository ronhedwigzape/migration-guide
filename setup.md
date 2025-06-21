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
git clone https://github.com/aclc‑iriga/<competition-new-slug>.git
cd <competition-new-slug>
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
* **Public:**  `http://localhost:<port>/<competition-new-slug>/`
* **Admin:**   `http://localhost:<port>/<competition-new-slug>/app`

## 7. Manage Data

* Use the Admin Dashboard for all CRUD operations.
* Resort to direct SQL only in emergencies.

## 8. Test Application Flows

1. **As Admin**: add sample data, assign judges.
2. **As Judge**: submit ratings and verify the `ratings` table.
3. **As Viewer**: check public results.