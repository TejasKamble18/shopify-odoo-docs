
const PAGES = {

  /* ── Webhook Configuration ── */
  wbcfg: {
    title: 'Webhook Configuration',
    section: 'Shopify Configurations',
    subtitle: 'Enable real-time event push from Shopify to Odoo for instant data sync.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify Admin → Settings → Notifications → Webhooks — verify registrations',
    prev: { id: 'cfginst', title: 'Configure Shopify Instance' },
    next: { id: 'prcfg', title: 'Product Configuration' },
    body: `
      <p>Webhooks eliminate constant polling. When an event fires in Shopify (new order, product update, cancellation), Shopify sends a signed POST request to your Odoo instance URL in real time.</p>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Open Webhook Tab</div><div class="step-desc"><strong>Shopify → Configuration → Shopify Instances</strong> → open your instance → <strong>Webhook</strong> tab.</div></div></div>
        <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Register Webhooks</div><div class="step-desc">Click <strong>Register Webhook</strong>. The connector auto-registers all required endpoints with your Shopify store using the configured API credentials.</div></div></div>
        <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Verify in Shopify Admin</div><div class="step-desc">In Shopify Admin → <strong>Settings → Notifications → Webhooks</strong>, you should see multiple entries pointing to your Odoo URL.</div></div></div>
      </div>
      <div class="callout info"><span class="callout-icon">🔒</span><div class="callout-body"><strong>HTTPS is Mandatory</strong> — Shopify only delivers webhooks to HTTPS endpoints. Ensure your Odoo instance has a valid SSL certificate. <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">SDLC Corp</a> covers secure Odoo deployment as part of the integration service.</div></div>
      <h2>Supported Webhook Events</h2>
      <table><tr><th>Topic</th><th>Trigger</th><th>Odoo Action</th></tr>
      <tr><td><code>orders/create</code></td><td>New order placed</td><td>Create Sale Order</td></tr>
      <tr><td><code>orders/updated</code></td><td>Order status changed</td><td>Update Sale Order</td></tr>
      <tr><td><code>orders/cancelled</code></td><td>Order cancelled</td><td>Cancel Sale Order</td></tr>
      <tr><td><code>products/create</code></td><td>Product added</td><td>Create Product Template</td></tr>
      <tr><td><code>products/update</code></td><td>Product updated</td><td>Update Product Template</td></tr>
      <tr><td><code>customers/create</code></td><td>New customer registered</td><td>Create Odoo Contact</td></tr>
      <tr><td><code>refunds/create</code></td><td>Refund issued</td><td>Create Credit Note</td></tr>
      </table>`
  },

  /* ── Product Configuration ── */
  prcfg: {
    title: 'Product Configuration',
    section: 'Shopify Configurations',
    subtitle: 'Configure how products synchronize between Shopify and Odoo.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify Instance form → Product Tab — configure sync rules and defaults',
    prev: { id: 'wbcfg', title: 'Webhook Configuration' },
    next: { id: 'orcfg', title: 'Order Configuration' },
    body: `
      <p>Navigate to <strong>Shopify → Configuration → Shopify Instances → Product Tab</strong>.</p>
      <h2>Key Settings</h2>
      <table><tr><th>Setting</th><th>Description</th></tr>
      <tr><td>Product Type</td><td>Storable, Consumable, or Service product type in Odoo</td></tr>
      <tr><td>Invoice Policy</td><td>Ordered Quantity or Delivered Quantity</td></tr>
      <tr><td>Product Category</td><td>Default Odoo category for imported products</td></tr>
      <tr><td>Import Images</td><td>Enable/disable product image import from Shopify</td></tr>
      <tr><td>Update Policy</td><td>Which fields are overwritten on re-import</td></tr>
      </table>
      <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><strong>Variant Mapping</strong> — Shopify product variants map to Odoo product variants. Ensure attribute values match before bulk import to avoid duplicates.</div></div>`
  },

  /* ── Order Configuration ── */
  orcfg: {
    title: 'Order Configuration',
    section: 'Shopify Configurations',
    subtitle: 'Define how Shopify orders are imported and processed in Odoo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Order tab controls sales team, auto-confirm, invoice settings and date filters',
    prev: { id: 'prcfg', title: 'Product Configuration' },
    next: { id: 'wbor', title: 'Webhook Order Configuration' },
    body: `
      <p>Navigate to <strong>Shopify → Configuration → Shopify Instances → Order Tab</strong>.</p>
      <h2>Settings</h2>
      <table><tr><th>Field</th><th>Description</th></tr>
      <tr><td>Sales Team</td><td>Assign a sales team to all imported Shopify orders</td></tr>
      <tr><td>Salesperson</td><td>Default salesperson on Shopify orders</td></tr>
      <tr><td>Auto Confirm</td><td>Automatically confirm imported sale orders</td></tr>
      <tr><td>Auto Invoice</td><td>Auto-create and validate invoices for paid orders</td></tr>
      <tr><td>Import Date Filter</td><td>Only import orders created after this date</td></tr>
      </table>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><strong>Financial Status Filter</strong> — Filter imported orders by paid, pending, authorized, partially_paid, or refunded to import only the orders matching your workflow.</div></div>`
  },

  /* ── Webhook Order Configuration ── */
  wbor: {
    title: 'Webhook Order Configuration',
    section: 'Shopify Configurations',
    subtitle: 'Configure real-time order processing rules triggered by webhook events.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Webhook order rules — trigger auto-import per financial status',
    prev: { id: 'orcfg', title: 'Order Configuration' },
    next: { id: 'taxcfg', title: 'Tax Configuration' },
    body: `<p>Webhook Order Configuration lets you define which order statuses trigger automatic processing when Shopify pushes events to Odoo.</p><ul><li>Set rules for financial statuses that trigger auto-import (paid, authorized)</li><li>Define auto-workflow per order source or payment gateway</li><li>Enable or disable webhook-based order processing per instance</li></ul><div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><strong>Prerequisite</strong> — Ensure webhooks are registered (see Webhook Configuration) before activating webhook-based order processing.</div></div>`
  },

  /* ── Tax Configuration ── */
  taxcfg: {
    title: 'Tax Configuration',
    section: 'Shopify Configurations',
    subtitle: 'Map Shopify tax rules to Odoo fiscal positions and tax groups.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Tax mapping between Shopify rates and Odoo fiscal positions',
    prev: { id: 'wbor', title: 'Webhook Order Configuration' },
    next: { id: 'nteml', title: 'Notify by Email' },
    body: `<p>Tax Configuration handles how Shopify's tax rates map to Odoo's tax accounts and fiscal positions for accurate bookkeeping and compliance.</p><ul><li>Map Shopify tax names to Odoo tax records by percentage or name</li><li>Assign fiscal positions per Shopify market or country</li><li>Configure tax-included vs tax-excluded pricing</li></ul><div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><strong>Multi-jurisdiction</strong> — Tax rules vary by country and state. Test with a sandbox order before going live. <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">SDLC Corp</a> assists with complex multi-jurisdiction tax setups.</div></div>`
  },

  /* ── Notify by Email ── */
  nteml: {
    title: 'Notify by Email',
    section: 'Shopify Configurations',
    subtitle: 'Configure email alerts for Shopify import/export operations and errors.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Email notification settings — alert recipients on sync completion or failure',
    prev: { id: 'taxcfg', title: 'Tax Configuration' },
    next: { id: 'stkinf', title: 'Stock Information' },
    body: `<p>Enable email alerts so your team is notified when sync operations complete or when errors occur that need attention.</p><ul><li>Set notification recipient email addresses</li><li>Choose trigger: errors only vs. all operations</li><li>Configure frequency: immediate, hourly digest, or daily summary</li></ul><div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body">For high-volume stores use "errors only" to avoid inbox overload. Use the <a href="#" onclick="showPage('dgeml')">Digest Email</a> feature for daily summaries instead.</div></div>`
  },

  /* ── Stock Information ── */
  stkinf: {
    title: 'Stock Information',
    section: 'Shopify Configurations',
    subtitle: 'Configure which Odoo warehouse and location is used for inventory sync.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Warehouse and stock location settings for Shopify inventory sync',
    prev: { id: 'nteml', title: 'Notify by Email' },
    next: { id: 'ldate', title: 'Last Date of Import' },
    body: `<p>Stock Information settings control which Odoo warehouse location is used during Shopify inventory synchronization.</p><table><tr><th>Field</th><th>Description</th></tr><tr><td>Warehouse</td><td>Default Odoo warehouse for inventory sync</td></tr><tr><td>Stock Location</td><td>Specific stock location within the warehouse</td></tr><tr><td>Export on Confirm</td><td>Push updated stock levels to Shopify on order confirmation</td></tr></table>`
  },

  /* ── Last Date of Import ── */
  ldate: {
    title: 'Last Date of Import Process',
    section: 'Shopify Configurations',
    subtitle: 'Track and control the last successful import timestamp per operation type.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import date controls prevent duplicate imports in incremental sync',
    prev: { id: 'stkinf', title: 'Stock Information' },
    next: { id: 'sched', title: 'Schedule Activity' },
    body: `<p>The Last Date of Import is used as the starting point for incremental syncs. The connector fetches only records created or updated after this date, avoiding duplicate imports.</p><ul><li>Automatically updated after each successful import</li><li>Can be manually reset to re-import a specific date range</li><li>Displayed per operation type: products, orders, customers</li></ul><div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body">To re-sync a specific period, set the last import date to the start of that period and run the import. The connector will fetch all records from that date forward.</div></div>`
  },

  /* ── Schedule Activity ── */
  sched: {
    title: 'Schedule Activity Information',
    section: 'Shopify Configurations',
    subtitle: 'Auto-schedule Odoo activities on failed queue jobs for team follow-up.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Activity scheduling ensures failed sync jobs are investigated promptly',
    prev: { id: 'ldate', title: 'Last Date of Import' },
    next: { id: 'prpt', title: 'Payout Report Info' },
    body: `<p>When queue jobs fail, the connector can automatically schedule Odoo activities (tasks) assigned to a specific user for investigation and resolution.</p><ul><li>Choose activity type (To Do, Call, Email, etc.)</li><li>Assign to a responsible user or team</li><li>Set deadline offset from failure date (e.g. 1 day)</li></ul>`
  },

  /* ── Payout Report Info ── */
  prpt: {
    title: 'Payout Report Information',
    section: 'Shopify Configurations',
    subtitle: 'Configure payout import settings and Odoo journal account mapping.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Payout journal and account mapping for Shopify financial reconciliation',
    prev: { id: 'sched', title: 'Schedule Activity' },
    next: { id: 'dgeml', title: 'Digest Email' },
    body: `<p>Payout Report settings define which Odoo journal accounts receive payout components when reports are imported.</p><table><tr><th>Component</th><th>Odoo Account</th></tr><tr><td>Sales Revenue</td><td>Income account</td></tr><tr><td>Refunds</td><td>Revenue contra account</td></tr><tr><td>Shopify Fees</td><td>Bank charges expense account</td></tr><tr><td>Net Payout</td><td>Bank/cash account</td></tr></table>`
  },

  /* ── Digest Email ── */
  dgeml: {
    title: 'Digest Email',
    section: 'Shopify Configurations',
    subtitle: 'Periodic email summaries of all Shopify connector sync activity.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Daily or weekly digest emails summarise orders imported, products synced, errors',
    prev: { id: 'prpt', title: 'Payout Report Info' },
    next: { id: 'awf', title: 'Sale Auto Workflow' },
    body: `<p>Digest Email sends a scheduled summary of all Shopify connector operations — total orders imported, products synced, errors encountered — to configured recipients.</p><ul><li>Set frequency: daily or weekly</li><li>Choose recipient email addresses</li><li>Select which metrics to include in the digest</li></ul>`
  },

  /* ── Sale Auto Workflow ── */
  awf: {
    title: 'Sale Auto Workflow',
    section: 'Auto Workflow & Payments',
    subtitle: 'Automate sale order confirmation, invoicing, and payment posting.',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Auto workflow configuration drives end-to-end order automation on import',
    prev: { id: 'dgeml', title: 'Digest Email' },
    next: { id: 'pgw', title: 'Payment Gateway' },
    body: `<p>Sale Auto Workflow defines what happens automatically when a Shopify order is imported into Odoo.</p>
    <h2>Configurable Automation Steps</h2>
    <ol><li>Auto-confirm sale order on import</li><li>Auto-create delivery / stock picking</li><li>Auto-create customer invoice</li><li>Auto-register payment against invoice</li><li>Auto-validate delivery order</li></ol>
    <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body">For fully automated fulfillment enable all steps. For manual review workflows, stop at step 1 or 2 and let staff confirm before invoicing. Need a custom workflow? <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">SDLC Corp</a> can configure this.</div></div>`
  },

  /* ── Payment Gateway ── */
  pgw: {
    title: 'Payment Gateway',
    section: 'Auto Workflow & Payments',
    subtitle: 'Map Shopify payment gateways to Odoo accounting journal entries.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Payment gateway mapping ensures every Shopify payment goes to the right Odoo journal',
    prev: { id: 'awf', title: 'Sale Auto Workflow' },
    next: { id: 'fst', title: 'Financial Status' },
    body: `<p>Payment Gateway configuration maps each Shopify payment provider to the corresponding Odoo accounting journal for accurate bookkeeping.</p>
    <table><tr><th>Shopify Gateway</th><th>Odoo Journal (Example)</th></tr>
    <tr><td>Shopify Payments</td><td>Shopify Payments Bank</td></tr>
    <tr><td>PayPal</td><td>PayPal Account Journal</td></tr>
    <tr><td>Stripe</td><td>Stripe Bank Account</td></tr>
    <tr><td>Cash on Delivery</td><td>Cash Journal</td></tr>
    <tr><td>Manual</td><td>Accounts Receivable Journal</td></tr>
    </table>`
  },

  /* ── Financial Status ── */
  fst: {
    title: 'Financial Status',
    section: 'Auto Workflow & Payments',
    subtitle: 'Map Shopify financial statuses to Odoo auto-workflow rules.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Financial status mapping controls which auto-workflow fires for each payment state',
    prev: { id: 'pgw', title: 'Payment Gateway' },
    next: { id: 'sloc', title: 'Shopify Locations' },
    body: `<p>Financial Status determines which Odoo Sale Auto Workflow is triggered based on the payment status of the Shopify order.</p>
    <table><tr><th>Shopify Status</th><th>Typical Odoo Action</th></tr>
    <tr><td>paid</td><td>Confirm + Invoice + Validate Payment</td></tr>
    <tr><td>pending</td><td>Confirm only — await payment</td></tr>
    <tr><td>authorized</td><td>Confirm + Reserve stock</td></tr>
    <tr><td>partially_paid</td><td>Confirm + Partial invoice</td></tr>
    <tr><td>refunded</td><td>Create credit note</td></tr>
    </table>`
  },

  /* ── Shopify Locations ── */
  sloc: {
    title: 'Shopify Locations',
    section: 'Auto Workflow & Payments',
    subtitle: 'Map Shopify fulfillment locations to Odoo warehouses and stock locations.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Location mapping directs inventory and delivery orders to the right Odoo warehouse',
    prev: { id: 'fst', title: 'Financial Status' },
    next: { id: 'icust', title: 'Import Customer' },
    body: `<p>Shopify Locations are fulfillment centers in your Shopify store. Map each one to an Odoo warehouse so inventory quantities and delivery orders flow correctly.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Import Locations</div><div class="step-desc">Go to <strong>Shopify → Operations → Import Location</strong> to pull all Shopify locations into Odoo.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Map to Odoo Warehouse</div><div class="step-desc">For each imported location, select the corresponding Odoo warehouse or stock location from the dropdown.</div></div></div>
    </div>`
  },

  /* ── Import Customer ── */
  icust: {
    title: 'Import Customer',
    section: 'Shopify–Odoo Operations',
    subtitle: 'Import Shopify customer records into Odoo as res.partner contacts.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Customer import creates deduplicated partner records in Odoo Contacts',
    prev: { id: 'sloc', title: 'Shopify Locations' },
    next: { id: 'iloc', title: 'Import Location' },
    body: `<p>Import Customer syncs all Shopify customer profiles — name, email, billing/shipping addresses, phone — into Odoo contact records.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Run Import</div><div class="step-desc"><strong>Shopify → Operations → Customers → Import Customers</strong>. Select instance and date range.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Deduplication</div><div class="step-desc">The connector matches by email address. Existing contacts are updated; new ones are created.</div></div></div>
    </div>
    <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body">Customer import is also triggered automatically during order import when the customer does not yet exist in Odoo.</div></div>`
  },

  /* ── Import Location ── */
  iloc: {
    title: 'Import Location',
    section: 'Shopify–Odoo Operations',
    subtitle: 'Import Shopify fulfillment locations into Odoo.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import Shopify location data before configuring warehouse mapping',
    prev: { id: 'icust', title: 'Import Customer' },
    next: { id: 'asch', title: 'Auto Scheduler Config' },
    body: `<p>Run <strong>Shopify → Operations → Import Location</strong> to fetch all your Shopify fulfillment locations into Odoo. After import, map each location to its Odoo warehouse under the Shopify Locations configuration.</p><div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body">Run this step before configuring Shopify Locations so the list is populated and ready to map.</div></div>`
  },

  /* ── Auto Scheduler Config ── */
  asch: {
    title: 'Automatic Scheduler Configuration',
    section: 'Shopify–Odoo Operations',
    subtitle: 'Set up scheduled Odoo actions to automate recurring Shopify sync operations.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Odoo scheduled actions run Shopify operations automatically at configured intervals',
    prev: { id: 'iloc', title: 'Import Location' },
    next: { id: 'queue', title: 'Queue' },
    body: `<p>The Automatic Scheduler uses Odoo's built-in Scheduled Actions to run recurring Shopify operations without manual intervention.</p>
    <h2>Recommended Schedule</h2>
    <table><tr><th>Operation</th><th>Interval</th></tr>
    <tr><td>Import Unshipped Orders</td><td>Every 15–30 min</td></tr>
    <tr><td>Export Shipment Status</td><td>Every 30 min</td></tr>
    <tr><td>Import Products</td><td>Every 6–12 hours</td></tr>
    <tr><td>Export Stock</td><td>Every 1 hour</td></tr>
    <tr><td>Import Payouts</td><td>Daily</td></tr>
    </table>
    <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><strong>High-Volume Stores</strong> — Shorter intervals keep data fresher. For low-traffic stores, longer intervals reduce server load. <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">SDLC Corp</a> can optimise scheduler config for your traffic patterns.</div></div>`
  },

  /* ── Queue ── */
  queue: {
    title: 'Queue',
    section: 'Shopify–Odoo Operations',
    subtitle: 'Monitor and manage the queue of pending Shopify import/export jobs.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5734c3d5?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Queue dashboard shows pending, running, completed and failed jobs',
    prev: { id: 'asch', title: 'Auto Scheduler Config' },
    next: { id: 'iprod', title: 'Import Products' },
    body: `<p>The Queue system processes Shopify operations asynchronously, preventing timeouts and allowing large data sets to be chunked into background jobs.</p>
    <h2>Queue Statuses</h2>
    <table><tr><th>Status</th><th>Meaning</th></tr>
    <tr><td><span class="badge badge-gray">Draft</span></td><td>Job created, waiting to start</td></tr>
    <tr><td><span class="badge badge-blue">Running</span></td><td>Currently being processed</td></tr>
    <tr><td><span class="badge badge-green">Done</span></td><td>Completed successfully</td></tr>
    <tr><td><span class="badge badge-amber">Failed</span></td><td>Error occurred — check logs</td></tr>
    </table>
    <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body">Failed jobs can be retried. Click the queue record and press <strong>Retry</strong>. Use the Log Book to diagnose root causes.</div></div>`
  },

  /* ── Import Products ── */
  iprod: {
    title: 'Import Products',
    section: 'Product Management',
    subtitle: 'Bulk-import your entire Shopify product catalog into Odoo with variants, images and pricing.',
    image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify → Operations → Products → Import Products — large catalogs use Queue',
    prev: { id: 'queue', title: 'Queue' },
    next: { id: 'ispr', title: 'Import Specific Products' },
    body: `<p>Import Products syncs your full Shopify catalog into Odoo product templates with variants, attributes, pricing, images and tags.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Navigate to Product Operations</div><div class="step-desc"><strong>Shopify → Operations → Products</strong></div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Click Import Products</div><div class="step-desc">A dialog opens. Select your Shopify Instance and optionally set a date range to import only recently updated products.</div></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Monitor via Queue</div><div class="step-desc">Products are queued and processed in batches. Monitor under <strong>Shopify → Operations → Queue</strong>.</div></div></div>
    </div>
    <h3>What Gets Imported</h3>
    <ul>
      <li>Product name, description, SKU, barcode</li>
      <li>Product variants (size, color, material)</li>
      <li>Product images (if enabled in configuration)</li>
      <li>Price and compare-at price</li>
      <li>Tags, product type, and vendor</li>
    </ul>`
  },

  /* ── Import Specific Products ── */
  ispr: {
    title: 'Import Specific Products',
    section: 'Product Management',
    subtitle: 'Import individual Shopify products by their product ID.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import individual products for testing or selective sync',
    prev: { id: 'iprod', title: 'Import Products' },
    next: { id: 'mpprod', title: 'Map Product' },
    body: `<p>Import Specific Products pulls individual products by Shopify product ID — useful for testing, troubleshooting, or importing new products without a full catalog sync.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Find Shopify Product ID</div><div class="step-desc">In Shopify Admin, open the product and note the numeric ID from the URL: <code>admin.shopify.com/products/7812345678900</code></div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Run Import</div><div class="step-desc"><strong>Shopify → Operations → Import Specific Product</strong>. Paste IDs (comma-separated for multiple). Click Import.</div></div></div>
    </div>`
  },

  /* ── Map Product ── */
  mpprod: {
    title: 'Map Product',
    section: 'Product Management',
    subtitle: 'Manually link existing Odoo products to their Shopify counterparts.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Product mapping avoids duplicates when products exist in both systems',
    prev: { id: 'ispr', title: 'Import Specific Products' },
    next: { id: 'xstk', title: 'Export Stock' },
    body: `<p>Use Map Product when you already have products in both Shopify and Odoo and want to link them without re-importing, preserving existing Odoo product data.</p><ul><li>Auto-match by SKU or barcode</li><li>Or manually select the Odoo product for each Shopify product</li><li>Mapped products participate in all future sync operations</li></ul>`
  },

  /* ── Export Stock ── */
  xstk: {
    title: 'Export Stock',
    section: 'Product Management',
    subtitle: 'Push current Odoo inventory levels back to Shopify.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Export stock quantities from Odoo to Shopify to keep storefront availability accurate',
    prev: { id: 'mpprod', title: 'Map Product' },
    next: { id: 'istk', title: 'Import Stock' },
    body: `<p>Export Stock pushes on-hand quantities from Odoo to Shopify so your storefront always shows accurate product availability.</p><div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><strong>Direction Control</strong> — If Odoo is your inventory master, always use Export Stock (Odoo → Shopify). Never run Import Stock and Export Stock simultaneously without clear data ownership rules.</div></div>`
  },

  /* ── Import Stock ── */
  istk: {
    title: 'Import Stock',
    section: 'Product Management',
    subtitle: 'Sync inventory quantities from Shopify into Odoo.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import stock from Shopify when Shopify is the inventory master system',
    prev: { id: 'xstk', title: 'Export Stock' },
    next: { id: 'uprd', title: 'Update / Export Product' },
    body: `<p>Import Stock pulls Shopify inventory quantities into Odoo. Use this when Shopify is the master inventory system — for example when using Shopify POS stores as primary inventory source.</p>`
  },

  /* ── Update / Export Product ── */
  uprd: {
    title: 'Update / Export Product',
    section: 'Product Management',
    subtitle: 'Push product data changes from Odoo back to your Shopify store.',
    image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Export product changes from Odoo to Shopify storefront',
    prev: { id: 'istk', title: 'Import Stock' },
    next: { id: 'iunship', title: 'Import Unshipped Orders' },
    body: `<p>Use Update/Export Product to push product changes made in Odoo back to your Shopify store — name, description, price, images, and variants.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Update Product in Odoo</div><div class="step-desc">Make changes in the Odoo product form.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Export to Shopify</div><div class="step-desc">From the product record click <strong>Export to Shopify</strong>, or run a bulk export from <strong>Shopify → Operations → Update/Export Products</strong>.</div></div></div>
    </div>`
  },

  /* ── Import Unshipped Orders ── */
  iunship: {
    title: 'Import Unshipped Orders',
    section: 'Orders Management',
    subtitle: 'Fetch confirmed but unfulfilled Shopify orders into Odoo for processing.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import unshipped orders generates sale orders and picking in Odoo WMS',
    prev: { id: 'uprd', title: 'Update / Export Product' },
    next: { id: 'iship', title: 'Import Shipped Orders' },
    body: `<p>Import Unshipped Orders fetches all Shopify orders with <code>fulfillment_status = unfulfilled</code> and creates corresponding Sale Orders in Odoo.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Go to Order Operations</div><div class="step-desc"><strong>Shopify → Operations → Orders</strong></div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Import Unshipped Orders</div><div class="step-desc">Click the button. Select instance and date range. Click <strong>Import</strong>.</div></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Auto Workflow Fires</div><div class="step-desc">Depending on your Auto Workflow settings, order confirmation, invoicing, and stock reservation happen automatically.</div></div></div>
    </div>
    <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body">Use the <a href="#" onclick="showPage('asch')">Automatic Scheduler</a> to import unshipped orders every 15–30 minutes for near real-time processing without manual intervention.</div></div>`
  },

  /* ── Import Shipped Orders ── */
  iship: {
    title: 'Import Shipped Orders',
    section: 'Orders Management',
    subtitle: 'Import fulfilled Shopify orders with tracking information into Odoo.',
    image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shipped orders include carrier and tracking data for Odoo delivery records',
    prev: { id: 'iunship', title: 'Import Unshipped Orders' },
    next: { id: 'ispecord', title: 'Import Specific Order' },
    body: `<p>Import Shipped Orders fetches Shopify orders with <code>fulfillment_status = fulfilled</code>, capturing tracking numbers and carrier information into Odoo delivery records.</p>`
  },

  /* ── Import Specific Order ── */
  ispecord: {
    title: 'Import Specific Order',
    section: 'Orders Management',
    subtitle: 'Import a single Shopify order by order name or ID.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Import a single order for troubleshooting or re-processing a failed import',
    prev: { id: 'iship', title: 'Import Shipped Orders' },
    next: { id: 'icxlord', title: 'Import Cancel Order' },
    body: `<p>Import Specific Order is useful for troubleshooting, re-processing a failed import, or pulling in an individual order outside the regular sync cycle.</p><p>Navigate to <strong>Shopify → Operations → Import Specific Order</strong>. Enter the Shopify order name (e.g. <code>#1234</code>) or numeric order ID. Click Import.</p>`
  },

  /* ── Import Cancel Order ── */
  icxlord: {
    title: 'Import Cancel Order',
    section: 'Orders Management',
    subtitle: 'Import cancelled Shopify orders to keep Odoo records in sync.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Cancelled orders update Odoo sale order status and trigger stock reversal',
    prev: { id: 'ispecord', title: 'Import Specific Order' },
    next: { id: 'gacc', title: 'Grant Access – Shipment' },
    body: `<p>Cancelled orders from Shopify can be imported to update the corresponding Odoo sale order status, trigger stock reversal, and maintain financial accuracy.</p>`
  },

  /* ── Grant Access ── */
  gacc: {
    title: 'Grant Access – Export Shipment',
    section: 'Orders Management',
    subtitle: 'Configure user permissions required to export shipment info back to Shopify.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'User access rights in Odoo Settings → Users → Shopify permissions',
    prev: { id: 'icxlord', title: 'Import Cancel Order' },
    next: { id: 'xship', title: 'Export Shipment' },
    body: `<p>Exporting shipment and tracking information back to Shopify requires specific user access rights in Odoo. Grant the <strong>Shopify Connector / Export Shipment</strong> permission to warehouse staff who process deliveries.</p><p>Go to <strong>Settings → Users</strong>, open the user profile, and enable the Shopify export shipment permission under the Shopify Connector section.</p>`
  },

  /* ── Export Shipment ── */
  xship: {
    title: 'Export Shipment / Update Order Status',
    section: 'Orders Management',
    subtitle: 'Send tracking numbers and fulfillment status from Odoo back to Shopify.',
    image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Tracking and carrier data exported from Odoo to Shopify marks orders as fulfilled',
    prev: { id: 'gacc', title: 'Grant Access' },
    next: { id: 'cxlord', title: 'Cancel Order in Shopify' },
    body: `<p>After validating a delivery in Odoo, export the tracking number and carrier details to Shopify to mark the order as fulfilled and trigger the customer shipping notification.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Validate Delivery in Odoo</div><div class="step-desc">Validate the stock picking/delivery order with the tracking number entered.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Export to Shopify</div><div class="step-desc">Click <strong>Export Shipment Info to Shopify</strong> on the delivery record, or enable auto-export on validation in connector settings.</div></div></div>
    </div>`
  },

  /* ── Cancel Order ── */
  cxlord: {
    title: 'Cancel Order in Shopify',
    section: 'Orders Management',
    subtitle: 'Cancel a Shopify order directly from within Odoo.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Cancel Shopify orders from the Odoo sale order form without leaving the ERP',
    prev: { id: 'xship', title: 'Export Shipment' },
    next: { id: 'rfnd', title: 'Refund in Shopify' },
    body: `<p>Cancel a Shopify order without leaving Odoo. Open the sale order and click <strong>Cancel in Shopify</strong>. The connector cancels the order in Shopify and updates the Odoo sale order status accordingly.</p><div class="callout danger"><span class="callout-icon">🚨</span><div class="callout-body"><strong>Irreversible in Shopify</strong> — Cancellation cannot be undone. Ensure the order is eligible (not yet fulfilled) before proceeding.</div></div>`
  },

  /* ── Refund ── */
  rfnd: {
    title: 'Refund in Shopify',
    section: 'Orders Management',
    subtitle: 'Issue refunds in Shopify directly from the Odoo credit note.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify refund initiated from Odoo credit note for seamless financial tracking',
    prev: { id: 'cxlord', title: 'Cancel Order' },
    next: { id: 'iret', title: 'Import Return & Refund' },
    body: `<p>Initiate Shopify refunds from Odoo's credit note interface. The connector pushes the refund amount to Shopify and updates payment records in both systems for reconciliation.</p>`
  },

  /* ── Import Return & Refund ── */
  iret: {
    title: 'Import Return & Refund',
    section: 'Orders Management',
    subtitle: 'Pull Shopify refunds and returns into Odoo as credit notes.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify refund records imported as Odoo credit notes and return receipts',
    prev: { id: 'rfnd', title: 'Refund in Shopify' },
    next: { id: 'wbadv', title: 'Webhooks Configuration (Advanced)' },
    body: `<p>Import Return and Refund fetches all Shopify refund records and creates corresponding credit notes in Odoo's accounting module.</p><div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body">Returned stock quantities can optionally be added back to Odoo inventory via a return receipt during the credit note workflow.</div></div>`
  },

  /* ── Webhooks Advanced ── */
  wbadv: {
    title: 'Webhooks Configuration (Advanced)',
    section: 'Reports & Payouts',
    subtitle: 'Advanced webhook setup, HMAC verification, and troubleshooting.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Advanced webhook management including HMAC security and delivery history',
    prev: { id: 'iret', title: 'Import Return & Refund' },
    next: { id: 'srpt', title: 'Sales Report & Log Book' },
    body: `<p>This section covers advanced webhook topics: HMAC signature verification, debugging failed deliveries, and re-registering webhooks after URL changes.</p>
    <h2>HMAC Verification</h2>
    <p>Every webhook from Shopify is signed with HMAC-SHA256 using your API Secret Key. The connector validates this signature automatically on every incoming request.</p>
    <h2>Troubleshooting Webhooks</h2>
    <ul>
      <li>Check <strong>Shopify → Settings → Notifications → Webhooks</strong> for delivery history and errors</li>
      <li>Review Odoo server logs for <code>shopify.webhook</code> entries</li>
      <li>Re-register webhooks after changing the Odoo base URL</li>
      <li>Ensure Odoo is publicly accessible via HTTPS (not localhost)</li>
    </ul>
    <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body">Need infrastructure support? <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">SDLC Corp</a> provides managed Odoo hosting and webhook configuration as part of the integration service.</div></div>`
  },

  /* ── Sales Report ── */
  srpt: {
    title: 'Sales Report & Log Book',
    section: 'Reports & Payouts',
    subtitle: 'View Shopify sales data and full connector operation logs inside Odoo.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Sales report and audit log book for all connector operations',
    prev: { id: 'wbadv', title: 'Webhooks Configuration' },
    next: { id: 'payouts', title: 'Shopify Payouts' },
    body: `<p>The Sales Report provides a consolidated view of all Shopify orders processed through the connector. The Log Book records every operation — import, export, success, failure — for audit purposes.</p>
    <h2>Accessing Reports</h2>
    <ul>
      <li><strong>Sales Report</strong>: Shopify → Reports → Shopify Sales Report</li>
      <li><strong>Log Book</strong>: Shopify → Reports → Log Book</li>
    </ul>
    <p>Filter by date range, instance, operation type, or status to drill into specific periods or diagnose issues.</p>`
  },

  /* ── Payouts ── */
  payouts: {
    title: 'Shopify Payouts',
    section: 'Reports & Payouts',
    subtitle: 'Import Shopify payout reports into Odoo for bank reconciliation.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Shopify → Payouts — gross sales, refunds, fees and net payout imported into Odoo',
    prev: { id: 'srpt', title: 'Sales Report' },
    next: { id: 'netpr', title: 'Net Profit Report' },
    body: `<p>The Shopify Payouts feature imports payout reports into Odoo for financial reconciliation and bank statement matching.</p>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Access Payouts</div><div class="step-desc"><strong>Shopify → Payouts</strong></div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Import Payout</div><div class="step-desc">Click <strong>Import Payout</strong>. Select instance and date range. Click Import.</div></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Reconcile</div><div class="step-desc">Match imported payout lines to Odoo journal entries for bank reconciliation in the Accounting module.</div></div></div>
    </div>
    <h2>Payout Report Structure</h2>
    <table><tr><th>Component</th><th>Description</th></tr>
    <tr><td>Gross Sales</td><td>Total order revenue in the period</td></tr>
    <tr><td>Refunds</td><td>Refund amounts deducted from gross</td></tr>
    <tr><td>Adjustments</td><td>Chargebacks, disputes, other adjustments</td></tr>
    <tr><td>Shopify Fees</td><td>Platform and payment processing fees</td></tr>
    <tr><td><strong>Net Payout</strong></td><td>Final deposit to your bank account</td></tr>
    </table>
    <div class="support-bar"><div class="support-bar-text"><h4>Odoo Accounting Integration</h4><p>SDLC Corp provides <a href="https://sdlccorp.com/services/odoo-services/odoo-accounts-finance/" target="_blank">Odoo Accounting & Finance services</a> including payout automation.</p></div><div class="support-bar-actions"><a class="btn-white" href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">View Services</a></div></div>`
  },

  /* ── Net Profit Report ── */
  netpr: {
    title: 'Shopify Net Profit Report',
    section: 'Reports & Payouts',
    subtitle: 'Detailed net profit analysis across Shopify sales channels within Odoo.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Net profit combines revenue, COGS from Odoo, Shopify fees and refunds',
    prev: { id: 'payouts', title: 'Shopify Payouts' },
    next: { id: 'relnotes', title: 'Release Notes' },
    body: `<p>The Net Profit Report combines Shopify sales revenue, cost of goods sold (COGS) from Odoo product standard costs, Shopify fees, and refunds to provide true margin visibility per product, category, or period.</p>
    <h2>Report Components</h2>
    <table><tr><th>Metric</th><th>Source</th></tr>
    <tr><td>Gross Revenue</td><td>Shopify order totals</td></tr>
    <tr><td>Cost of Goods</td><td>Odoo product standard cost</td></tr>
    <tr><td>Shopify Fees</td><td>Payout report data</td></tr>
    <tr><td>Refunds</td><td>Shopify refund records</td></tr>
    <tr><td><strong>Net Profit</strong></td><td>Calculated automatically</td></tr>
    </table>
    <div class="support-bar"><div class="support-bar-text"><h4>Custom Reporting?</h4><p>SDLC Corp builds custom BI integrations on top of Odoo. <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank">View Integration Services →</a></p></div><div class="support-bar-actions"><a class="btn-white" href="https://sdlccorp.com/contact-us/" target="_blank">Talk to an Expert</a></div></div>`
  },

  /* ── Release Notes ── */
  relnotes: {
    title: 'Release Notes',
    section: 'Reference',
    subtitle: 'Changelog and version history for the SDLC Corp Shopify–Odoo Connector.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=820&q=80&auto=format&fit=crop',
    imageCaption: 'Version history — stay current with the latest connector improvements',
    prev: { id: 'netpr', title: 'Net Profit Report' },
    next: null,
    body: `
    <div class="callout success"><span class="callout-icon">🎉</span><div class="callout-body"><strong>Latest: v18.0</strong> — Full Odoo 18 compatibility, enhanced queue performance, and Net Profit Report.</div></div>
    <h2>v18.0 (Current)</h2>
    <ul>
      <li>Full Odoo 18 Community &amp; Enterprise compatibility</li>
      <li>Improved product variant mapping for multi-attribute catalogs</li>
      <li>Enhanced webhook processing for high-volume stores (5,000+ orders/day)</li>
      <li>Added Net Profit Report module</li>
      <li>Queue processing ~40% performance improvement</li>
      <li>Bug fixes in refund import and credit note generation</li>
      <li>Improved multi-currency order handling</li>
    </ul>
    <h2>v17.0</h2>
    <ul>
      <li>Full Odoo 17 compatibility</li>
      <li>Digest Email feature for daily sync summaries</li>
      <li>Enhanced tax configuration and fiscal position mapping</li>
      <li>Improved multi-warehouse stock synchronization</li>
    </ul>
    <h2>v16.0</h2>
    <ul>
      <li>Full Odoo 16 compatibility</li>
      <li>Import Return and Refund feature added</li>
      <li>Multi-location inventory improvements</li>
      <li>Webhook Order Configuration enhancements</li>
    </ul>
    <div class="support-bar"><div class="support-bar-text"><h4>Stay Updated</h4><p>Contact <a href="https://sdlccorp.com/services/odoo-services/odoo-support-services/" target="_blank">SDLC Corp support</a> to be notified about new connector releases.</p></div><div class="support-bar-actions"><a class="btn-white" href="https://sdlccorp.com/contact-us/" target="_blank">Contact SDLC Corp</a><a class="btn-outline-white" href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank">Odoo App Store</a></div></div>`
  }
};

