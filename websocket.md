---
title: WebSocket Dashboard
description: Integrate the Bullet‑Train WebSocket service for real‑time updates.
---

# WebSocket Dashboard

Enable live score updates via a WebSocket server.

## 1. Clone & Install WS Service

```bash
cd /
git clone https://github.com/aclc-iriga/tabulation-ws.git
cd tabulation-ws
composer install
php index.php
```

By default, it listens on `ws://localhost:6001`.

## 2. Configure Your App

```bash
cp app/config/websocket.example.php app/config/websocket.php
```

Edit `app/config/websocket.php`:

```php
<?php

/*
|-----------------------------------------------------------------------
| Websocket Configuration
|-----------------------------------------------------------------------
*/

$websocket = [
    'url' => 'ws://127.0.0.1:8080'
];
```

## 3. Access the Dashboard

1. Ensure the WS service is running.
2. Visit `http://localhost/<your-new-slug>/app/dashboard`.

## 4. Test Real‑Time Updates

1. Submit a rating via the Admin UI.
2. Watch live updates appear on the dashboard.
