---
id: tax-configuration
title: Tax Configuration
sidebar_label: Tax Configuration
---

# Tax Configuration

Map Shopify taxes to Odoo fiscal positions and tax rules.

## Tax Mapping

Navigate to **Shopify → Configuration → Tax Mapping**:

1. Click **New**
2. Set the **Shopify Tax Name** (as it appears in Shopify)
3. Select the corresponding **Odoo Tax**
4. Save

## Fiscal Positions

For country-specific tax handling:

1. Go to **Accounting → Configuration → Fiscal Positions**
2. Create a fiscal position for your Shopify customer base
3. Assign the fiscal position to your Shopify instance

:::info
If your Shopify store uses Shopify Tax (automatic), the connector reads the tax amount directly from the order and maps it to the closest Odoo tax based on rate.
:::
