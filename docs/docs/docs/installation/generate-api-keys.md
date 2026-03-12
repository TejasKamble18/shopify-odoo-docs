---
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
