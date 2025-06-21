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
2. Copy the project folder into `C:/xampp/htdocs/<competition-new-slug>`.
3. Ensure `app/config/database.php` points to your `<competition-new-slug>` database.

## 3. Set Permissions

Ensure `/app/crud/uploads` is writable by Apache if photos will be uploaded.

## 4. Access the Application

* **Public:**  `http://localhost/<competition-new-slug>/`
* **Admin:**   `http://localhost/<competition-new-slug>/app` (change default password)

## 5. Backups

::: details Backup Workflow

* **During event:**

  * Export DB via phpMyAdmin regularly.
  * Backup `/app/crud/uploads`.
* **After event:**

  * Export clean schema dump (omit `ratings`).
  * Archive final results separately.
:::

## 6. Network Access 

1. Find your machine’s LAN IP (e.g., `192.168.1.50`).
2. Access via `http://192.168.1.50/<competition-new-slug>/`.
3. Open HTTP port in your firewall if needed.

## 7. Cleanup

After the event, reset or re-import a fresh template for the next pageant and archive logs.