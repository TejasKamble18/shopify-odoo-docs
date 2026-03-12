---
id: setup-connector
title: Setup Connector
sidebar_label: Setup Connector
---

# Setup Connector

After installing the module, configure the Shopify store connection in Odoo.

## Adding a New Shopify Instance

1. In Odoo, navigate to **Shopify → Configuration → Shopify Instances**
2. Click **New** to create a new instance
3. Fill in the required fields:

| Field | Description |
|---|---|
| **Name** | A label for this Shopify store (e.g., "My US Store") |
| **Shopify URL** | Your store domain (e.g., `mystore.myshopify.com`) |
| **API Key** | From your Shopify Private App |
| **API Secret** | From your Shopify Private App |
| **Access Token** | Admin API access token |

4. Click **Test Connection** to verify the credentials
5. Click **Save**

## Multi-Store Setup

The connector supports multiple Shopify stores connected to the same Odoo instance. Simply repeat the steps above for each store. Each store maintains its own sync settings, webhooks, and operation queues.

:::info
For multi-store configurations, you can configure different warehouses and price lists per store instance.
:::
