import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SdlcNavbar from '../components/SdlcNavbar';
import { PRODUCTS, PRODUCT_GROUPS } from '../config/products';

/* ─────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  .sdlc-products {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #06080f;
    color: #fff;
    min-height: 100vh;
    padding-top: 60px;
  }
  .sdlc-products * { box-sizing: border-box; }
  .sdlc-products code, .sdlc-products pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  @keyframes pPulse   { 0%,100%{opacity:1} 50%{opacity:.35} }
  @keyframes pSlideUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pFadeIn  { from{opacity:0} to{opacity:1} }
  @keyframes pGlow    { 0%,100%{opacity:.3} 50%{opacity:.75} }

  /* Card — clickable for live, plain div for coming-soon */
  .p-card {
    transition: transform .2s cubic-bezier(.22,.68,0,1.2), box-shadow .2s, border-color .2s;
    text-decoration: none !important;
  }
  .p-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 52px rgba(0,0,0,.55);
    text-decoration: none !important;
  }
  .p-card:hover .p-top-line { opacity: 1 !important; }
  .p-card:hover .p-arrow    { transform: translateX(3px) !important; }
  .p-arrow { transition: transform .2s ease !important; }

  .p-filter { transition: all .15s; cursor: pointer; }
  .p-filter:hover { opacity: 1 !important; }

  .p-btn { transition: transform .18s, box-shadow .18s; text-decoration: none !important; }
  .p-btn:hover { transform: translateY(-1px); }

  .p-link { transition: color .15s; text-decoration: none !important; }
  .p-link:hover { color: rgba(255,255,255,.9) !important; }

  .p-notify { transition: all .15s; }
  .p-notify:hover {
    background: rgba(255,255,255,.08) !important;
    border-color: rgba(255,255,255,.18) !important;
  }

  .p-cta-btn { transition: all .2s ease; text-decoration: none !important; }
  .p-cta-btn:hover { transform: translateY(-2px); }

  @media (max-width: 700px) {
    .p-grid { grid-template-columns: 1fr !important; }
    .p-hero-inner { padding: 40px 20px 36px !important; }
    .p-section { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;

function useStyles() {
  useEffect(() => {
    const id = 'sdlc-products-v2';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = STYLES;
    document.head.appendChild(el);
    return () => document.getElementById(id)?.remove();
  }, []);
}

/* ─────────────────────────────────────────────────────
   PRODUCT CARD
   · No Live/EtaBadge
   · No tags row
   · No features checklist
   · Layout: icon + category + name → description → CTA
   · Live cards are wrapped in <Link>, coming-soon in <div>
───────────────────────────────────────────────────── */
function ProductCard({ product, delay = 0 }) {
  const live = product.status === 'live';

  const sharedStyle = {
    background: live
      ? `linear-gradient(150deg,${product.color}08,rgba(6,8,21,1))`
      : 'rgba(255,255,255,.018)',
    border: `1px solid ${live ? product.color + '22' : 'rgba(255,255,255,.06)'}`,
    borderRadius: 14,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    position: 'relative',
    overflow: 'hidden',
    animation: `pSlideUp .45s ${delay}ms both`,
    color: 'inherit',
  };

  const inner = (
    <>
      {/* Top glow line (live only) */}
      <div
        className="p-top-line"
        style={{
          position: 'absolute', top: 0, left: '12%', right: '12%', height: 1,
          background: `linear-gradient(90deg,transparent,${product.color}70,transparent)`,
          opacity: live ? 0.5 : 0,
          transition: 'opacity .25s',
        }}
      />

      {/* Icon + category label + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10, flexShrink: 0,
          background: `${product.color}12`,
          border: `1px solid ${product.color}22`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.25rem',
        }}>
          {product.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '.56rem', fontWeight: 700, letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 3,
          }}>
            {product.category}
          </div>
          <h3 style={{
            fontSize: '.95rem', fontWeight: 700, color: '#fff', margin: 0,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {product.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '.83rem', color: 'rgba(255,255,255,.45)',
        lineHeight: 1.6, margin: 0, flex: 1,
      }}>
        {product.desc}
      </p>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        {live && product.docsIntro ? (
          <>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 15px',
              background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
              color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '.78rem',
              boxShadow: '0 4px 12px rgba(99,102,241,.25)',
            }}>
              Read docs
              <svg
                className="p-arrow"
                width="10" height="10" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            {product.storeUrl && (
              <a
                href={product.storeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-link"
                style={{ fontSize: '.75rem', fontWeight: 500, color: 'rgba(255,255,255,.3)' }}
              >
                Odoo Store ↗
              </a>
            )}
          </>
        ) : null}
      </div>
    </>
  );

  if (live && product.docsIntro) {
    return (
      <Link to={product.docsIntro} className="p-card" style={sharedStyle}>
        {inner}
      </Link>
    );
  }

  return (
    <div className="p-card" style={sharedStyle}>
      {inner}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PRODUCTS PAGE
───────────────────────────────────────────────────── */
export default function Products() {
  useStyles();

  const [filter, setFilter] = useState('All');

  const allProducts = PRODUCTS || [];

  /* Filter — map "Odoo Connectors" tab to internal "Connectors" category */
  const filtered = filter === 'All'
    ? allProducts
    : allProducts.filter(p => {
        const cat = filter === 'Odoo Connectors' ? 'Connectors' : filter;
        return p.category === cat;
      });

  /* Sort: live products first, coming-soon after */
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === 'live' && b.status !== 'live') return -1;
    if (a.status !== 'live' && b.status === 'live') return 1;
    return 0;
  });

  /* Group by category for "All" tab */
  const grouped = PRODUCT_GROUPS
    .map(g => ({ ...g, items: sorted.filter(p => p.category === g.label) }))
    .filter(g => g.items.length > 0);

  return (
    <Layout
      title="Products — SDLC Corp Odoo Integration Platform"
      description="Browse every SDLC Corp Odoo connector and business tool."
    >
      <div className="sdlc-products">
        <SdlcNavbar />

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section
          className="p-hero-inner"
          style={{ padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}
        >
          {/* Grid bg decoration */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%,black,transparent)',
          }} />
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '25%', right: '25%', height: 1,
            background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.5),rgba(6,182,212,.4),transparent)',
            animation: 'pGlow 4s infinite',
          }} />

          <div style={{
            maxWidth: 1200, margin: '0 auto',
            textAlign: 'center', position: 'relative', zIndex: 1,
            animation: 'pFadeIn .6s both',
          }}>
            {/* Breadcrumb */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 20,
              fontSize: '.78rem', color: 'rgba(255,255,255,.28)',
            }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>
                Home
              </Link>
              <span>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>Products</span>
            </div>

            {/* Plain heading — no pill, no dot */}
            <h1 style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-.03em',
              lineHeight: 1.2,
              color: '#fff',
              marginBottom: 0,
            }}>
              Products
            </h1>
          </div>
        </section>

        {/* ═══════════════════════ FILTER TABS ═══════════════════════ */}
        <div
          className="p-section"
          style={{ padding: '0 24px 24px', maxWidth: 1200, margin: '0 auto' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {/* Two tabs only: All | Odoo Connectors */}
            {['All', 'Odoo Connectors'].map(cat => (
              <button
                key={cat}
                className="p-filter"
                onClick={() => setFilter(cat)}
                style={{
                  padding: '6px 16px', borderRadius: 8, border: 'none',
                  cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: '.82rem', fontWeight: 600,
                  background: filter === cat ? 'rgba(99,102,241,.18)' : 'rgba(255,255,255,.05)',
                  color: filter === cat ? '#a5b4fc' : 'rgba(255,255,255,.4)',
                  outline: filter === cat ? '1px solid rgba(99,102,241,.35)' : 'none',
                  opacity: filter === cat ? 1 : 0.85,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════════════════ PRODUCT GRID ═══════════════════════ */}
        <section
          className="p-section"
          style={{ padding: '0 24px 80px', maxWidth: 1200, margin: '0 auto' }}
        >
          {/* Grouped view — "All" tab */}
          {filter === 'All' && grouped.map(group => (
            <div key={group.label} style={{ marginBottom: 56 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 20, paddingBottom: 14,
                borderBottom: '1px solid rgba(255,255,255,.06)',
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: group.accent,
                  boxShadow: `0 0 8px ${group.accent}`,
                }} />
                <span style={{ fontSize: '.92rem', fontWeight: 700, color: '#fff' }}>
                  {group.label}
                </span>
                <span style={{
                  padding: '2px 8px',
                  background: `${group.accent}12`,
                  border: `1px solid ${group.accent}22`,
                  borderRadius: 8, fontSize: '.6rem', fontWeight: 700, color: group.accent,
                }}>
                  {group.items.length}
                </span>
              </div>
              <div
                className="p-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: 14,
                }}
              >
                {group.items.map((p, i) => (
                  <ProductCard key={p.id} product={p} delay={i * 40} />
                ))}
              </div>
            </div>
          ))}

          {/* Flat view — "Odoo Connectors" tab */}
          {filter !== 'All' && (
            <div
              className="p-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 14,
                paddingTop: 4,
              }}
            >
              {sorted.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 40} />
              ))}
            </div>
          )}
        </section>

        {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.05)',
          padding: '52px 24px',
          textAlign: 'center',
          background: 'rgba(255,255,255,.008)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
            background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.5),rgba(6,182,212,.4),transparent)',
          }} />
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700, letterSpacing: '-.025em', color: '#fff', marginBottom: 10,
            }}>
              Can't find what you need?
            </h2>
            <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.36)', lineHeight: 1.7, marginBottom: 24 }}>
              Our team builds custom Odoo integrations and modules. Tell us what you need.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://sdlccorp.com/contact-us/"
                target="_blank" rel="noreferrer"
                className="p-cta-btn"
                style={{
                  padding: '10px 22px',
                  background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
                  color: '#fff', borderRadius: 8, fontWeight: 700,
                  fontSize: '.86rem',
                  boxShadow: '0 5px 16px rgba(99,102,241,.28)',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                }}
              >
                Talk to our team
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://sdlccorp.com/services/odoo-integration-services/"
                target="_blank" rel="noreferrer"
                className="p-cta-btn"
                style={{
                  padding: '10px 22px',
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  color: 'rgba(255,255,255,.6)',
                  borderRadius: 8, fontWeight: 600, fontSize: '.86rem',
                }}
              >
                View services
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════════════════ FOOTER ═══════════════════════ */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '22px 24px' }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 12,
          }}>
            <Link
              to="/"
              className="p-link"
              style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.25)' }}
            >
              ← Back to Docs Hub
            </Link>
            <span style={{
              fontSize: '.68rem', color: 'rgba(255,255,255,.16)',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              © {new Date().getFullYear()} SDLC Corp · v18–19
            </span>
            <div style={{ display: 'flex', gap: 18 }}>
              {[
                ['Services',   'https://sdlccorp.com/services/odoo-integration-services/'],
                ['Contact',    'https://sdlccorp.com/contact-us/'],
                ['Odoo Store', 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector'],
              ].map(([l, h]) => (
                <a
                  key={l} href={h}
                  target="_blank" rel="noreferrer"
                  className="p-link"
                  style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.25)' }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </Layout>
  );
}