/* ── Sidebar → sub-menu mapping ── */
const SUB_MAP = {
  genkey: 'sub-setup', cfginst: 'sub-setup',
  wbcfg: 'sub-cfg', prcfg: 'sub-cfg', orcfg: 'sub-cfg', wbor: 'sub-cfg',
  taxcfg: 'sub-cfg', nteml: 'sub-cfg', stkinf: 'sub-cfg', ldate: 'sub-cfg',
  sched: 'sub-cfg', prpt: 'sub-cfg', dgeml: 'sub-cfg',
  awf: 'sub-wf', pgw: 'sub-wf', fst: 'sub-wf', sloc: 'sub-wf',
  icust: 'sub-ops', iloc: 'sub-ops', asch: 'sub-ops', queue: 'sub-ops',
  iprod: 'sub-pr', ispr: 'sub-pr', mpprod: 'sub-pr',
  xstk: 'sub-pr', istk: 'sub-pr', uprd: 'sub-pr',
  iunship: 'sub-ord', iship: 'sub-ord', ispecord: 'sub-ord',
  icxlord: 'sub-ord', gacc: 'sub-ord', xship: 'sub-ord',
  cxlord: 'sub-ord', rfnd: 'sub-ord', iret: 'sub-ord'
};

/* ── Search index ── */
const SEARCH_INDEX = [
  { id: 'home',     title: 'Home — Overview',                    section: 'Getting Started' },
  { id: 'install',  title: 'Installation',                       section: 'Getting Started' },
  { id: 'genkey',   title: 'Generate API Key & Secret Key',      section: 'Setup' },
  { id: 'cfginst',  title: 'Configure Shopify Instance',         section: 'Setup' },
  { id: 'wbcfg',    title: 'Webhook Configuration',              section: 'Configuration' },
  { id: 'prcfg',    title: 'Product Configuration',              section: 'Configuration' },
  { id: 'orcfg',    title: 'Order Configuration',                section: 'Configuration' },
  { id: 'wbor',     title: 'Webhook Order Configuration',        section: 'Configuration' },
  { id: 'taxcfg',   title: 'Tax Configuration',                  section: 'Configuration' },
  { id: 'nteml',    title: 'Notify by Email',                    section: 'Configuration' },
  { id: 'stkinf',   title: 'Stock Information',                  section: 'Configuration' },
  { id: 'ldate',    title: 'Last Date of Import Process',        section: 'Configuration' },
  { id: 'sched',    title: 'Schedule Activity Information',      section: 'Configuration' },
  { id: 'prpt',     title: 'Payout Report Information',          section: 'Configuration' },
  { id: 'dgeml',    title: 'Digest Email',                       section: 'Configuration' },
  { id: 'awf',      title: 'Sale Auto Workflow',                 section: 'Auto Workflow' },
  { id: 'pgw',      title: 'Payment Gateway',                    section: 'Auto Workflow' },
  { id: 'fst',      title: 'Financial Status',                   section: 'Auto Workflow' },
  { id: 'sloc',     title: 'Shopify Locations',                  section: 'Auto Workflow' },
  { id: 'icust',    title: 'Import Customer',                    section: 'Operations' },
  { id: 'iloc',     title: 'Import Location',                    section: 'Operations' },
  { id: 'asch',     title: 'Automatic Scheduler Configuration',  section: 'Operations' },
  { id: 'queue',    title: 'Queue',                              section: 'Operations' },
  { id: 'iprod',    title: 'Import Products',                    section: 'Product Management' },
  { id: 'ispr',     title: 'Import Specific Products',           section: 'Product Management' },
  { id: 'mpprod',   title: 'Map Product',                        section: 'Product Management' },
  { id: 'xstk',     title: 'Export Stock',                       section: 'Product Management' },
  { id: 'istk',     title: 'Import Stock',                       section: 'Product Management' },
  { id: 'uprd',     title: 'Update / Export Product',            section: 'Product Management' },
  { id: 'iunship',  title: 'Import Unshipped Orders',            section: 'Orders' },
  { id: 'iship',    title: 'Import Shipped Orders',              section: 'Orders' },
  { id: 'ispecord', title: 'Import Specific Order',              section: 'Orders' },
  { id: 'icxlord',  title: 'Import Cancel Order',                section: 'Orders' },
  { id: 'gacc',     title: 'Grant Access – Export Shipment',     section: 'Orders' },
  { id: 'xship',    title: 'Export Shipment / Update Status',    section: 'Orders' },
  { id: 'cxlord',   title: 'Cancel Order in Shopify',            section: 'Orders' },
  { id: 'rfnd',     title: 'Refund in Shopify',                  section: 'Orders' },
  { id: 'iret',     title: 'Import Return & Refund',             section: 'Orders' },
  { id: 'wbadv',    title: 'Webhooks Configuration (Advanced)',  section: 'Reports' },
  { id: 'srpt',     title: 'Sales Report & Log Book',            section: 'Reports' },
  { id: 'payouts',  title: 'Shopify Payouts',                    section: 'Reports' },
  { id: 'netpr',    title: 'Shopify Net Profit Report',          section: 'Reports' },
  { id: 'relnotes', title: 'Release Notes',                      section: 'Reference' }
];

