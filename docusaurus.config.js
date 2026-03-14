// docusaurus.config.js
// ─────────────────────────────────────────────────────────────────────────────
// SDLC Corp — Odoo Integration Platform
// Updated config: adds Google Fonts, better meta, custom CSS vars
// ─────────────────────────────────────────────────────────────────────────────

// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDLC Corp — Odoo Integration Platform',
  tagline: 'Enterprise-grade connectors and business tools built for Odoo ERP.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.sdlccorp.com',   // ← update to your real docs URL
  baseUrl: '/',

  organizationName: 'sdlccorp',
  projectName: 'sdlc-docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // ── Google Fonts (Syne + JetBrains Mono + Instrument Sans) ─────────────────
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
        href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap',
      },
    },
    // Open Graph / Social meta
    { tagName: 'meta', attributes: { property: 'og:title', content: 'SDLC Corp — Odoo Integration Platform' } },
    { tagName: 'meta', attributes: { property: 'og:description', content: 'Enterprise-grade connectors that sync Shopify, WooCommerce, Amazon and more with Odoo ERP.' } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#07030C' } },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs/shopify',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: 'Enterprise-grade Odoo connectors for Shopify, WooCommerce, Amazon, and more.' },
        { name: 'keywords', content: 'Odoo, Shopify, WooCommerce, Magento, Amazon, ERP integration, connector' },
      ],

      navbar: {
        title: '',
        logo: {
          alt: 'SDLC Corp',
          src: 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png',
        },
        items: [],   // navigation handled by custom navbar in index.js
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

      // Algolia DocSearch — uncomment when you have a key
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'sdlccorp',
      // },
    }),
};

module.exports = config;


// ─────────────────────────────────────────────────────────────────────────────
// ADDING NEW PRODUCTS LATER
// ─────────────────────────────────────────────────────────────────────────────
// plugins: [
//   ['@docusaurus/plugin-content-docs', {
//     id: 'woocommerce',
//     path: 'docs-woocommerce',
//     routeBasePath: 'docs/woocommerce',
//     sidebarPath: require.resolve('./sidebars-woocommerce.js'),
//   }],
// ],