// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    { type: 'doc', id: 'intro', label: '👋 Welcome' },
    {
      type: 'category',
      label: '⚙️ Installation',
      collapsed: false,
      items: [
        'installation/getting-started',
        'installation/setup-connector',
        'installation/generate-api-keys',
        'installation/configure-instance',
      ],
    },
    {
      type: 'category',
      label: '🔧 Configuration',
      collapsed: true,
      items: [
        'configuration/webhook-configuration',
        'configuration/product-configuration',
        'configuration/order-configuration',
        'configuration/tax-configuration',
        'configuration/stock-information',
        'configuration/auto-workflow',
        'configuration/payment-gateway',
      ],
    },
    {
      type: 'category',
      label: '🔄 Operations',
      collapsed: true,
      items: [
        'operations/import-customer',
        'operations/import-location',
        'operations/auto-scheduler',
        'operations/queue-management',
      ],
    },
    {
      type: 'category',
      label: '📦 Products',
      collapsed: true,
      items: [
        'products/import-products',
        'products/import-specific-products',
        'products/map-products',
        'products/export-stock',
        'products/import-stock',
        'products/update-products',
      ],
    },
    {
      type: 'category',
      label: '🛒 Orders',
      collapsed: true,
      items: [
        'orders/import-unshipped-orders',
        'orders/import-shipped-orders',
        'orders/import-specific-order',
        'orders/import-cancel-order',
        'orders/grant-access-shipment',
        'orders/export-shipment',
        'orders/cancel-order-shopify',
        'orders/refund',
        'orders/import-returns',
      ],
    },
    {
      type: 'category',
      label: '📊 Reports',
      collapsed: true,
      items: [
        'reports/webhooks-configuration',
        'reports/sales-report',
        'reports/shopify-payouts',
        'reports/net-profit-report',
      ],
    },
    {
      type: 'category',
      label: '📋 Reference',
      collapsed: true,
      items: [
        'reference/release-notes',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

module.exports = sidebars;
