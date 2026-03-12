import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const SDLC_LOGO = 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png';

const CHIPS = [
  { icon: '📦', label: 'Products' }, { icon: '🛒', label: 'Orders' },
  { icon: '👥', label: 'Customers' }, { icon: '📊', label: 'Inventory' },
  { icon: '💰', label: 'Payouts' }, { icon: '🔄', label: 'Webhooks' },
  { icon: '📈', label: 'Reports' }, { icon: '🏭', label: 'Warehouses' },
];

function DiagramCard() {
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
      setPos({ x: dragState.current.origX + (e.clientX - dragState.current.startX), y: dragState.current.origY + (e.clientY - dragState.current.startY) });
    };
    const onMouseUp = () => { dragState.current.dragging = false; setDragging(false); };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => { window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mouseup', onMouseUp); };
  }, []);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    dragState.current = { dragging: true, startX: t.clientX, startY: t.clientY, origX: pos.x, origY: pos.y };
    setDragging(true);
  };

  useEffect(() => {
    const onTouchMove = (e) => {
      if (!dragState.current.dragging) return;
      e.preventDefault();
      const t = e.touches[0];
      setPos({ x: dragState.current.origX + (t.clientX - dragState.current.startX), y: dragState.current.origY + (t.clientY - dragState.current.startY) });
    };
    const onTouchEnd = () => { dragState.current.dragging = false; setDragging(false); };
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => { window.removeEventListener('touchmove', onTouchMove); window.removeEventListener('touchend', onTouchEnd); };
  }, []);

  return (
    <div
      className="diagram-card"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
        transition: dragging ? 'none' : 'box-shadow 0.2s',
        userSelect: 'none',
        boxShadow: dragging ? '0 28px 60px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ position: 'absolute', top: 10, right: 14, fontSize: '.58rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>
        <span>⠿</span> drag me
      </div>
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <img src={SDLC_LOGO} alt="SDLC Corp" style={{ height: 22, margin: '0 auto 10px', display: 'block', opacity: 0.9 }} onError={(e) => { e.target.style.display = 'none'; }} />
        <div className="diagram-title" style={{ marginBottom: 0 }}>BIDIRECTIONAL REAL-TIME SYNC</div>
      </div>
      <div className="diagram-nodes">
        <div className="d-node shopify"><div className="d-node-icon">🛍️</div><div className="d-node-name">Shopify</div><div className="d-node-sub">Store Platform</div></div>
        <div className="d-connector">
          <div className="d-arrows">
            <div className="d-arrow-r" style={{ animation: 'flowRight 1.6s ease-in-out infinite' }}>━━━━→</div>
            <div className="d-arrow-l" style={{ animation: 'flowLeft 1.6s ease-in-out infinite 0.4s' }}>←━━━━</div>
          </div>
          <div className="d-connector-box"><div className="d-connector-name">SDLC Connector</div></div>
          <div className="d-arrows">
            <div className="d-arrow-r" style={{ animation: 'flowRight 1.6s ease-in-out infinite 0.8s' }}>━━━━→</div>
            <div className="d-arrow-l" style={{ animation: 'flowLeft 1.6s ease-in-out infinite 1.2s' }}>←━━━━</div>
          </div>
        </div>
        <div className="d-node odoo"><div className="d-node-icon">⚙️</div><div className="d-node-name">Odoo ERP</div><div className="d-node-sub">Enterprise Platform</div></div>
      </div>
      <div className="diagram-chips">
        {CHIPS.map((c) => <div key={c.label} className="d-chip">{c.icon} {c.label}</div>)}
      </div>
    </div>
  );
}

