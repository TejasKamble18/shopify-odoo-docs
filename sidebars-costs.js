// sidebars-costs.js
// Sidebar for the Project Cost Management docs plugin (id: 'costs').
//
// IMPORTANT: The top-level key must match the plugin id used in docusaurus.config.js.
// Doc IDs are relative to docs-costs/ — e.g. 'intro' = docs-costs/intro.md

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Key must match: plugins[].id = 'costs'  in docusaurus.config.js
  costsSidebar: [

    { type: 'doc', id: 'intro', label: '💰 Project Cost Management' },

    {
      type: 'category',
      label: '🚀 Installation',
      collapsed: false,
      items: ['installation/getting-started'],
    },

    {
      type: 'category',
      label: '📋 Budget Management',
      collapsed: false,
      items: ['budgets/budgets'],
    },

    {
      type: 'category',
      label: '📌 Cost Tracking',
      collapsed: false,
      items: ['tracking/cost-tracking'],
    },

    {
      type: 'category',
      label: '🔮 Forecasting',
      collapsed: false,
      items: ['forecasting/forecasting'],
    },

    {
      type: 'category',
      label: '📊 Reports & Dashboards',
      collapsed: false,
      items: ['reports/reports'],
    },

  ],
};

module.exports = sidebars;