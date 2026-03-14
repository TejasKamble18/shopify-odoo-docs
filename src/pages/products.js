import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SdlcNavbar from '../components/SdlcNavbar';
import MarketingCta from '../components/MarketingCta';

const PRODUCTS = [
  {
    icon: '🛍️',
    name: 'Shopify–Odoo Connector',
    subtitle: 'v18–19 Ready · Live Now',
    desc: 'Complete bidirectional integration between your Shopify store and Odoo ERP. Automate product sync, order management, inventory tracking, and financial reporting.',
    features: [
      'Real-time product sync via webhooks',
      'Order management & auto-workflow',
      'Multi-warehouse inventory automation',
      'Customer & payout synchronization',
      'Shopify net profit reports in Odoo',
      'Zero-code guided setup wizard',
    ],
    tags: ['Shopify', 'Odoo', 'Integration', 'Enterprise'],
    featured: true,
    href: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector',
    docsHref: '/docs/shopify/intro',
  },
  {
    icon: '🌐',
    name: 'WooCommerce–Odoo Connector',
    subtitle: 'Coming Q2 2026',
    desc: 'Seamlessly integrate WooCommerce stores with Odoo ERP. Full product catalog, order processing and customer synchronization with real-time data flow.',
    features: [
      'Product catalog synchronization',
      'Order processing automation',
      'Customer management',
      'Inventory tracking',
    ],
    tags: ['WooCommerce', 'WordPress', 'Integration'],
    soon: true,
  },
  {
    icon: '🔷',
    name: 'Magento 2–Odoo Connector',
    subtitle: 'Coming Q2 2026',
    desc: 'Connect Magento 2 with Odoo for a complete ecommerce automation experience. Multi-store and multi-language ready for enterprise deployments.',
    features: [
      'Multi-store support',
      'Multi-language ready',
      'Product & order sync',
      'Enterprise features',
    ],
    tags: ['Magento 2', 'Multi-store', 'Integration'],
    soon: true,
  },
  {
    icon: '📦',
    name: 'Amazon–Odoo Connector',
    subtitle: 'Coming Q3 2026',
    desc: 'Full Amazon Seller Central integration with Odoo. FBA and FBM management, order automation and pricing optimization for marketplace sellers.',
    features: [
      'Seller Central integration',
      'FBA/FBM management',
      'Order automation',
      'Pricing optimization',
    ],
    tags: ['Amazon', 'Seller Central', 'FBA/FBM'],
    soon: true,
  },
  {
    icon: '🏷️',
    name: 'eBay–Odoo Connector',
    subtitle: 'Coming Q3 2026',
    desc: 'Manage eBay listings, orders and inventory directly from Odoo. Multi-account and multi-region support included for global sellers.',
    features: [
      'eBay listing management',
      'Order & inventory sync',
      'Multi-account support',
      'Multi-region ready',
    ],
    tags: ['eBay', 'Listings', 'Integration'],
    soon: true,
  },
  {
    icon: '🚚',
    name: 'ShipStation–Odoo Connector',
    subtitle: 'Coming Q1 2027',
    desc: 'Seamless shipping and fulfillment integration with ShipStation. Multi-carrier support, label printing and return management built in.',
    features: [
      'Multi-carrier support',
      'Label printing',
      'Return management',
      'Fulfillment automation',
    ],
    tags: ['ShipStation', 'Shipping', 'Multi-carrier'],
    soon: true,
  },
];

function NotifyBtn() {
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2500);
  };
  return (
    <button
      className="product-soon"
      onClick={handleClick}
      style={clicked ? { color: '#06D6A0', borderColor: '#06D6A0' } : {}}
    >
      {clicked ? "✓ You'll be notified!" : '🔔 Notify Me'}
    </button>
  );
}

export default function Products() {
  return (
    <Layout
      title="Products – SDLC Corp Integration Platform"
      description="Browse our enterprise Odoo integration products including Shopify–Odoo Connector and coming-soon integrations."
    >
      <SdlcNavbar />
      {/* ── Page Header ── */}
      <div style={{
        background: 'linear-gradient(180deg, #fafafe 0%, #fff 100%)',
        padding: '80px 32px 60px',
        borderBottom: '1px solid #E2E3F5',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 16 }}>
            <span className="section-tag-dot" /> Integration Suite
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.8rem', fontWeight: 800, color: '#0D0E2C', letterSpacing: '-0.03em', marginBottom: 14 }}>
            Our Products
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#7475A0', lineHeight: 1.7 }}>
            Enterprise integration solutions built for modern Odoo-powered businesses.
            Connect your ecommerce platforms with precision and zero compromise.
          </p>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="section-wrap" style={{ paddingTop: 64 }}>
        <div className="section-inner">
          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <div key={p.name} className={`product-card${p.featured ? ' featured' : ''}`}>
                {p.featured && <span className="featured-flag">✦ Live Now</span>}
                {p.soon && <span className="coming-flag">Coming Soon</span>}

                <div className="product-icon-wrap">{p.icon}</div>
                <div className="product-name">{p.name}</div>
                <div style={{ fontSize: '.78rem', fontWeight: 700, color: p.featured ? 'var(--brand)' : 'var(--muted)', marginBottom: 12, letterSpacing: '.02em' }}>
                  {p.subtitle}
                </div>
                <div className="product-desc">{p.desc}</div>

                {/* Feature checklist */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '.85rem', color: 'var(--ink2)', marginBottom: 7, lineHeight: 1.5 }}>
                      <span style={{ color: '#06D6A0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="product-tags">
                  {p.tags.map((t) => <span key={t} className="ptag">{t}</span>)}
                </div>

                {p.featured && (
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a href={p.href} target="_blank" rel="noreferrer" className="product-link">
                      View on Odoo Store →
                    </a>
                    <Link to={p.docsHref} className="product-link" style={{ background: 'var(--brand-pale)', color: 'var(--brand)' }}>
                      Documentation
                    </Link>
                  </div>
                )}
                {p.soon && <NotifyBtn />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <MarketingCta
        eyebrow="Get Started Today"
        heading="Choose your"
        headingEmphasis="integration"
        body="Install the Shopify–Odoo Connector from the Odoo App Store, or contact us about upcoming integrations."
        primaryHref="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector"
        primaryLabel="Shopify Connector →"
        secondaryHref="https://sdlccorp.com/contact-us/"
        secondaryLabel="Request Information"
      />
    </Layout>
  );
}
