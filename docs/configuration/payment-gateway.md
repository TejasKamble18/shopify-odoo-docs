---
id: payment-gateway
title: Payment Gateway
sidebar_label: Payment Gateway
---

# Payment Gateway Configuration

Map Shopify payment gateways to Odoo accounting journals for correct financial recording.

## Gateway Mapping

Navigate to **Shopify → Configuration → Payment Gateway**:

1. Click **New**
2. Set the **Shopify Gateway Name** (e.g., `shopify_payments`, `paypal`, `stripe`)
3. Select the **Odoo Journal**
4. Save

## Common Gateway Mappings

| Shopify Gateway | Recommended Odoo Journal |
|---|---|
| Shopify Payments | Shopify Bank Journal |
| PayPal | PayPal Journal |
| Stripe | Stripe Journal |
| Cash on Delivery | Cash Journal |
| Manual | Bank Journal |

:::tip
Create a dedicated bank journal in Odoo for each Shopify payment gateway for clean reconciliation.
:::