function renderPage(id) {
  const d = PAGES[id];
  if (!d) return;
  if (document.getElementById('page-' + id)) return; // already rendered

  const wrap = document.getElementById('dynamic-pages');
  const el = document.createElement('div');
  el.className = 'page';
  el.id = 'page-' + id;

  el.innerHTML = `
    <div class="breadcrumb">
      <a href="#" onclick="showPage('home')">Home</a>
      <span class="breadcrumb-sep">›</span>
      <span>${d.section}</span>
      <span class="breadcrumb-sep">›</span>
      <span>${d.title}</span>
    </div>
    <h1 class="page-title">${d.title}</h1>
    <p class="page-subtitle">${d.subtitle}</p>
    <div class="page-meta">
      <span class="meta-item">📂 ${d.section}</span>
    </div>

    <div class="doc-img-wrap">
      <div class="doc-img-chrome">
        <span class="chrome-dot"></span>
        <span class="chrome-dot"></span>
        <span class="chrome-dot"></span>
        <span class="chrome-url">odoo.yoursite.com/odoo/shopify</span>
      </div>
      <img src="${d.image}" alt="${d.title}" style="height:200px;object-fit:cover;" loading="lazy">
      <div class="doc-img-caption">📸 ${d.imageCaption}</div>
    </div>

    ${d.body}

    <div class="page-nav">
      ${d.prev
        ? `<a class="page-nav-btn" href="#" onclick="showPage('${d.prev.id}')">
             <div class="page-nav-label">← Previous</div>
             <div class="page-nav-title">${d.prev.title}</div>
           </a>`
        : '<div></div>'
      }
      ${d.next
        ? `<a class="page-nav-btn next" href="#" onclick="showPage('${d.next.id}')">
             <div class="page-nav-label">Next →</div>
             <div class="page-nav-title">${d.next.title}</div>
           </a>`
        : ''
      }
    </div>`;

  wrap.appendChild(el);
}

