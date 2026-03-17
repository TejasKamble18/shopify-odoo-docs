// docusaurus.config.js
// SDLC Corp — Odoo Integration Platform
//
// MULTI-INSTANCE DOCS — key rules:
//   • Preset docs: NO explicit `id` (stays as implicit 'default') ← required
//   • Each plugins[] entry: unique id that is NOT 'default'
//   • `path` values are relative to this file (project root)
//   • Do NOT add slug: /intro to intro.md files — routeBasePath handles routing

// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDLC Corp — Odoo Integration Platform',
  tagline: 'Enterprise-grade connectors and business tools built for Odoo ERP.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.sdlccorp.com',
  baseUrl: '/',

  organizationName: 'sdlccorp',
  projectName: 'sdlc-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    },
    { tagName: 'meta', attributes: { property: 'og:title',       content: 'SDLC Corp — Odoo Integration Platform' } },
    { tagName: 'meta', attributes: { property: 'og:description', content: 'Enterprise-grade connectors for Shopify, WooCommerce, Amazon and more with Odoo ERP.' } },
    { tagName: 'meta', attributes: { name: 'theme-color',        content: '#07030C' } },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // ⚠️ NO `id` field — must remain the implicit 'default' instance.
          // Docusaurus requires this when using multi-instance docs via plugins[].
          path: 'docs',
          routeBasePath: 'docs/shopify',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/marketing.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    // ── HRMS Dashboard docs ─────────────────────────────────────────────────
    // Folder: <project_root>/docs-hrms/
    // Routes: /docs/hrms/*
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hrms',
        path: 'docs-hrms',
        routeBasePath: 'docs/hrms',
        sidebarPath: require.resolve('./sidebars-hrms.js'),
        sidebarCollapsible: true,
        editUrl: undefined,
      },
    ],

    // ── Project Cost Management docs ────────────────────────────────────────
    // Folder: <project_root>/docs-costs/
    // Routes: /docs/costs/*
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'costs',
        path: 'docs-costs',
        routeBasePath: 'docs/costs',
        sidebarPath: require.resolve('./sidebars-costs.js'),
        sidebarCollapsible: true,
        editUrl: undefined,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: 'Enterprise-grade Odoo connectors for Shopify, WooCommerce, Amazon, and more.' },
        { name: 'keywords',    content: 'Odoo, Shopify, WooCommerce, HRMS, Project Cost, ERP integration' },
      ],

      navbar: {
        title: '',
        logo: {
          alt: 'SDLC Corp',
          src: 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png',
        },
        items: [],
      },

      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} SDLC Corp. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml', 'javascript'],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;