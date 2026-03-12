import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const SDLC_LOGO = 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png';

const PRODUCTS = [
  {
    icon: '🛍️',
    name: 'Shopify–Odoo Connector',
    desc: 'Seamless real-time bidirectional sync between Shopify and Odoo ERP. Products, orders, inventory, customers and payouts — all automated.',
    tags: ['Real-time Sync', 'v18–v19', 'Webhooks', 'Multi-store'],
    featured: true,
    linkLabel: 'View on Odoo App Store →',
    href: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector',
  },
  { icon: '🌐', name: 'WooCommerce–Odoo Connector', desc: 'Integrate Odoo with WooCommerce for WordPress-based stores. Full product, order and customer synchronization.', tags: ['WordPress', 'REST API', 'Q2 2026'], soon: true },
  { icon: '🔷', name: 'Magento 2–Odoo Connector', desc: 'Connect Magento 2 with Odoo for a complete ecommerce automation experience. Multi-store, multi-language ready.', tags: ['Magento 2', 'Multi-store', 'Q2 2026'], soon: true },
  { icon: '📦', name: 'Amazon–Odoo Connector', desc: 'Full Amazon Seller Central integration with Odoo. FBA/FBM management, order automation and pricing optimization.', tags: ['Seller Central', 'FBA/FBM', 'Q3 2026'], soon: true },
  { icon: '🏷️', name: 'eBay–Odoo Connector', desc: 'Manage eBay listings, orders and inventory directly from Odoo. Multi-account and multi-region support included.', tags: ['eBay API', 'Listings', 'Q3 2026'], soon: true },
  { icon: '🚚', name: 'ShipStation–Odoo Connector', desc: 'Seamless shipping and fulfillment integration with ShipStation. Multi-carrier, label printing and return management.', tags: ['Multi-carrier', 'Label Print', 'Q1 2027'], soon: true },
  { icon: '👥', name: 'HRMS Dashboard', desc: 'Advanced HR management with analytics. Employee tracking, payroll, leave management and performance insights.', tags: ['HR Analytics', 'Payroll', 'Q3 2026'], soon: true },
  { icon: '🔐', name: 'Odoo Access Management', desc: 'Enterprise-grade role-based access control, permission management and audit trail logging for Odoo.', tags: ['RBAC', 'Audit Trail', 'Q4 2026'], soon: true },
  { icon: '💰', name: 'Project Cost Management', desc: 'Track, manage and analyze project costs with precision. Budgeting, resource allocation and profitability dashboards.', tags: ['Cost Tracking', 'Budgeting', 'Q4 2026'], soon: true },
];

const FEATURES = [
  { icon: '⚡', title: 'Real-Time Webhooks', desc: 'Instant bidirectional sync powered by Shopify webhooks. Data flows the moment something changes — no polling delays.' },
  { icon: '🔄', title: 'Bidirectional Sync', desc: 'Changes made in Odoo reflect in Shopify and vice versa. Unified truth across both platforms, always consistent.' },
  { icon: '🏭', title: 'Multi-Warehouse Support', desc: 'Map Shopify locations to Odoo warehouses. Manage stock across multiple fulfillment centers seamlessly.' },
  { icon: '📊', title: 'Financial Reporting', desc: "Shopify payouts, net profit reports and sales analytics directly inside Odoo's accounting module." },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'OAuth 2.0 authentication, encrypted credential storage and per-user access controls throughout.' },
  { icon: '⚙️', title: 'Zero-Code Configuration', desc: 'Connect your store in under 15 minutes with a guided setup wizard. No custom development required.' },
];

const CHIPS = [
  { icon: '📦', label: 'Products' },
  { icon: '🛒', label: 'Orders' },
  { icon: '👥', label: 'Customers' },
  { icon: '📊', label: 'Inventory' },
  { icon: '💰', label: 'Payouts' },
  { icon: '🔄', label: 'Webhooks' },
  { icon: '📈', label: 'Reports' },
  { icon: '🏭', label: 'Warehouses' },
];

