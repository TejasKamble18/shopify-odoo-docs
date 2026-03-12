import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '97d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '88d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ba2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '99a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cb1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '09f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '22e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b34'),
            routes: [
              {
                path: '/docs/docs/configuration/auto-workflow',
                component: ComponentCreator('/docs/docs/configuration/auto-workflow', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/order-configuration',
                component: ComponentCreator('/docs/docs/configuration/order-configuration', 'fc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/payment-gateway',
                component: ComponentCreator('/docs/docs/configuration/payment-gateway', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/product-configuration',
                component: ComponentCreator('/docs/docs/configuration/product-configuration', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/stock-information',
                component: ComponentCreator('/docs/docs/configuration/stock-information', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/tax-configuration',
                component: ComponentCreator('/docs/docs/configuration/tax-configuration', '619'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/configuration/webhook-configuration',
                component: ComponentCreator('/docs/docs/configuration/webhook-configuration', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/installation/configure-instance',
                component: ComponentCreator('/docs/docs/installation/configure-instance', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/installation/generate-api-keys',
                component: ComponentCreator('/docs/docs/installation/generate-api-keys', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/installation/getting-started',
                component: ComponentCreator('/docs/docs/installation/getting-started', 'f4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/installation/setup-connector',
                component: ComponentCreator('/docs/docs/installation/setup-connector', '444'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/operations/auto-scheduler',
                component: ComponentCreator('/docs/docs/operations/auto-scheduler', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/operations/import-customer',
                component: ComponentCreator('/docs/docs/operations/import-customer', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/operations/import-location',
                component: ComponentCreator('/docs/docs/operations/import-location', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/operations/queue-management',
                component: ComponentCreator('/docs/docs/operations/queue-management', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/cancel-order-shopify',
                component: ComponentCreator('/docs/docs/orders/cancel-order-shopify', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/export-shipment',
                component: ComponentCreator('/docs/docs/orders/export-shipment', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/grant-access-shipment',
                component: ComponentCreator('/docs/docs/orders/grant-access-shipment', 'f45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/import-cancel-order',
                component: ComponentCreator('/docs/docs/orders/import-cancel-order', 'd32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/import-returns',
                component: ComponentCreator('/docs/docs/orders/import-returns', '3c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/import-shipped-orders',
                component: ComponentCreator('/docs/docs/orders/import-shipped-orders', '019'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/import-specific-order',
                component: ComponentCreator('/docs/docs/orders/import-specific-order', '531'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/import-unshipped-orders',
                component: ComponentCreator('/docs/docs/orders/import-unshipped-orders', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/orders/refund',
                component: ComponentCreator('/docs/docs/orders/refund', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/export-stock',
                component: ComponentCreator('/docs/docs/products/export-stock', '0a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/import-products',
                component: ComponentCreator('/docs/docs/products/import-products', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/import-specific-products',
                component: ComponentCreator('/docs/docs/products/import-specific-products', '71d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/import-stock',
                component: ComponentCreator('/docs/docs/products/import-stock', 'e25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/map-products',
                component: ComponentCreator('/docs/docs/products/map-products', 'cd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/products/update-products',
                component: ComponentCreator('/docs/docs/products/update-products', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reference/faq',
                component: ComponentCreator('/docs/docs/reference/faq', 'e48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reference/release-notes',
                component: ComponentCreator('/docs/docs/reference/release-notes', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reference/troubleshooting',
                component: ComponentCreator('/docs/docs/reference/troubleshooting', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reports/net-profit-report',
                component: ComponentCreator('/docs/docs/reports/net-profit-report', '4a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reports/sales-report',
                component: ComponentCreator('/docs/docs/reports/sales-report', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reports/shopify-payouts',
                component: ComponentCreator('/docs/docs/reports/shopify-payouts', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reports/webhooks-configuration',
                component: ComponentCreator('/docs/docs/reports/webhooks-configuration', '369'),
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
    component: ComponentCreator('/', '181'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
