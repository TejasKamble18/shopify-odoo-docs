---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started

This guide walks you through the complete installation of the SDLC Corp Shopify–Odoo Connector.

## Prerequisites

Before installing, ensure you have:

- A working **Odoo instance** (v18–v19)
- An active **Shopify store** (Basic plan or higher)
- Admin access to both platforms
- The Odoo Apps module enabled

## Installation Steps

### Step 1 — Download the Module

1. Visit the [Odoo App Store](https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector)
2. Click **Buy** or **Try** (for evaluation)
3. Download the zip file to your local machine

### Step 2 — Upload to Odoo

1. In Odoo, go to **Settings → Technical → Update Apps List**
2. Navigate to **Apps → Upload Module**
3. Upload the downloaded zip file
4. Click **Install**

:::tip
Alternatively, place the module folder in your Odoo addons directory and restart the Odoo service.
:::

### Step 3 — Activate Developer Mode

1. Go to **Settings → General Settings**
2. Scroll to the bottom and click **Activate Developer Mode**
3. This is required for full configuration access

### Step 4 — Access the Connector

After installation, you will see a new **Shopify** menu in the top navigation bar of Odoo.

## Next Steps

- [Set up your Shopify store connection →](/docs/installation/setup-connector)
- [Generate API keys →](/docs/installation/generate-api-keys)
