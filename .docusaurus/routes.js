import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '014'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '27c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ced'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b51'),
    exact: true
  },
  {
    path: '/products',
    component: ComponentCreator('/products', '6f2'),
    exact: true
  },
  {
    path: '/shopify-odoo',
    component: ComponentCreator('/shopify-odoo', '619'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c16'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '808'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '266'),
            routes: [
              {
                path: '/docs/configuration/auto-workflow',
                component: ComponentCreator('/docs/configuration/auto-workflow', 'eed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/order-configuration',
                component: ComponentCreator('/docs/configuration/order-configuration', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/payment-gateway',
                component: ComponentCreator('/docs/configuration/payment-gateway', '798'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/product-configuration',
                component: ComponentCreator('/docs/configuration/product-configuration', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/stock-information',
                component: ComponentCreator('/docs/configuration/stock-information', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/tax-configuration',
                component: ComponentCreator('/docs/configuration/tax-configuration', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configuration/webhook-configuration',
                component: ComponentCreator('/docs/configuration/webhook-configuration', '629'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/configure-instance',
                component: ComponentCreator('/docs/installation/configure-instance', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/generate-api-keys',
                component: ComponentCreator('/docs/installation/generate-api-keys', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/getting-started',
                component: ComponentCreator('/docs/installation/getting-started', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation/setup-connector',
                component: ComponentCreator('/docs/installation/setup-connector', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/operations/auto-scheduler',
                component: ComponentCreator('/docs/operations/auto-scheduler', 'c3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/operations/import-customer',
                component: ComponentCreator('/docs/operations/import-customer', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/operations/import-location',
                component: ComponentCreator('/docs/operations/import-location', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/operations/queue-management',
                component: ComponentCreator('/docs/operations/queue-management', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/cancel-order-shopify',
                component: ComponentCreator('/docs/orders/cancel-order-shopify', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/export-shipment',
                component: ComponentCreator('/docs/orders/export-shipment', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/grant-access-shipment',
                component: ComponentCreator('/docs/orders/grant-access-shipment', 'ff8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/import-cancel-order',
                component: ComponentCreator('/docs/orders/import-cancel-order', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/import-returns',
                component: ComponentCreator('/docs/orders/import-returns', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/import-shipped-orders',
                component: ComponentCreator('/docs/orders/import-shipped-orders', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/import-specific-order',
                component: ComponentCreator('/docs/orders/import-specific-order', '727'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/import-unshipped-orders',
                component: ComponentCreator('/docs/orders/import-unshipped-orders', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/orders/refund',
                component: ComponentCreator('/docs/orders/refund', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/export-stock',
                component: ComponentCreator('/docs/products/export-stock', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/import-products',
                component: ComponentCreator('/docs/products/import-products', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/import-specific-products',
                component: ComponentCreator('/docs/products/import-specific-products', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/import-stock',
                component: ComponentCreator('/docs/products/import-stock', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/map-products',
                component: ComponentCreator('/docs/products/map-products', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/products/update-products',
                component: ComponentCreator('/docs/products/update-products', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/faq',
                component: ComponentCreator('/docs/reference/faq', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/release-notes',
                component: ComponentCreator('/docs/reference/release-notes', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/troubleshooting',
                component: ComponentCreator('/docs/reference/troubleshooting', '336'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reports/net-profit-report',
                component: ComponentCreator('/docs/reports/net-profit-report', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reports/sales-report',
                component: ComponentCreator('/docs/reports/sales-report', '888'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reports/shopify-payouts',
                component: ComponentCreator('/docs/reports/shopify-payouts', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reports/webhooks-configuration',
                component: ComponentCreator('/docs/reports/webhooks-configuration', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2c0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
