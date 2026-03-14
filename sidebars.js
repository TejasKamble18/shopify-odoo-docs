// sidebars.js
// Built to match your ACTUAL existing doc file structure.
// Your Shopify docs live flat under docs/ (not docs/shopify/).
// Coming-soon products each have a placeholder intro.md.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ─────────────────────────────────────────────────────────────
  // SHOPIFY CONNECTOR  (LIVE — uses your real existing doc IDs)
  // ─────────────────────────────────────────────────────────────
  shopifySidebar: [
    { type: 'doc', id: 'intro', label: '🛍️ Shopify Connector' },

    {
      type: 'category',
      label: '🚀 Installation',
      collapsed: false,
      items: [
        'installation/getting-started',
        'installation/generate-api-keys',
        'installation/configure-instance',
        'installation/setup-connector',
      ],
    },

    {
      type: 'category',
      label: '⚙️ Configuration',
      collapsed: false,
      items: [
        'configuration/product-configuration',
        'configuration/order-configuration',
        'configuration/stock-information',
        'configuration/payment-gateway',
        'configuration/tax-configuration',
        'configuration/webhook-configuration',
        'configuration/auto-workflow',
      ],
    },

    {
      type: 'category',
      label: '📦 Products',
      items: [
        'products/import-products',
        'products/import-specific-products',
        'products/map-products',
        'products/update-products',
        'products/import-stock',
        'products/export-stock',
      ],
    },

    {
      type: 'category',
      label: '🛒 Orders',
      items: [
        'orders/import-unshipped-orders',
        'orders/import-shipped-orders',
        'orders/import-specific-order',
        'orders/import-cancel-order',
        'orders/cancel-order-shopify',
        'orders/import-returns',
        'orders/refund',
        'orders/export-shipment',
        'orders/grant-access-shipment',
      ],
    },

    {
      type: 'category',
      label: '⚡ Operations',
      items: [
        'operations/queue-management',
        'operations/auto-scheduler',
        'operations/import-customer',
        'operations/import-location',
      ],
    },

    {
      type: 'category',
      label: '📊 Reports',
      items: [
        'reports/sales-report',
        'reports/net-profit-report',
        'reports/shopify-payouts',
        'reports/webhooks-configuration',
      ],
    },

    {
      type: 'category',
      label: '📖 Reference',
      items: [
        'reference/release-notes',
        'reference/faq',
        'reference/troubleshooting',
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // COMING SOON — placeholders (each needs a stub intro.md)
  // Uncomment and expand when each product launches.
  // ─────────────────────────────────────────────────────────────

  // woocommerceSidebar: [
  //   { type: 'doc', id: 'intro', label: '🌐 WooCommerce Connector' },
  // ],

  // magentoSidebar: [
  //   { type: 'doc', id: 'intro', label: '🔷 Magento 2 Connector' },
  // ],

  // amazonSidebar: [
  //   { type: 'doc', id: 'intro', label: '📦 Amazon Connector' },
  // ],

  // ebaySidebar: [
  //   { type: 'doc', id: 'intro', label: '🏷️ eBay Connector' },
  // ],

  // shipstationSidebar: [
  //   { type: 'doc', id: 'intro', label: '🚚 ShipStation Connector' },
  // ],

  // hrmsSidebar: [
  //   { type: 'doc', id: 'intro', label: '👥 HRMS Dashboard' },
  // ],

  // accessSidebar: [
  //   { type: 'doc', id: 'intro', label: '🔐 Access Management' },
  // ],

  // costsSidebar: [
  //   { type: 'doc', id: 'intro', label: '💰 Project Cost Mgmt' },
  // ],
};

module.exports = sidebars;