const FEATURE_GROUPS = [
  {
    title: '📦 Products',
    items: [
      'Import all products from Shopify',
      'Import specific products by ID',
      'Map products between platforms',
      'Export stock to Shopify',
      'Import stock from Shopify',
      'Update product listings',
    ],
  },
  {
    title: '🛒 Orders',
    items: [
      'Import unshipped orders',
      'Import shipped orders',
      'Import specific order by ID',
      'Import & handle cancel orders',
      'Export shipment tracking',
      'Cancel orders in Shopify',
      'Process refunds',
      'Import returns',
    ],
  },
  {
    title: '⚙️ Configuration',
    items: [
      'Webhook auto-configuration',
      'Auto workflow setup',
      'Payment gateway mapping',
      'Tax configuration',
      'Stock location setup',
      'Multi-instance support',
    ],
  },
  {
    title: '📊 Reports',
    items: [
      'Shopify payouts in Odoo',
      'Sales analytics dashboard',
      'Net profit reports',
      'Webhook activity logs',
      'Sync queue management',
      'Error & retry tracking',
    ],
  },
];

const FLOW_STEPS = [
  { num: '1', title: 'Install Connector', desc: 'Download from Odoo App Store and install on your Odoo instance in minutes.' },
  { num: '2', title: 'Add Shopify Store', desc: 'Enter your Shopify domain and generate Private App API credentials.' },
  { num: '3', title: 'Configure Webhooks', desc: 'Auto-register webhooks for real-time sync of orders, products and inventory.' },
  { num: '4', title: 'Start Syncing', desc: 'Run initial imports and let the connector handle everything automatically.' },
];

const TECH_SPECS = [
  { label: 'Odoo Versions', value: ' v18, v19' },
  { label: 'Shopify Plan', value: 'Basic, Shopify, Advanced, Plus' },
  { label: 'Sync Method', value: 'Real-time webhooks + scheduled cron' },
  { label: 'Auth Method', value: 'Private App credentials / Admin API' },
  { label: 'Multi-store', value: 'Yes — multiple Shopify instances per Odoo' },
  { label: 'Multi-warehouse', value: 'Yes — Shopify locations ↔ Odoo warehouses' },
  { label: 'Queue System', value: 'Built-in async queue with retry logic' },
  { label: 'Support', value: '24/7 via SDLC Corp support portal' },
];