function showPage(id) {
  // Render dynamic page if needed
  if (PAGES[id]) renderPage(id);

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'visible');
  });

  // Clear sidebar active links
  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));

  // Show target page
  const el = document.getElementById('page-' + id);
  if (el) {
    el.classList.add('active');
    requestAnimationFrame(() => el.classList.add('visible'));
  }

  // Set active sidebar link
  const sl = document.getElementById('sl-' + id);
  if (sl) sl.classList.add('active');

  // Open parent sub-menu
  if (SUB_MAP[id]) {
    const sub = document.getElementById(SUB_MAP[id]);
    if (sub) {
      sub.classList.add('open');
      const grp = sub.previousElementSibling;
      if (grp) grp.classList.add('open');
    }
  }

  // Rebuild TOC
  buildTOC(id);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Close mobile sidebar
  closeSidebar();
}

function buildTOC(pageId) {
  const list = document.getElementById('toc-list');
  const page = document.getElementById('page-' + pageId);
  if (!list || !page) return;

  const headings = page.querySelectorAll('h2, h3');
  if (!headings.length) { list.innerHTML = ''; return; }

  let html = '';
  headings.forEach((h, i) => {
    const hId = 'h-toc-' + i;
    h.id = hId;
    const isSub = h.tagName === 'H3';
    const text = h.textContent.replace(/[▶◀]/g, '').trim();
    html += `<li class="${isSub ? 'toc-sub' : ''}"><a href="#${hId}">${text}</a></li>`;
  });
  list.innerHTML = html;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        list.querySelectorAll('a').forEach(a => a.classList.remove('toc-active'));
        const a = list.querySelector(`a[href="#${e.target.id}"]`);
        if (a) a.classList.add('toc-active');
      }
    });
  }, { rootMargin: '-18% 0px -72% 0px' });

  headings.forEach(h => observer.observe(h));
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sb-overlay');
  const open = sb.classList.toggle('open');
  if (ov) ov.classList.toggle('visible', open);
}

function closeSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sb-overlay');
  sb.classList.remove('open');
  if (ov) ov.classList.remove('visible');
}

function toggleSubMenu(subId, trigger) {
  const sub = document.getElementById(subId);
  if (sub) {
    sub.classList.toggle('open');
    trigger.classList.toggle('open');
  }
}

function filterSidebar(val) {
  const clearBtn = document.getElementById('sb-clear');
  if (clearBtn) clearBtn.classList.toggle('visible', val.length > 0);

  const q = val.toLowerCase().trim();
  document.querySelectorAll('.sb-link:not(.group)').forEach(link => {
    const show = !q || link.textContent.toLowerCase().includes(q);
    link.style.display = show ? '' : 'none';
  });

  if (q) {
    document.querySelectorAll('.sb-sub').forEach(s => s.classList.add('open'));
  }
}

function clearSidebarSearch() {
  const input = document.getElementById('sb-search-input');
  if (input) { input.value = ''; filterSidebar(''); }
}

function copyCode(btn) {
  const pre = btn.closest('.code-wrap') || btn.parentElement;
  const code = pre.querySelector('code');
  if (!code) return;
  navigator.clipboard.writeText(code.textContent).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

function updateProgress() {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const bar = document.getElementById('progress-fill');
  if (bar) bar.style.width = pct + '%';

  const topBtn = document.getElementById('scroll-top-btn');
  if (topBtn) topBtn.classList.toggle('visible', h.scrollTop > 320);
}

function openSearch() {
  const ov = document.getElementById('search-overlay');
  if (ov) {
    ov.classList.add('open');
    setTimeout(() => {
      const input = document.getElementById('global-search-input');
      if (input) input.focus();
    }, 60);
  }
}

function closeSearch(e) {
  if (!e || e.target === document.getElementById('search-overlay') || e.target.closest('.search-modal-close')) {
    const ov = document.getElementById('search-overlay');
    if (ov) ov.classList.remove('open');
    const input = document.getElementById('global-search-input');
    if (input) { input.value = ''; }
    const res = document.getElementById('search-results-list');
    if (res) res.innerHTML = '';
  }
}

function runSearch(val) {
  const res = document.getElementById('search-results-list');
  if (!res) return;
  const q = val.trim().toLowerCase();
  if (!q) { res.innerHTML = ''; return; }

  const matches = SEARCH_INDEX.filter(p =>
    p.title.toLowerCase().includes(q) || p.section.toLowerCase().includes(q)
  );

  if (!matches.length) {
    res.innerHTML = '<div class="search-empty">No results found for "<strong>' + val + '</strong>"</div>';
    return;
  }

  res.innerHTML = matches.slice(0, 12).map(p => `
    <div class="search-result-item" onclick="showPage('${p.id}'); closeSearch();">
      <div class="sr-title">${p.title}</div>
      <div class="sr-section">${p.section}</div>
    </div>
  `).join('');
}


function handleVersionChange(v) {
  alert(`Switching to ${v} documentation.\n\nThis demo is loaded with v18 content.\nFor full multi-version docs, visit:\nhttps://sdlccorp.com/services/odoo-integration-services/`);
}


document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape') {
    closeSearch();
    closeSidebar();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', updateProgress, { passive: true });
  showPage('home');
});