/* ── Draggable Diagram Card ── */
function DiagramCard() {
  const cardRef = useRef(null);
  const dragState = useRef({ dragging: false, startX: 0, startY: 0, origX: 0, origY: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    dragState.current = { dragging: true, startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    setDragging(true);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragState.current.dragging) return;
      setPos({
        x: dragState.current.origX + (e.clientX - dragState.current.startX),
        y: dragState.current.origY + (e.clientY - dragState.current.startY),
      });
    };
    const onMouseUp = () => {
      dragState.current.dragging = false;
      setDragging(false);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Touch support
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    dragState.current = { dragging: true, startX: touch.clientX, startY: touch.clientY, origX: pos.x, origY: pos.y };
    setDragging(true);
  };

  useEffect(() => {
    const onTouchMove = (e) => {
      if (!dragState.current.dragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      setPos({
        x: dragState.current.origX + (touch.clientX - dragState.current.startX),
        y: dragState.current.origY + (touch.clientY - dragState.current.startY),
      });
    };
    const onTouchEnd = () => {
      dragState.current.dragging = false;
      setDragging(false);
    };
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="diagram-card"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
        transition: dragging ? 'none' : 'box-shadow 0.2s',
        userSelect: 'none',
        boxShadow: dragging
          ? '0 28px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.15)'
          : '0 8px 32px rgba(0,0,0,0.2)',
      }}
    >
      {/* Drag hint */}
      <div style={{
        position: 'absolute', top: 10, right: 14,
        fontSize: '.58rem', color: 'rgba(255,255,255,.3)',
        letterSpacing: '.06em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 4,
      }}>
        <span>⠿</span> drag me
      </div>

      {/* Header with SDLC Corp logo */}
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <img
          src={SDLC_LOGO}
          alt="SDLC Corp"
          style={{ height: 22, margin: '0 auto 10px', display: 'block', opacity: 0.9 }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="diagram-title" style={{ marginBottom: 0 }}>
          BIDIRECTIONAL REAL-TIME SYNC
        </div>
      </div>

      {/* Nodes row */}
      <div className="diagram-nodes">
        {/* E-commerce Platforms node */}
        <div className="d-node shopify">
          <div className="d-node-icon">🛍️</div>
          <div className="d-node-name">E-commerce Platforms</div>
          <div className="d-node-sub">Store Platform</div>
        </div>

        {/* Connector middle */}
        <div className="d-connector">
          <div className="d-arrows">
            <div className="d-arrow-r" style={{ animation: 'flowRight 1.6s ease-in-out infinite' }}>━━━━→</div>
            <div className="d-arrow-l" style={{ animation: 'flowLeft 1.6s ease-in-out infinite 0.4s' }}>←━━━━</div>
          </div>
          <div className="d-connector-box">
            <div className="d-connector-name">SDLC Connector</div>
          </div>
          <div className="d-arrows">
            <div className="d-arrow-r" style={{ animation: 'flowRight 1.6s ease-in-out infinite 0.8s' }}>━━━━→</div>
            <div className="d-arrow-l" style={{ animation: 'flowLeft 1.6s ease-in-out infinite 1.2s' }}>←━━━━</div>
          </div>
        </div>

        {/* Odoo ERP node */}
        <div className="d-node odoo">
          <div className="d-node-icon">⚙️</div>
          <div className="d-node-name">Odoo ERP</div>
          <div className="d-node-sub">Enterprise Platform</div>
        </div>
      </div>

      {/* Chips */}
      <div className="diagram-chips">
        {CHIPS.map((c) => (
          <div key={c.label} className="d-chip">{c.icon} {c.label}</div>
        ))}
      </div>
    </div>
  );
}

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

export default function Home() {
  useEffect(() => {
    // Scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Scroll-to-top button
    const handleScroll = () => {
      const btn = document.getElementById('scrollTop');
      if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <Layout
      title="SDLC Corp – Odoo Integration Solutions"
      description="Enterprise-grade Odoo integrations for ecommerce platforms."
    >
      {/* Arrow flow keyframes injected inline */}
      <style>{`
        @keyframes flowRight {
          0%,100% { opacity:.4; transform:translateX(0); }
          50% { opacity:1; transform:translateX(4px); }
        }
        @keyframes flowLeft {
          0%,100% { opacity:.4; transform:translateX(0); }
          50% { opacity:1; transform:translateX(-4px); }
        }
        .scroll-top {
          position:fixed; bottom:28px; right:28px;
          width:44px; height:44px; background:#292A6C; color:#fff;
          border:none; border-radius:50%; font-size:1rem; cursor:pointer;
          box-shadow:0 8px 32px rgba(41,42,108,.4);
          display:grid; place-items:center; z-index:200;
          opacity:0; transform:translateY(8px); transition:all .25s;
        }
        .scroll-top.visible { opacity:1; transform:translateY(0); }
        .scroll-top:hover { background:#3D3E8F; transform:translateY(-2px); }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-grid-overlay" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-inner">
          {/* Left: copy */}
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot">✦</span>
              <span className="eyebrow-text">Odoo Integration Platform</span>
            </div>

            <h1 className="hero-headline">
              Connect Odoo<br />to the <em>tools that<br />drive your sales</em>
            </h1>

            <p className="hero-desc">
              Enterprise-grade connectors built by SDLC Corp that sync products, orders,
              inventory and customers in real time — no custom dev work required.
            </p>

            <div className="hero-actions">
              <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank" rel="noreferrer" className="btn-hero-primary">
                Explore Shopify Connector <span>→</span>
              </a>
              <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer" className="btn-hero-ghost">
                Talk to Sales
              </a>
            </div>

            <div className="hero-stats">
              <div><div className="hero-stat-val">v18–19</div><div className="hero-stat-lbl">Odoo versions</div></div>
              <div><div className="hero-stat-val">Real-time</div><div className="hero-stat-lbl">Webhook sync</div></div>
              <div><div className="hero-stat-val">500+</div><div className="hero-stat-lbl">Active clients</div></div>
            </div>
          </div>

          {/* Right: draggable diagram */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            <DiagramCard />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-inner">
          <span className="trust-label">Trusted by</span>
          <div className="trust-items">
            {['Odoo App Store Partner','120+ Integration Projects','24/7 Expert Support','Enterprise-Ready Security','v18 – v19 Compatibility'].map((t) => (
              <div key={t} className="trust-item"><span className="trust-check">✓</span> {t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section className="section-wrap" id="products">
        <div className="section-inner">
          <div className="products-header">
            <div>
              <div className="section-tag reveal"><span className="section-tag-dot" /> Integration Suite</div>
              <h2 className="section-heading reveal reveal-delay-1">All our <em>products</em></h2>
              <p className="section-subhead reveal reveal-delay-2">Connect Odoo with the platforms that power your ecommerce. One connector, seamless sync, zero compromise.</p>
            </div>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <div key={p.name} className={`product-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}${p.featured ? ' featured' : ''}`}>
                {p.featured && <span className="featured-flag">✦ Live Now</span>}
                {p.soon && <span className="coming-flag">Coming Soon</span>}
                <div className="product-icon-wrap">{p.icon}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-desc">{p.desc}</div>
                <div className="product-tags">{p.tags.map((t) => <span key={t} className="ptag">{t}</span>)}</div>
                {p.featured && <a href={p.href} target="_blank" rel="noreferrer" className="product-link">{p.linkLabel}</a>}
                {p.soon && <NotifyBtn />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="stats-band">
        <div className="stats-inner">
          {[
            { num: '500', unit: '+', desc: 'Active Clients Worldwide' },
            { num: '120', unit: '+', desc: 'Integration Projects Delivered' },
            { num: '7',   unit: '+', desc: 'Odoo Versions Supported' },
            { num: '24',  unit: '/7', desc: 'Expert Support Available' },
          ].map((s, i) => (
            <div key={s.desc} className={`stat-box reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="stat-num">{s.num}<span className="stat-unit">{s.unit}</span></div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="features-header">
            <div className="section-tag reveal"><span className="section-tag-dot" /> Why Choose Us</div>
            <h2 className="section-heading reveal reveal-delay-1">Built for <em>enterprise</em> scale</h2>
            <p className="section-subhead reveal reveal-delay-2">Every connector is engineered for reliability, performance and the exact workflows your team depends on.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`feature-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <div className="feature-icon-ring">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="cta-tag">Ready to integrate?</div>
            <h2 className="cta-heading">Start syncing Shopify<br />with Odoo <em>today</em></h2>
            <p className="cta-sub">Install directly from the Odoo App Store or talk to our team for a guided implementation.</p>
            <div className="cta-btns">
              <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank" rel="noreferrer" className="btn-hero-primary">
                Install from Odoo Store →
              </a>
              <Link to="/docs/intro" className="btn-hero-ghost">Read Documentation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-to-top */}
      <button className="scroll-top" id="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </Layout>
  );
}
