---
id: configure-instance
title: Configure Instance
sidebar_label: Configure Instance
---

# Configure Your Odoo Instance

After entering your Shopify credentials, configure the sync settings for your Odoo instance.

## Basic Configuration

Navigate to **Shopify → Configuration → Shopify Instances** and open your instance. Configure the following sections:

### Company & Warehouse

| Setting | Description |
|---|---|
| **Company** | The Odoo company to sync data into |
| **Warehouse** | Default warehouse for inventory operations |
| **Sales Team** | Sales team assigned to Shopify orders |

### Customer Settings

| Setting | Description |
|---|---|
| **Default Customer** | Fallback customer for guest checkouts |
| **Customer Import** | Auto-create customers on order import |

### Product Settings

| Setting | Description |
|---|---|
| **Product Type** | Default product type (Storable/Consumable) |
| **UoM** | Default unit of measure |

## Saving the Configuration

Click **Save** after configuring all fields. The connector will validate the connection and display a green status indicator if everything is set up correctly.

## Next Step

Proceed to [Webhook Configuration](/docs/configuration/webhook-configuration) to enable real-time sync.
