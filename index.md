---
layout: home

hero:
  name: ACLC-Iriga Tabulation
  text: Seamlessly migrate and manage pageant tabulation systems
  tagline: Comprehensive guide from migration to real-time dashboards
  actions:
    - text: Start Migration
      link: /migration
      type: primary
    - text: Development Setup
      link: /setup
      type: default

features:
  - title: Guided Migration
    details: Step-by-step instructions to fork or create a new ACLC-Iriga tabulation repo, import schemas, and insert data via UI.
  - title: UI-Driven Data Management
    details: Use the built-in Admin Dashboard CRUD pages to manage criteria, participants, titles, eliminations, and judge assignments—no raw SQL needed.
  - title: Local Development
    details: Configure XAMPP and Node.js, then run the application locally with hot-reload for development and testing.
  - title: Automated Testing
    details: Set up PHPUnit tests on a test database to ensure backend stability as you modify features.
  - title: Local “Production” Deployment
    details: Deploy on localhost for real event use, manage live data, back up ratings, and handle LAN access.
  - title: Real-time Dashboard
    details: Integrate the Bullet-Train WebSocket dashboard for live score updates during events.
  - title: Clean Exports & Templates
    details: Export clean database dumps with initial data as templates for future pageants.
  - title: Community & Consistency
    details: Leverage ACLC-Iriga’s shared repository patterns and community knowledge for consistency across events.

footer: |
  <div style="text-align:center; margin-top:2em;">
    <small>Built with VitePress • <a href="https://github.com/aclc-iriga/your-docs-repo" target="_blank">Source on GitHub</a></small>
  </div>


---

## Prerequisites

- **Node.js** (v18+ recommended; newer LTS such as v20 or v22 preferred)  
- **npm** (bundled with Node.js)

## Project Structure

```plaintext
.
├── README.md
├── package.json
├── .gitignore
├── index.md
├── migration.md
├── setup.md
├── testing.md
├── production.md
├── websocket.md
└── .vitepress/
    └── config.js
```

## Installation

1. Install VitePress:

```bash
npm install -D vitepress
```

2. Ensure `package.json` has scripts such as:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview",
    "delete:pages": "git push origin --delete gh-pages",
    "deploy": "git add .vitepress/dist -f && git commit -m \"chore(deployment): deploy to production\" && git subtree push --prefix .vitepress/dist origin gh-pages"
  }
}
```

## Local Development

Run:

```bash
npm run docs:dev
```

## Preview Built Site Locally

After building:

```bash
npm run docs:build
npm run docs:preview
```

Open the printed local URL to preview the static site.

## 🛠️ Production – GitHub Pages

1. Delete the current `gh-pages` branch if it exists:

```bash
npm run delete:pages
```

2. Build the docs:

```bash
npm run docs:build
```

3. Commit & push the built output to `gh-pages`:

```bash
npm run deploy
```

4. After deployment:

    * In your Git client, undo the commit locally.
    * Delete `.vitepress/dist`.

---

Welcome to the ACLC-Iriga Tabulation documentation site. Use the navigation above or scroll down for quick links:

::: details 🔗 Quick Links

* [Migration Guide](/migration) – Forking/rebranding and initial database import & UI-driven data insertion.
* [Development Setup](/setup) – Installing dependencies, configuring, and running locally.
* [Backend Testing](/testing) – Setting up and running PHPUnit tests against a test database.
* [Production Deployment](/production) – Deploying for actual use on localhost and backup strategies.
* [WebSocket Dashboard](/websocket) – Integrating and accessing the real-time Bullet-Train dashboard.
:::

