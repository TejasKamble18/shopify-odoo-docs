// @ts-check
const config = {
  title: 'SDLC Corp - Odoo Integrations',
  tagline: 'Professional ecommerce integration solutions',
  favicon: 'img/favicon.ico',
  url: 'https://sdlccorp.com',
  baseUrl: '/',
  organizationName: 'TejasKamble18',
  projectName: 'shopify-odoo-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SDLC Corp',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://sdlccorp.com',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SDLC Corp.`,
    },
  },
};

module.exports = config;