---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

## Common Issues

### ❌ Connection Test Fails

**Cause:** Incorrect API credentials or Shopify URL.

**Fix:**
1. Double-check the Shopify URL format: `mystore.myshopify.com` (no `https://`)
2. Verify the API key, secret, and access token are correct
3. Ensure the Private App has all required scopes enabled

---

### ❌ Webhooks Not Triggering

**Cause:** Odoo instance not reachable from the internet.

**Fix:**
1. Verify your Odoo URL is publicly accessible
2. Check firewall rules allow inbound HTTPS on port 443
3. Test the webhook URL manually using a tool like [webhook.site](https://webhook.site)

---

### ❌ Orders Not Importing

**Cause:** Date filter too restrictive, or queue processing paused.

**Fix:**
1. Check **Shopify → Operations → Queue** for errors
2. Try importing a specific order by ID to isolate the issue
3. Verify the Shopify order is in the correct status (paid/unfulfilled)

---

### ❌ Products Duplicating

**Cause:** Products imported without proper mapping, or Shopify Product IDs not stored.

**Fix:**
1. Check each product for a **Shopify Product ID** field
2. Use **Map Products** to link existing products without re-importing
3. Run a duplicate cleanup action in Odoo

---

### ❌ Stock Levels Incorrect

**Cause:** Location mapping misconfigured.

**Fix:**
1. Go to **Shopify → Configuration → Location Mapping**
2. Ensure every Shopify location is mapped to an Odoo internal location
3. Re-run **Export Stock** after fixing the mapping

## Getting Support

If you can't resolve the issue:
- Email: support@sdlccorp.com
- Website: [sdlccorp.com/contact-us](https://sdlccorp.com/contact-us/)
