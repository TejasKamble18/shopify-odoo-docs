---
id: webhook-configuration
title: Webhook Configuration
sidebar_label: Webhook Configuration
---

# Webhook Configuration

Webhooks enable real-time sync between Shopify and Odoo. When an event occurs in Shopify (new order, updated product, etc.), Shopify instantly notifies Odoo.

## Auto-Register Webhooks

The connector can automatically register all required webhooks with a single click:

1. Go to **Shopify → Configuration → Shopify Instances**
2. Open your instance
3. Click **Register Webhooks**
4. All webhooks are created automatically in Shopify

## Registered Webhook Events

| Event | Trigger |
|---|---|
| `orders/create` | New order placed |
| `orders/updated` | Order status changed |
| `orders/cancelled` | Order cancelled |
| `orders/fulfilled` | Order shipped |
| `refunds/create` | Refund issued |
| `products/create` | New product added |
| `products/update` | Product updated |
| `inventory_levels/update` | Stock changed |
| `customers/create` | New customer |

## Verifying Webhooks

To verify your webhooks are active:

1. In Shopify Admin, go to **Settings → Notifications → Webhooks**
2. All webhooks should be listed and show **Recent deliveries**

:::tip
If webhooks are not appearing, check that your Odoo instance is publicly accessible (not behind a firewall or localhost).
:::

## Troubleshooting

**Webhooks not triggering?**
- Ensure Odoo is accessible from the internet
- Check **Shopify → Operations → Webhook Logs** for delivery errors
- Re-register webhooks from the instance configuration

**Duplicate records?**
- Webhooks and scheduled syncs may overlap. Configure your cron jobs to avoid conflict windows.
