---
title: Production Deployment (Local)
description: Deploy the application locally for real events and handle backups.
---

# Production Deployment (Local)

This page walks you through building, configuring, and running your tabulation app on a production‑style XAMPP stack. **Note:** you’ll also need to deploy your WebSocket service separately—see the next section after this for the WebSocket Dashboard.

---

## 1. Build Frontend Assets

In your project root, run:

```bash
npm run build
```

This compiles and minifies your frontend into `public`.

---

## 2. Copy to XAMPP `htdocs`

1. **Stop** any running development server (`Ctrl+C` in its terminal).
2. Copy the **entire project folder** into `C:/xampp/htdocs/<competition-new-slug>`.
3. In `app/config/database.php`, confirm you point to the **production‑local** database named exactly `<competition-new-slug>`.
4. Ensure the folder permissions allow Apache to read and (for uploads) write to `app/crud/uploads`.

---

## 4. Access the Application

* **Public URL:**

  ```
  http://localhost/<competition-new-slug>/
  ```
* **Admin Dashboard:**

  ```
  http://localhost/<competition-new-slug>/app
  ```

  > 🔑 At this URL you can perform all CRUD operations—adding/editing criteria, teams/candidates, titles, eliminations, judge assignments, and more. Remember to change the default admin password immediately!

---

## 5. Backup Strategy

::: details During the Event

* **Export Database** regularly from phpMyAdmin to capture live `ratings`.
* **Backup Uploads**: copy `app/crud/uploads` (photos, files) to a separate folder.
:::

::: details After the Event

1. **Clean Template Export**

  * In phpMyAdmin, select `<competition-new-slug>`.
  * Use **Export → Custom** to exclude tables you don’t need (e.g. `ratings`).
  * Download `<competition-new-slug>.sql` and commit it to your repo.
2. **Archive Results**

  * Save a separate dump of the final `ratings` table if you need to preserve scores.
:::

---

## 6. Network & LAN Access

To allow multiple devices on your LAN to view the app:

1. Find your PC’s LAN IP:

  * Windows: `ipconfig` → look for “IPv4 Address”.
2. In your firewall settings, ensure **port 80** (HTTP) is open.
3. On another device, browse to:

   ```
   http://<LAN-IP>/<competition-new-slug>/
   ```

---

## 7. Reminder: WebSocket Service

Your real‑time dashboard requires the WebSocket server running separately.
After completing this production deployment, navigate to **[WebSocket Dashboard](/websocket)** and follow those instructions to install and configure your WebSocket service (e.g., via NSSM on Windows).

---

## 8. Cleanup for Next Event

When the pageant ends:

1. **Reset or Re‑import** your `<competition-new-slug>` database from the clean template.
2. **Archive** any generated logs or temporary files.
3. Re‑seed initial data via the Admin UI or fresh SQL dump for the next competition.

---

With these steps, your app will run as a locally hosted “production” site, ready for judges, audience displays, and backups—and you’ll be primed to set up the WebSocket Dashboard next!
