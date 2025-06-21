---
title: Backend Testing
description: Set up and run PHPUnit tests against a test database.
---

# Backend Testing

Automated tests help you catch regressions as you add features.

## Prerequisites

- **Composer** installed globally.
- A test database named `test_<competition-new-slug>`.

## 1. Configure Test Database

```bash
cp tests/backend/config/test-database.example.php tests/backend/config/test-database.php
# Edit credentials: DB name, user, password
```

In phpMyAdmin:

1. Create database `test_<competition-new-slug>`.
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
