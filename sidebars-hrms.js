// sidebars-hrms.js
// Sidebar for the HRMS Dashboard docs plugin (id: 'hrms').
//
// IMPORTANT: The top-level key must match the plugin id used in docusaurus.config.js.
// Doc IDs are relative to docs-hrms/ — e.g. 'intro' = docs-hrms/intro.md

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Key must match: plugins[].id = 'hrms'  in docusaurus.config.js
  hrmsSidebar: [

    { type: 'doc', id: 'intro', label: '👥 HRMS Dashboard' },

    {
      type: 'category',
      label: '🚀 Installation',
      collapsed: false,
      items: ['installation/getting-started'],
    },

    {
      type: 'category',
      label: '👤 Employee Management',
      collapsed: false,
      items: ['employees/employee-management'],
    },

    {
      type: 'category',
      label: '💵 Payroll',
      collapsed: false,
      items: ['payroll/payroll'],
    },

    {
      type: 'category',
      label: '📅 Leave & Attendance',
      collapsed: false,
      items: ['leave/leave-attendance'],
    },

    {
      type: 'category',
      label: '📊 Reports & Analytics',
      collapsed: false,
      items: ['reports/reports'],
    },

  ],
};

module.exports = sidebars;