const PRODUCT_CATEGORIES = {
  CONNECTOR: 'Connectors',
  TOOL: 'Business Tools',
};

/** Core product registry: single source of truth for all products/tools. */
export const PRODUCTS = [
  {
    id: 'shopify',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '🛍️',
    name: 'Shopify–Odoo Connector',
    shortName: 'Shopify',
    color: '#96bf48',
    status: 'live',
    eta: null,
    docsBase: '/docs/shopify',
    docsIntro: '/docs/shopify/intro',
    marketingPath: '/shopify-odoo',
    storeUrl: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector',
    tags: ['Real-time', 'Webhooks', 'Multi-store', 'v18–v19'],
    sections: ['Getting Started', 'Configuration', 'Product Sync', 'Order Sync', 'Inventory', 'Payouts'],
  },
  {
    id: 'woocommerce',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '🌐',
    name: 'WooCommerce–Odoo Connector',
    shortName: 'WooCommerce',
    color: '#7f54b3',
    status: 'coming',
    eta: 'Q2 2026',
    docsBase: '/docs/woocommerce',
    docsIntro: '/docs/woocommerce/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['WordPress', 'REST API', 'Multi-store'],
    sections: ['Overview', 'Setup', 'Product Sync', 'Order Sync'],
  },
  {
    id: 'magento',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '🔷',
    name: 'Magento 2–Odoo Connector',
    shortName: 'Magento 2',
    color: '#f46f25',
    status: 'coming',
    eta: 'Q2 2026',
    docsBase: '/docs/magento',
    docsIntro: '/docs/magento/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['Multi-store', 'Enterprise', 'Multi-language'],
    sections: ['Overview', 'Setup', 'Catalog Sync', 'Order Sync'],
  },
  {
    id: 'amazon',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '📦',
    name: 'Amazon–Odoo Connector',
    shortName: 'Amazon',
    color: '#ff9900',
    status: 'coming',
    eta: 'Q3 2026',
    docsBase: '/docs/amazon',
    docsIntro: '/docs/amazon/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['FBA/FBM', 'Marketplace', 'Seller Central'],
    sections: ['Overview', 'Seller Central', 'FBA Setup', 'Orders'],
  },
  {
    id: 'ebay',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '🏷️',
    name: 'eBay–Odoo Connector',
    shortName: 'eBay',
    color: '#e53238',
    status: 'coming',
    eta: 'Q3 2026',
    docsBase: '/docs/ebay',
    docsIntro: '/docs/ebay/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['Listings', 'Multi-region', 'Multi-account'],
    sections: ['Overview', 'Listing Sync', 'Orders', 'Regions'],
  },
  {
    id: 'shipstation',
    category: PRODUCT_CATEGORIES.CONNECTOR,
    icon: '🚚',
    name: 'ShipStation–Odoo Connector',
    shortName: 'ShipStation',
    color: '#0070f3',
    status: 'coming',
    eta: 'Q1 2027',
    docsBase: '/docs/shipstation',
    docsIntro: '/docs/shipstation/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['Multi-carrier', 'Fulfillment', 'Labels'],
    sections: ['Overview', 'Carriers', 'Label Printing', 'Returns'],
  },
  {
    id: 'hrms',
    category: PRODUCT_CATEGORIES.TOOL,
    icon: '👥',
    name: 'HRMS Dashboard',
    shortName: 'HRMS',
    color: '#8b5cf6',
    status: 'coming',
    eta: 'Q3 2026',
    docsBase: '/docs/hrms',
    docsIntro: '/docs/hrms/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['HR Analytics', 'Payroll', 'Performance'],
    sections: ['Overview', 'Employee Mgmt', 'Payroll', 'Leave'],
  },
  {
    id: 'access',
    category: PRODUCT_CATEGORIES.TOOL,
    icon: '🔐',
    name: 'Access Management',
    shortName: 'Access Mgmt',
    color: '#ec4899',
    status: 'coming',
    eta: 'Q4 2026',
    docsBase: '/docs/access',
    docsIntro: '/docs/access/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['Security', 'RBAC', 'Audit Trail'],
    sections: ['Overview', 'Roles & Permissions', 'Audit Logs'],
  },
  {
    id: 'costs',
    category: PRODUCT_CATEGORIES.TOOL,
    icon: '💰',
    name: 'Project Cost Management',
    shortName: 'Cost Mgmt',
    color: '#f59e0b',
    status: 'coming',
    eta: 'Q4 2026',
    docsBase: '/docs/costs',
    docsIntro: '/docs/costs/intro',
    marketingPath: null,
    storeUrl: null,
    tags: ['Cost Tracking', 'Budgeting', 'Reporting'],
    sections: ['Overview', 'Budgets', 'Cost Tracking', 'Reports'],
  },
];

/** Convenience: products grouped for docs and marketing surfaces. */
export const PRODUCT_GROUPS = [
  {
    key: PRODUCT_CATEGORIES.CONNECTOR,
    label: PRODUCT_CATEGORIES.CONNECTOR,
    accent: '#6366f1',
    items: PRODUCTS.filter(p => p.category === PRODUCT_CATEGORIES.CONNECTOR),
  },
  {
    key: PRODUCT_CATEGORIES.TOOL,
    label: PRODUCT_CATEGORIES.TOOL,
    accent: '#8b5cf6',
    items: PRODUCTS.filter(p => p.category === PRODUCT_CATEGORIES.TOOL),
  },
];

/** Docs menu groups used in nav dropdowns. */
export const DOCS_GROUPS = PRODUCT_GROUPS.map(group => ({
  group: group.label,
  items: group.items.map(p => ({
    icon: p.icon,
    name: p.name,
    shortName: p.shortName,
    color: p.color,
    href: p.docsIntro,
    live: p.status === 'live',
  })),
}));

export function getProductByDocsPath(pathname) {
  return PRODUCTS.find(p => pathname.startsWith(p.docsBase));
}

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductQuickSwitchList() {
  return PRODUCTS.map(p => ({
    prefix: p.docsBase,
    icon: p.icon,
    shortName: `${p.shortName} Connector`,
    color: p.color,
  }));
}

