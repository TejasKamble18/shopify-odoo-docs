---
id: faq
title: FAQ
sidebar_label: FAQ
---

# Frequently Asked Questions

### Does the connector work with Shopify Plus?

Yes. The connector supports all Shopify plans including Basic, Shopify, Advanced, and Plus. Shopify Plus stores with multiple storefronts are supported via multi-instance configuration.

---

### How many Shopify stores can I connect to one Odoo instance?

There is no hard limit. Each store is configured as a separate Shopify Instance in Odoo. In practice, customers run 5–10 stores per Odoo instance with no performance issues.

---

### Does it support multi-currency?

Yes. Each Shopify instance can be configured with a Shopify-specific currency. Orders are imported with the currency from Shopify and converted using Odoo's currency rates.

---

### What happens if a sync fails?

The connector uses a queue system with automatic retry. Failed records appear in **Shopify → Operations → Queue** with error details. You can fix the issue and reprocess with a single click.

---

### Is there a free trial?

Yes — the Odoo App Store provides a trial period. Visit the [Odoo App Store listing](https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector) for current pricing and trial options.

---

### Do I need a developer to install it?

No. The connector is installed through the standard Odoo app installation process. A guided setup wizard walks you through configuration. However, for complex multi-company or multi-warehouse setups, SDLC Corp offers paid implementation services.

---

### Does it work with Odoo Community Edition?

Yes, the connector works with both Odoo Community and Enterprise editions.

---

### How do I get support?

Contact SDLC Corp via [sdlccorp.com/contact-us](https://sdlccorp.com/contact-us/) or email support@sdlccorp.com. Priority support is available for enterprise customers.
