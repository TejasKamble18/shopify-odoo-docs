const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'docs/intro',
    },
    
    {
      type: 'category',
      label: 'Installation',
      items: [
        'docs/installation/getting-started',
        'docs/installation/setup-connector',
        'docs/installation/generate-api-keys',
        'docs/installation/configure-instance',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      items: [
        'docs/configuration/webhook-configuration',
        'docs/configuration/product-configuration',
        'docs/configuration/order-configuration',
        'docs/configuration/tax-configuration',
        'docs/configuration/stock-information',
        'docs/configuration/auto-workflow',
        'docs/configuration/payment-gateway',
      ],
    },

    {
      type: 'category',
      label: 'Operations',
      items: [
        'docs/operations/import-customer',
        'docs/operations/import-location',
        'docs/operations/auto-scheduler',
        'docs/operations/queue-management',
      ],
    },

    {
      type: 'category',
      label: 'Products',
      items: [
        'docs/products/import-products',
        'docs/products/import-specific-products',
        'docs/products/map-products',
        'docs/products/export-stock',
        'docs/products/import-stock',
        'docs/products/update-products',
      ],
    },

    {
      type: 'category',
      label: 'Orders',
      items: [
        'docs/orders/import-unshipped-orders',
        'docs/orders/import-shipped-orders',
        'docs/orders/import-specific-order',
        'docs/orders/import-cancel-order',
        'docs/orders/grant-access-shipment',
        'docs/orders/export-shipment',
        'docs/orders/cancel-order-shopify',
        'docs/orders/refund',
        'docs/orders/import-returns',
      ],
    },

    {
      type: 'category',
      label: 'Reports',
      items: [
        'docs/reports/webhooks-configuration',
        'docs/reports/sales-report',
        'docs/reports/shopify-payouts',
        'docs/reports/net-profit-report',
      ],
    },

    {
      type: 'category',
      label: 'Reference',
      items: [
        'docs/reference/release-notes',
        'docs/reference/troubleshooting',
        'docs/reference/faq',
      ],
    },
  ],
};

module.exports = sidebars;