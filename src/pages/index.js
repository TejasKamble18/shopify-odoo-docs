import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SdlcNavbar from '../components/SdlcNavbar';
import { PRODUCTS, PRODUCT_GROUPS } from '../config/products';

/* ─────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  .sdlc-home {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #06080f;
    color: #fff;
    min-height: 100vh;
    padding-top: 60px;
  }
  .sdlc-home * { box-sizing: border-box; }
  .sdlc-home code, .sdlc-home pre { font-family: 'JetBrains Mono', 'Fira Code', monospace; }

  @keyframes hPulse   { 0%,100%{opacity:1} 50%{opacity:.35} }
  @keyframes hSlideUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes hFadeIn  { from{opacity:0} to{opacity:1} }
  @keyframes hGlow    { 0%,100%{opacity:.3} 50%{opacity:.75} }

  .h-card { transition: transform .2s cubic-bezier(.22,.68,0,1.2), box-shadow .2s, border-color .2s; }
  .h-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.5); }
  .h-card:hover .h-top-line { opacity: 1 !important; }

  .h-search-wrap { transition: border-color .15s, box-shadow .15s; }
  .h-search-wrap:focus-within {
    border-color: rgba(99,102,241,.55) !important;
    box-shadow: 0 0 0 3px rgba(99,102,241,.12);
  }
  .h-search-input {
    flex: 1; background: transparent; border: none; outline: none;
    color: #fff; font-size: .9rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    min-width: 0;
  }
  .h-search-input::placeholder { color: rgba(255,255,255,.28); }

  .h-filter { transition: all .15s; cursor: pointer; }
  .h-filter:hover { opacity: 1 !important; }

  .h-btn { transition: transform .18s, box-shadow .18s; text-decoration: none !important; }
  .h-btn:hover { transform: translateY(-1px); }
  .h-link { transition: color .15s; text-decoration: none !important; }
  .h-link:hover { color: rgba(255,255,255,.9) !important; text-decoration: none !important; }

  .h-notify { transition: all .15s; }
  .h-notify:hover { background: rgba(255,255,255,.08) !important; border-color: rgba(255,255,255,.18) !important; }

  .h-empty { animation: hFadeIn .25s ease; }

  @media (max-width: 768px) {
    .h-grid { grid-template-columns: 1fr !important; }
    .h-search-wrap { max-width: 100% !important; }
    .h-hero-inner { padding: 40px 20px 36px !important; }
    .h-section { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;

function useStyles() {
  useEffect(() => {
    const id = 'sdlc-home-v2';
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
   Changes vs original:
   · No Live / EtaBadge shown
   · No tags row
   · Layout: icon+name → description → CTA
───────────────────────────────────────────────────── */
function ProductCard({ product, delay = 0 }) {
  const live = product.status === 'live';
  return (
    <div
      className="h-card"
      style={{
        background: live
          ? `linear-gradient(145deg,${product.color}08,rgba(6,8,21,1))`
          : 'rgba(255,255,255,.018)',
        border: `1px solid ${live ? product.color + '25' : 'rgba(255,255,255,.07)'}`,
        borderRadius: 14,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative',
        overflow: 'hidden',
        animation: `hSlideUp .45s ${delay}ms both`,
      }}
    >
      {/* Subtle top glow line (live cards only) */}
      <div
        className="h-top-line"
        style={{
          position: 'absolute', top: 0, left: '12%', right: '12%', height: 1,
          background: `linear-gradient(90deg,transparent,${product.color}70,transparent)`,
          opacity: live ? 0.5 : 0,
          transition: 'opacity .25s',
        }}
      />

      {/* Icon + category label + product name */}
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
      <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.6, margin: 0 }}>
        {product.desc}
      </p>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        {live && product.docsIntro ? (
          <>
            <Link
              to={product.docsIntro}
              className="h-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 15px',
                background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
                color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '.78rem',
                boxShadow: '0 4px 12px rgba(99,102,241,.25)',
              }}
            >
              Read docs
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {product.storeUrl && (
              <a
                href={product.storeUrl}
                target="_blank"
                rel="noreferrer"
                className="h-link"
                style={{ fontSize: '.75rem', fontWeight: 500, color: 'rgba(255,255,255,.3)' }}
              >
                Odoo Store ↗
              </a>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────── */
export default function Home() {
  useStyles();

  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);

  /* ⌘K / Ctrl+K → focus search input */
  useEffect(() => {
    const fn = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape' && query) {
        setQuery('');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [query]);

  const allProducts = PRODUCTS || [];
  const q = query.toLowerCase().trim();

  /* Filter — map "Odoo Connectors" tab label to internal "Connectors" category */
  const filtered = allProducts.filter(p => {
    const catLabel = category === 'Odoo Connectors' ? 'Connectors' : category;
    const catOk = catLabel === 'All' || p.category === catLabel;
    if (!q) return catOk;
    const textMatch =
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      (p.desc || '').toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.sections.some(s => s.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q);
    return catOk && textMatch;
  });

  /* Sort: live products first, coming-soon after */
  filtered.sort((a, b) => {
    if (a.status === 'live' && b.status !== 'live') return -1;
    if (a.status !== 'live' && b.status === 'live') return 1;
    return 0;
  });

  /* Group by category for "All" tab view */
  const grouped = PRODUCT_GROUPS
    .map(g => ({ ...g, items: filtered.filter(p => p.category === g.label) }))
    .filter(g => g.items.length > 0);

  const searching = q.length > 0;

  return (
    <Layout
      title="SDLC Corp — Odoo Integration Docs"
      description="Official documentation for all SDLC Corp Odoo integration products."
    >
      <div className="sdlc-home">
        <SdlcNavbar />

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section
          className="h-hero-inner"
          style={{
            padding: '64px 24px 48px',
            maxWidth: 1200,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Grid bg decoration */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%,black,transparent)',
          }} />

          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '25%', right: '25%', height: 1,
            background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.5),rgba(6,182,212,.4),transparent)',
            animation: 'hGlow 4s infinite', zIndex: 0,
          }} />

          <div style={{ position: 'relative', zIndex: 1, animation: 'hFadeIn .6s both' }}>

            {/* Plain heading — no pill, no dot */}
            <h1 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
              fontWeight: 700,
              letterSpacing: '-.03em',
              lineHeight: 1.2,
              color: '#fff',
              marginBottom: 28,
            }}>
              Product Documentation
            </h1>

            {/* Search bar */}
            <div
              className="h-search-wrap"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', maxWidth: 460, margin: '0 auto',
                padding: '10px 14px',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 12,
              }}
            >
              <svg
                width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2"
                style={{ flexShrink: 0 }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={searchRef}
                className="h-search-input"
                type="text"
                placeholder="Search products, sections…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
              {query ? (
                <button
                  onClick={() => { setQuery(''); searchRef.current?.focus(); }}
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 5, color: 'rgba(255,255,255,.55)',
                    padding: '2px 8px', fontSize: '.7rem',
                    cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0,
                    transition: 'all .15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.14)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,.55)';
                  }}
                >
                  Clear
                </button>
              ) : (
                <kbd style={{
                  padding: '2px 7px', background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)', borderRadius: 5,
                  fontSize: '.65rem', fontFamily: 'JetBrains Mono, monospace',
                  color: 'rgba(255,255,255,.28)', flexShrink: 0,
                }}>
                  ⌘K
                </kbd>
              )}
            </div>

          </div>
        </section>

        {/* ═══════════════════════ FILTER TABS ═══════════════════════ */}
        <div
          className="h-section"
          style={{ padding: '0 24px 24px', maxWidth: 1200, margin: '0 auto' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>

            {/* Two tabs only: All | Odoo Connectors */}
            {['All', 'Odoo Connectors'].map(cat => (
              <button
                key={cat}
                className="h-filter"
                onClick={() => setCategory(cat)}
                style={{
                  padding: '6px 16px', borderRadius: 8, border: 'none',
                  cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: '.82rem', fontWeight: 600,
                  background: category === cat ? 'rgba(99,102,241,.18)' : 'rgba(255,255,255,.05)',
                  color: category === cat ? '#a5b4fc' : 'rgba(255,255,255,.4)',
                  outline: category === cat ? '1px solid rgba(99,102,241,.35)' : 'none',
                  opacity: category === cat ? 1 : 0.85,
                }}
              >
                {cat}
              </button>
            ))}

            {/* Search result count */}
            {searching && filtered.length > 0 && (
              <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.28)', marginLeft: 4 }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </span>
            )}
          </div>
        </div>

        {/* ═══════════════════════ PRODUCT GRID ═══════════════════════ */}
        <section
          className="h-section"
          style={{ padding: '0 24px 80px', maxWidth: 1200, margin: '0 auto' }}
        >

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="h-empty" style={{ textAlign: 'center', padding: '64px 20px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🔍</div>
              <p style={{
                fontSize: '1rem', fontWeight: 700,
                color: 'rgba(255,255,255,.45)', marginBottom: 8,
              }}>
                No results for &ldquo;{query}&rdquo;
              </p>
              <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.22)', marginBottom: 20 }}>
                Try "Shopify", "inventory", "orders", or "v18"
              </p>
              <button
                onClick={() => setQuery('')}
                style={{
                  padding: '8px 18px',
                  background: 'rgba(99,102,241,.15)',
                  border: '1px solid rgba(99,102,241,.3)',
                  borderRadius: 8, color: '#a5b4fc',
                  fontSize: '.82rem', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Clear search
              </button>
            </div>
          )}

          {/* Grouped view — "All" tab */}
          {filtered.length > 0 && category === 'All' && grouped.map(group => (
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
                className="h-grid"
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
          {filtered.length > 0 && category !== 'All' && (
            <div
              className="h-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 14,
                paddingTop: 4,
              }}
            >
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 40} />
              ))}
            </div>
          )}

        </section>

        {/* ═══════════════════════ SUPPORT STRIP ═══════════════════════ */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: '40px 24px',
          textAlign: 'center',
          background: 'rgba(255,255,255,.01)',
        }}>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.28)', marginBottom: 16 }}>
            Need help or a custom integration?
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://sdlccorp.com/contact-us/"
              target="_blank"
              rel="noreferrer"
              className="h-btn"
              style={{
                padding: '9px 20px',
                background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
                color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '.84rem',
                boxShadow: '0 5px 16px rgba(99,102,241,.25)',
              }}
            >
              Contact support
            </a>
            <a
              href="https://sdlccorp.com/services/odoo-integration-services/"
              target="_blank"
              rel="noreferrer"
              className="h-btn"
              style={{
                padding: '9px 20px',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.1)',
                color: 'rgba(255,255,255,.6)',
                borderRadius: 8, fontWeight: 600, fontSize: '.84rem',
              }}
            >
              View services
            </a>
          </div>
        </div>

        {/* ═══════════════════════ FOOTER ═══════════════════════ */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '22px 24px' }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 12,
          }}>
            <img
              src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png"
              alt="SDLC Corp"
              style={{ height: 17, opacity: 0.5 }}
              onError={e => e.target.style.display = 'none'}
            />
            <span style={{
              fontSize: '.68rem',
              color: 'rgba(255,255,255,.16)',
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
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noreferrer"
                  className="h-link"
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