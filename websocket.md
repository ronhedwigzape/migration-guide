---
title: WebSocket Dashboard
description: Integrate the Bullet‑Train WebSocket service for real‑time updates.
---

# WebSocket Dashboard

Enable live score updates via a WebSocket server. You can run the service manually for development, or install it as a Windows service with **NSSM** (Non‑Sucking Service Manager).

## 1. Clone & Install the WS Service

```bash
cd /
cd xampp/htdocs
git clone https://github.com/aclc‑iriga/tabulation-ws.git
cd tabulation-ws
composer install
php index.php
````

By default, it listens on `ws://localhost:8080`.

## 2. (Windows) Run as a Service with NSSM

1. Download and install [NSSM](https://nssm.cc/).

2. Open an elevated PowerShell or Command Prompt.

3. Install the service:

   ```powershell
   nssm install TabulationWS "C:\PHP\php.exe" "C:\xampp\htdocs\tabulation-ws\index.php"
   ```

4. In the NSSM GUI that appears:

    * **Application**

        * Path: `C:\PHP\php.exe`
        * Arguments: `C:\path\to\tabulation-ws\index.php`
        * Startup directory: `C:\path\to\tabulation-ws`
    * **Details**

        * Display name: `Tabulation WebSocket Service`
    * Click **Install service**.

5. Start it:

   ```powershell
   nssm start TabulationWS
   ```

The service now runs in the background and will auto‑restart on failure or reboot.

## 3. Configure Your App

Copy the example and point to your running service:

```bash
cp app/config/websocket.example.php app/config/websocket.php
```

Edit `app/config/websocket.php` to match:

```php
<?php

/*
|-----------------------------------------------------------------------
| Websocket Configuration
|-----------------------------------------------------------------------
*/

$websocket = [
    // WebSocket server URL (must match the service port)
    'url' => 'ws://127.0.0.1:8080',
];
```

## 4. Access the Dashboard

1. Ensure the WS service is running (`nssm status TabulationWS`).
2. In your browser, go to:

   ```
   http://localhost/<competition-new-slug>/app/dashboard
   ```

## 5. Test Real‑Time Updates

1. Submit a rating via the Admin UI.
2. Watch live updates appear on the WebSocket Dashboard in real time.

