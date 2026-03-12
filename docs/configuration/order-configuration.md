---
id: order-configuration
title: Order Configuration
sidebar_label: Order Configuration
---

# Order Configuration

Configure how Shopify orders are imported and processed in Odoo.

## Order Import Settings

| Setting | Description |
|---|---|
| **Order Prefix** | Prefix added to Shopify order numbers in Odoo |
| **Sales Journal** | Accounting journal for Shopify sales |
| **Payment Method** | Default payment method for Shopify orders |
| **Auto Confirm** | Auto-confirm sales orders on import |
| **Auto Invoice** | Auto-create invoice after order confirm |
| **Auto Validate** | Auto-validate invoice |
| **Auto Ship** | Auto-create delivery order |

## Auto Workflow

The Auto Workflow feature allows you to automate the full order lifecycle:

1. Order imported → Sales Order created
2. Sales Order confirmed automatically
3. Invoice created and validated
4. Delivery order created and validated
5. Payment registered

Enable this in **Shopify → Configuration → Auto Workflow** per order status.

## Tax Configuration

See [Tax Configuration](/docs/configuration/tax-configuration) for mapping Shopify taxes to Odoo fiscal positions.
