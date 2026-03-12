const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

// Ensure docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// All files to create
const files = {
  'docs/installation/getting-started.md': `---
sidebar_position: 1
title: Installation
description: How to install the Shopify–Odoo Connector module
---

# Installation Guide

Install the Shopify–Odoo Connector module in your Odoo environment.

## Prerequisites

- Odoo 16+ installed and running
- Administrator access to Odoo
- Shopify store with admin access

## Installation Steps

### Step 1: Download the Module

Get the module from:
- **Odoo App Store**: [Shopify Connector](https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector)
- **SDLC Corp**: [Contact us](https://sdlccorp.com/contact-us/)

### Step 2: Place on Addons Path

Extract the zip file and copy to your custom addons folder:

\\\`\\\`\\\`bash
cp -r sdlc_shopify_connector /opt/odoo/custom_addons/
\\\`\\\`\\\`

### Step 3: Restart Odoo

\\\`\\\`\\\`bash
sudo systemctl restart odoo
\\\`\\\`\\\`

### Step 4: Update Apps List

1. Log in to Odoo as **Administrator**
2. Go to **Apps**
3. Click **Update Apps List**
4. Wait for refresh

### Step 5: Install the Connector

1. Search for **"Shopify Odoo Connector"**
2. Click the result
3. Click **Install**

## Next Steps

✅ Installation complete! Now [generate your API keys](./generate-api-keys).
`,

  'docs/installation/setup-connector.md': `---
sidebar_position: 2
title: Setup Connector
description: Initial setup of the Shopify-Odoo Connector
---

# Setup Connector

Get your connector ready for integration.

## What You Need

Before starting, gather:
1. Shopify Store URL
2. Shopify API Key
3. Shopify API Secret
4. Odoo Admin Access

## Next Steps

[Generate API Keys](./generate-api-keys) →
`,

  'docs/installation/generate-api-keys.md': `---
sidebar_position: 3
title: Generate API Keys
description: Create Shopify API credentials
---

# Generate API Keys

Create API credentials in Shopify Admin.

## Steps

### Step 1: Log into Shopify Admin

Go to: **admin.shopify.com**

### Step 2: Navigate to Apps

**Settings → Apps and sales channels → Develop apps**

### Step 3: Create Custom App

Click **Create an app**

Name it: **"Odoo Connector"**

### Step 4: Configure API Scopes

Enable these permissions:
- read_products, write_products
- read_orders, write_orders
- read_customers, write_customers
- read_inventory, write_inventory
- read_locations
- read_fulfillments, write_fulfillments
- read_shopify_payments_payouts

### Step 5: Install & Copy Credentials

Click **Install app**

Copy:
- API Key
- API Secret
- Access Token

⚠️ Token shown only once!

## Next Steps

[Configure Instance](./configure-instance) →
`,

  'docs/installation/configure-instance.md': `---
sidebar_position: 4
title: Configure Instance
description: Link your Shopify store to Odoo
---

# Configure Shopify Instance

Link Shopify to Odoo.

## Steps

### Step 1: Go to Configuration

In Odoo: **Shopify → Configuration → Shopify Instances**

### Step 2: Click New

Enter:
- Instance Name
- Shopify URL
- API Key
- API Secret

### Step 3: Test Connection

Click **Test Connection**

Expected: ✅ **Connection Successful**

### Step 4: Save

Click **Save**

## Done!

Your integration is ready! 🎉
`,

  'docs/configuration/webhook-configuration.md': `---
sidebar_position: 1
title: Webhook Configuration
description: Set up webhooks for real-time sync
---

# Webhook Configuration

Configure webhooks for real-time sync.

**Shopify → Configuration → Webhook Configuration**

Enable these events:
- Product Created/Updated
- Order Created/Updated
- Order Cancelled

Click **Test Webhook** to verify.
`,

  'docs/configuration/product-configuration.md': `---
sidebar_position: 2
title: Product Configuration
description: Configure product synchronization
---

# Product Configuration

Set up product sync settings.

**Shopify → Configuration → Product Configuration**

Configure:
- Product types to sync
- Category mapping
- Variant handling
- Pricing rules
`,

  'docs/configuration/order-configuration.md': `---
sidebar_position: 3
title: Order Configuration
description: Configure order synchronization settings
---

# Order Configuration

Set up order sync settings.

**Shopify → Configuration → Order Configuration**

Configure:
- Order status mapping
- Fulfillment settings
- Return handling
- Refund processing
`,

  'docs/configuration/tax-configuration.md': `---
sidebar_position: 4
title: Tax Configuration
description: Configure tax mapping
---

# Tax Configuration

Configure tax settings.

**Shopify → Configuration → Tax Configuration**

Map Shopify tax rates to Odoo tax groups.
`,

  'docs/configuration/stock-information.md': `---
sidebar_position: 5
title: Stock Information
description: Configure inventory settings
---

# Stock Information

Configure inventory settings.

**Shopify → Configuration → Stock Information**

Set up stock sync and warehouse mappings.
`,

  'docs/configuration/auto-workflow.md': `---
sidebar_position: 6
title: Auto Workflow
description: Automate order processing
---

# Auto Workflow

Automate order workflows.

**Shopify → Configuration → Auto Workflow**

Set up automatic order confirmations and shipment processing.
`,

  'docs/configuration/payment-gateway.md': `---
sidebar_position: 7
title: Payment Gateway
description: Configure payment processing
---

# Payment Gateway Configuration

Configure payment settings.

**Shopify → Configuration → Payment Gateway**

Set up payment method mappings.
`,

  'docs/operations/import-customer.md': `---
sidebar_position: 1
title: Import Customer
description: Import customers from Shopify to Odoo
---

# Import Customer

Import customers from Shopify.

**Shopify → Operations → Import Customer**

Click **Import Customers** to sync customer data.
`,

  'docs/operations/import-location.md': `---
sidebar_position: 2
title: Import Location
description: Import Shopify locations to Odoo
---

# Import Location

Import warehouse locations.

**Shopify → Operations → Import Location**

Click **Import Locations** to sync storage locations.
`,

  'docs/operations/auto-scheduler.md': `---
sidebar_position: 3
title: Auto Scheduler Configuration
description: Set up automatic synchronization
---

# Auto Scheduler Configuration

Configure automatic sync schedules.

**Shopify → Configuration → Auto Scheduler**

Set sync intervals for:
- Products
- Orders
- Inventory
- Customers
`,

  'docs/operations/queue-management.md': `---
sidebar_position: 4
title: Queue Management
description: Monitor synchronization queue
---

# Queue Management

Monitor sync jobs.

**Shopify → Operations → Queue**

View status of all sync operations.
Retry failed jobs if needed.
`,

  'docs/products/import-products.md': `---
sidebar_position: 1
title: Import Products
description: Import products from Shopify to Odoo
---

# Import Products

Import all Shopify products.

**Shopify → Products → Import Products**

Click **Import Products** to sync your catalog.
`,

  'docs/products/import-specific-products.md': `---
sidebar_position: 2
title: Import Specific Products
description: Import selected products
---

# Import Specific Products

Import only selected products.

**Shopify → Products → Import Specific Products**

Select products by ID or name to import.
`,

  'docs/products/map-products.md': `---
sidebar_position: 3
title: Map Products
description: Link Shopify products to Odoo products
---

# Map Products

Link Shopify to Odoo products.

**Shopify → Products → Map Products**

Match Shopify products with existing Odoo products.
`,

  'docs/products/export-stock.md': `---
sidebar_position: 4
title: Export Stock
description: Send Odoo inventory levels to Shopify
---

# Export Stock

Send inventory to Shopify.

**Shopify → Products → Export Stock**

Click **Export Stock** to update Shopify inventory.
`,

  'docs/products/import-stock.md': `---
sidebar_position: 5
title: Import Stock
description: Import inventory levels from Shopify
---

# Import Stock

Import Shopify inventory.

**Shopify → Products → Import Stock**

Click **Import Stock** to sync inventory levels.
`,

  'docs/products/update-products.md': `---
sidebar_position: 6
title: Update / Export Products
description: Update and export products to Shopify
---

# Update / Export Products

Update products in Shopify.

**Shopify → Products → Update Products**

Export Odoo changes to Shopify.
`,

  'docs/orders/import-unshipped-orders.md': `---
sidebar_position: 1
title: Import Unshipped Orders
description: Import orders pending fulfillment
---

# Import Unshipped Orders

Import pending orders.

**Shopify → Orders → Import Unshipped Orders**

Click **Import** to sync unfulfilled orders.
`,

  'docs/orders/import-shipped-orders.md': `---
sidebar_position: 2
title: Import Shipped Orders
description: Import orders that have been shipped
---

# Import Shipped Orders

Import shipped orders.

**Shopify → Orders → Import Shipped Orders**

Click **Import** to sync completed shipments.
`,

  'docs/orders/import-specific-order.md': `---
sidebar_position: 3
title: Import Specific Order
description: Import a single order by ID
---

# Import Specific Order

Import single order.

**Shopify → Orders → Import Specific Order**

Enter order ID and click **Import**.
`,

  'docs/orders/import-cancel-order.md': `---
sidebar_position: 4
title: Import Cancel Order
description: Import cancelled orders
---

# Import Cancel Order

Import cancelled orders.

**Shopify → Orders → Import Cancel Order**

Click **Import** to sync cancellations.
`,

  'docs/orders/grant-access-shipment.md': `---
sidebar_position: 5
title: Grant Access - Shipment
description: Configure fulfillment permissions
---

# Grant Access - Shipment

Configure shipment permissions.

**Shopify → Orders → Grant Access**

Set user permissions for shipments.
`,

  'docs/orders/export-shipment.md': `---
sidebar_position: 6
title: Export Shipment / Update Status
description: Send shipping updates to Shopify
---

# Export Shipment / Update Status

Send shipments to Shopify.

**Shopify → Orders → Export Shipment**

Click **Export** to update Shopify with tracking.
`,

  'docs/orders/cancel-order-shopify.md': `---
sidebar_position: 7
title: Cancel Order in Shopify
description: Cancel orders in Shopify from Odoo
---

# Cancel Order in Shopify

Cancel orders in Shopify.

**Shopify → Orders → Cancel Order**

Click **Cancel in Shopify** to process cancellation.
`,

  'docs/orders/refund.md': `---
sidebar_position: 8
title: Refund
description: Process refunds in Shopify
---

# Refund

Process customer refunds.

**Shopify → Orders → Refund**

Click **Process Refund** to issue refund.
`,

  'docs/orders/import-returns.md': `---
sidebar_position: 9
title: Import Returns & Refunds
description: Import return and refund data
---

# Import Returns & Refunds

Import returns and refunds.

**Shopify → Orders → Import Returns**

Click **Import** to sync return/refund data.
`,

  'docs/reports/webhooks-configuration.md': `---
sidebar_position: 1
title: Webhooks Configuration
description: Advanced webhook settings
---

# Webhooks Configuration

Advanced webhook settings.

**Shopify → Reports → Webhooks**

View and manage webhook logs.
`,

  'docs/reports/sales-report.md': `---
sidebar_position: 2
title: Sales Report & Log Book
description: View sales reports and logs
---

# Sales Report & Log Book

View sales reports.

**Shopify → Reports → Sales Report**

See sales metrics and transaction logs.
`,

  'docs/reports/shopify-payouts.md': `---
sidebar_position: 3
title: Shopify Payouts
description: View and track payouts
---

# Shopify Payouts

View payout information.

**Shopify → Reports → Payouts**

Track all payouts from Shopify.
`,

  'docs/reports/net-profit-report.md': `---
sidebar_position: 4
title: Net Profit Report
description: View profitability analysis
---

# Net Profit Report

View profitability.

**Shopify → Reports → Net Profit**

Analyze profit and cost breakdown.
`,

  'docs/reference/release-notes.md': `---
sidebar_position: 1
title: Release Notes
description: Version history and updates
---

# Release Notes

Version history.

## Version 1.0.0

- Initial release
- Product sync
- Order management
- Customer sync
- Inventory sync
`,

  'docs/reference/troubleshooting.md': `---
sidebar_position: 2
title: Troubleshooting
description: Common issues and solutions
---

# Troubleshooting

Common issues and fixes.

## Connection Issues

**Problem:** Cannot connect to Shopify

**Solution:**
1. Verify API key
2. Check API secret
3. Ensure app installed in Shopify
4. Check network

## Product Sync Issues

**Problem:** Products not syncing

**Solution:**
1. Check webhooks
2. Verify mappings
3. Check queue
4. Retry sync
`,

  'docs/reference/faq.md': `---
sidebar_position: 3
title: FAQ
description: Frequently asked questions
---

# FAQ

Frequently Asked Questions

## How do I start?

Follow [Getting Started](../installation/getting-started).

## What data syncs?

- Products
- Orders
- Customers
- Inventory
- Payouts

## How often?

Real-time with webhooks.

## Need help?

[Contact us](https://sdlccorp.com/contact-us/)
`
};

// Create all files
let count = 0;
Object.keys(files).forEach(filePath => {
  const fullPath = path.join(docsDir, filePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, files[filePath], 'utf8');
  console.log(`✓ ${filePath}`);
  count++;
});

console.log(`\n✅ Created ${count} documentation files!`);
console.log('\nNext step: npm run start');