export default function ShopifyOdoo() {
  return (
    <Layout
      title="Shopify–Odoo Connector – SDLC Corp"
      description="Seamless real-time bidirectional sync between Shopify and Odoo ERP. Products, orders, inventory, customers and payouts — fully automated."
    >
      {/* ── Product Hero ── */}
      <div className="product-hero">
        <div className="product-hero-inner">
          <div>
            {/* Breadcrumb */}
            <div className="product-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products">Products</Link>
              <span>›</span>
              <span style={{ color: '#fff' }}>Shopify–Odoo Connector</span>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {[
                { label: 'Shopify', bg: 'rgba(150,191,72,.2)', color: '#a3d45a', border: 'rgba(150,191,72,.3)' },
                { label: 'Odoo v18–v19', bg: 'rgba(113,75,103,.25)', color: '#c994be', border: 'rgba(113,75,103,.35)' },
                { label: '✦ Live Now', bg: 'rgba(255,209,102,.2)', color: '#ffd166', border: 'rgba(255,209,102,.3)' },
              ].map((b) => (
                <span key={b.label} style={{
                  background: b.bg, color: b.color, border: `1px solid ${b.border}`,
                  padding: '4px 10px', borderRadius: 16, fontSize: '.7rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '.03em',
                }}>
                  {b.label}
                </span>
              ))}
            </div>

            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, color: '#fff', marginBottom: 16 }}>
              Shopify–Odoo<br />Connector
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.72, marginBottom: 32, maxWidth: 500 }}>
              Seamless real-time bidirectional sync between Shopify and Odoo ERP.
              Products, orders, inventory, customers and payouts — all automated.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank" rel="noreferrer" className="btn-hero-primary">
                Install from Odoo Store →
              </a>
              <Link to="/docs/intro" className="btn-hero-ghost">
                Read the Docs
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.12)' }}>
              {[
                { val: 'v18–19', lbl: 'Odoo Versions' },
                { val: '500+', lbl: 'Active Clients' },
                { val: '24/7', lbl: 'Expert Support' },
              ].map((s) => (
                <div key={s.lbl} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{s.val}</div>
                  <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', marginTop: 4 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: draggable diagram */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            <style>{`
              @keyframes flowRight { 0%,100%{opacity:.4;transform:translateX(0)} 50%{opacity:1;transform:translateX(4px)} }
              @keyframes flowLeft  { 0%,100%{opacity:.4;transform:translateX(0)} 50%{opacity:1;transform:translateX(-4px)} }
            `}</style>
            <DiagramCard />
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <section className="section-wrap" style={{ background: '#fafafe' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 12 }}>
              <span className="section-tag-dot" /> Setup
            </div>
            <h2 className="section-heading">Up and running in <em>4 steps</em></h2>
            <p className="section-subhead" style={{ margin: '0 auto' }}>
              Connect your Shopify store to Odoo in under 15 minutes — no code required.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {FLOW_STEPS.map((s) => (
              <div key={s.num} style={{
                background: '#fff',
                border: '1px solid #E2E3F5',
                borderRadius: 18,
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all .3s',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--brand)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.2rem',
                  margin: '0 auto 16px',
                }}>
                  {s.num}
                </div>
                <h4 style={{ fontSize: '.95rem', fontWeight: 700, color: '#0D0E2C', marginBottom: 8 }}>{s.title}</h4>
                <p style={{ color: '#7475A0', fontSize: '.84rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Groups ── */}
      <section className="features-section">
        <div className="features-inner">
          <div className="features-header">
            <div className="section-tag reveal"><span className="section-tag-dot" /> What's Included</div>
            <h2 className="section-heading reveal reveal-delay-1">Everything you need to <em>automate</em></h2>
            <p className="section-subhead reveal reveal-delay-2">
              Every data entity, every direction — fully automated between Shopify and Odoo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
            {FEATURE_GROUPS.map((g) => (
              <div key={g.title} className="feature-card">
                <div className="feature-title">{g.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {g.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 8, fontSize: '.84rem', color: 'rgba(255,255,255,.65)', marginBottom: 8, lineHeight: 1.5 }}>
                      <span style={{ color: '#06D6A0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Specs ── */}
      <section className="section-wrap" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div style={{ marginBottom: 40 }}>
            <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 12 }}>
              <span className="section-tag-dot" /> Technical Specs
            </div>
            <h2 className="section-heading">Built for <em>enterprise</em> scale</h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #E2E3F5', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,.06)' }}>
              <thead>
                <tr>
                  <th style={{ background: 'var(--brand)', color: '#fff', padding: '14px 20px', textAlign: 'left', fontWeight: 700, fontSize: '.875rem' }}>Specification</th>
                  <th style={{ background: 'var(--brand)', color: '#fff', padding: '14px 20px', textAlign: 'left', fontWeight: 700, fontSize: '.875rem' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {TECH_SPECS.map((s, i) => (
                  <tr key={s.label} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9fe' }}>
                    <td style={{ padding: '13px 20px', fontWeight: 700, color: '#0D0E2C', fontSize: '.875rem', borderBottom: '1px solid #E2E3F5' }}>{s.label}</td>
                    <td style={{ padding: '13px 20px', color: '#7475A0', fontSize: '.875rem', borderBottom: '1px solid #E2E3F5' }}>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-box">
            <div className="cta-tag">Ready to integrate?</div>
            <h2 className="cta-heading">Install in minutes,<br />sync <em>forever</em></h2>
            <p className="cta-sub">
              Available directly on the Odoo App Store. Supports all Odoo editions from v18 to v19.
            </p>
            <div className="cta-btns">
              <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank" rel="noreferrer" className="btn-hero-primary">
                Install from Odoo Store →
              </a>
              <Link to="/docs/intro" className="btn-hero-ghost">
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
