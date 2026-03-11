---
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

\`\`\`bash
cp -r sdlc_shopify_connector /opt/odoo/custom_addons/
\`\`\`

### Step 3: Restart Odoo

\`\`\`bash
sudo systemctl restart odoo
\`\`\`

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
