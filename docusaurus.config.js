// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDLC Corp – Odoo Integrations',
  tagline: 'Enterprise-grade Odoo integration solutions for ecommerce platforms',
  favicon: 'img/favicon.ico',

  url: 'https://sdlccorp.com',
  baseUrl: '/',

  organizationName: 'SDLC Corp',
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
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'SDLC Corp',
        src: 'img/logo.svg',
        srcDark: 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png',
        style: { height: '26px', width: 'auto' },
      },
      items: [
        { to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$' },
        { to: '/products', label: 'Products', position: 'left' },
        { to: '/shopify-odoo', label: 'Shopify–Odoo', position: 'left' },
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { href: 'https://sdlccorp.com', label: 'Website', position: 'right' },
        { href: 'https://sdlccorp.com/contact-us/', label: 'Get Support', position: 'right', className: 'navbar-support-btn' },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            { label: 'Shopify–Odoo Connector', to: '/shopify-odoo' },
            { label: 'All Products', to: '/products' },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'Installation Guide', to: '/docs/installation/getting-started' },
            { label: 'Configuration', to: '/docs/configuration/webhook-configuration' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'SDLC Corp', href: 'https://sdlccorp.com' },
            { label: 'Integration Services', href: 'https://sdlccorp.com/services/odoo-integration-services/' },
            { label: 'Contact Us', href: 'https://sdlccorp.com/contact-us/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SDLC Corp. All rights reserved.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'python', 'json'],
    },
  }),
};

module.exports = config;
