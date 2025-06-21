import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Repo Migration Guide",
  description: "Unified documentation for ACLC-Iriga tabulation softwares",
  base: '/migration-guide/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Top-level navigation
    nav: [
      { text: 'Contributing', link: '/contributing' }
    ],

    // Sidebar configuration
    sidebar: [
      {
        text: 'Overview',
        link: '/'
      },
      {
        text: 'Migration Guide',
        items: [
          { text: 'Migration / Forking Steps', link: '/migration' }
        ]
      },
      {
        text: 'Development Setup',
        items: [
          { text: 'Local Dev Setup', link: '/setup' }
        ]
      },
      {
        text: 'Backend Testing',
        items: [
          { text: 'PHPUnit Testing', link: '/testing' }
        ]
      },
      {
        text: 'Production Deployment',
        items: [
          { text: 'Deploy Application', link: '/production' }
        ]
      },
      {
        text: 'WebSocket Dashboard',
        items: [
          { text: 'Real-time Dashboard Setup', link: '/websocket' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ronhedwigzape/migration-guide' }
    ]
  }
})
