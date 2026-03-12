---
id: generate-api-keys
title: Generate API Keys
sidebar_label: Generate API Keys
---

# Generate Shopify API Keys

To connect Odoo with Shopify, you need to create a Custom App in Shopify and obtain API credentials.

## Creating a Custom App in Shopify

1. Log in to your **Shopify Admin**
2. Go to **Settings → Apps and sales channels**
3. Click **Develop apps** (top right)
4. Click **Allow custom app development** if prompted
5. Click **Create an app**
6. Enter an app name (e.g., `SDLC Odoo Connector`)
7. Click **Create app**

## Configuring API Scopes

Once the app is created:

1. Click **Configure Admin API scopes**
2. Enable the following scopes:

| Scope | Required For |
|---|---|
| `read_products`, `write_products` | Product sync |
| `read_orders`, `write_orders` | Order management |
| `read_inventory`, `write_inventory` | Inventory sync |
| `read_customers`, `write_customers` | Customer sync |
| `read_shipping`, `write_shipping` | Shipment export |
| `read_fulfillments`, `write_fulfillments` | Fulfillment sync |
| `read_locations` | Warehouse mapping |
| `read_reports` | Payout reports |

3. Click **Save**

## Obtaining Credentials

1. Click **Install app**
2. Note your **API key** and **API secret key**
3. Copy the **Admin API access token** (shown only once — save it immediately)

:::warning
The Admin API access token is shown **only once**. Copy and store it securely before closing the page.
:::

## Entering Credentials in Odoo

Enter these values in your Shopify instance configuration in Odoo. Refer to [Setup Connector](/docs/installation/setup-connector) for the full steps.
