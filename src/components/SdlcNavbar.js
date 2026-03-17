import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { DOCS_GROUPS } from '../config/products';

const LOGO_URL =
  'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png';

/* ── Styles injected once ── */
const NAV_STYLES_ID = 'sdlc-nav-styles';
function injectNavStyles() {
  if (typeof document === 'undefined' || document.getElementById(NAV_STYLES_ID)) return;
  // FIX M1: Load fonts via <link> not @import (browsers ignore @import in injected styles)
  const FONT_LINK_ID = 'sdlc-nav-fonts';
  if (!document.getElementById(FONT_LINK_ID)) {
    const link = document.createElement('link');
    link.id = FONT_LINK_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
  }
  const s = document.createElement('style');
  s.id = NAV_STYLES_ID;
  s.textContent = `
    @keyframes sdlcNavPulse { 0%,100%{opacity:1} 50%{opacity:.4} }
    @keyframes sdlcDropIn   { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
    .sdlc-nav-link {
      padding: 6px 12px; border-radius: 7px;
      color: rgba(255,255,255,.55); font-size: .84rem; font-weight: 600;
      text-decoration: none !important; transition: color .15s, background .15s;
      display: inline-flex; align-items: center;
      background: transparent; border: none; cursor: pointer;
      font-family: 'Inter', system-ui, -apple-system, sans-serif; white-space: nowrap;
    }
    .sdlc-nav-link:hover { color: #fff !important; background: rgba(255,255,255,.07) !important; text-decoration: none !important; }
    .sdlc-nav-link.active { color: #fff !important; background: rgba(255,255,255,.08) !important; }
    .sdlc-dropdown-item {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 11px; border-radius: 8px;
      text-decoration: none !important; transition: all .15s;
    }
    .sdlc-dropdown-item:hover { background: rgba(255,255,255,.06) !important; text-decoration: none !important; }
  `;
  document.head.appendChild(s);
}

/* ── Shared base nav style ── */
const BASE_NAV = {
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 5000,
  height: 60, display: 'flex', alignItems: 'center',
  padding: '0 20px 0 16px',
  background: 'rgba(6,8,21,.97)',
  borderBottom: '1px solid rgba(255,255,255,.08)',
  backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
};

/* ── Reusable logo ── */
function Logo() {
  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
      <img src={LOGO_URL} alt="SDLC Corp" style={{ height: 20, width: 'auto', display: 'block' }}
        onError={e => {
          e.target.style.display = 'none';
          const sp = document.createElement('span');
          sp.textContent = 'SDLC Corp';
          sp.style.cssText = 'font-weight:800;font-size:.9rem;color:#fff;letter-spacing:-.02em';
          e.target.parentNode.appendChild(sp);
        }}
      />
    </a>
  );
}

/* ── Reusable divider ── */
function Divider() {
  return <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 16px', flexShrink: 0 }} />;
}

/* ── Reusable contact link ── */
function ContactLink() {
  return (
    <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer" className="sdlc-nav-link">
      Contact
    </a>
  );
}

/* ── Docs dropdown panel ── */
function DocsDropdown({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 60, left: '50%', transform: 'translateX(-50%)',
      width: 'min(600px, calc(100vw - 48px))',
      background: '#0d0f1e', border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 14, padding: '18px 18px 14px',
      boxShadow: '0 20px 60px rgba(0,0,0,.7)', zIndex: 6000,
      animation: 'sdlcDropIn .16s ease both',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.6),transparent)' }} />

      {DOCS_GROUPS.map((group, gi) => (
        <div key={group.group} style={{ marginBottom: gi < DOCS_GROUPS.length - 1 ? 14 : 0 }}>
          <div style={{ fontSize: '.6rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.22)', marginBottom: 8, paddingLeft: 2 }}>
            {group.group}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {group.items.map(item => {
              const clickable = item.live && item.href;
              return clickable ? (
                <a key={item.name} href={item.href} onClick={onClose} className="sdlc-dropdown-item"
                  style={{ background: `${item.color}0a`, border: `1px solid ${item.color}18` }}>
                  <span style={{ width: 30, height: 30, borderRadius: 7, flexShrink: 0, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.95rem' }}>{item.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '.82rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>{item.shortName}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '1px 6px', background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.25)', borderRadius: 8, fontSize: '.55rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#10b981', animation: 'sdlcNavPulse 2s infinite' }} />
                        Live
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div key={item.name} className="sdlc-dropdown-item" style={{ opacity: .42, cursor: 'default', border: '1px solid transparent' }}>
                  <span style={{ width: 30, height: 30, borderRadius: 7, flexShrink: 0, background: 'rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.95rem' }}>{item.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.55)' }}>{item.shortName}</span>
                      <span style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.3)', fontWeight: 500 }}>{item.eta || 'Soon'}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 12, marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.2)' }}>More products every quarter</span>
        <Link to="/" onClick={onClose} style={{ fontSize: '.75rem', fontWeight: 700, color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          All docs →
        </Link>
      </div>
    </div>
  );
}

function useClickOutside(ref, handler) {
  useEffect(() => {
    const fn = e => { if (ref.current && !ref.current.contains(e.target)) handler(); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [ref, handler]);
}

/* ══════════════════════════════════════════════════════
   DOC PAGE NAVBAR
   Layout: [Logo] | [Docs / ProductName breadcrumb] ... [Contact]
   Intentionally minimal — no Products/Services/GetStarted
   so readers stay focused on the documentation.
══════════════════════════════════════════════════════ */
function DocNavbar({ currentProduct }) {
  return (
    <nav style={BASE_NAV}>
      <Logo />
      <Divider />

      {/* Breadcrumb: Docs › ProductName */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 0 }}>
        <Link to="/"
          style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.35)'}
        >
          Docs
        </Link>
        <span style={{ color: 'rgba(255,255,255,.2)', fontSize: '.7rem', flexShrink: 0 }}>/</span>
        <span style={{ fontSize: '.78rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {currentProduct.icon} {currentProduct.shortName}
        </span>
      </div>

      {/* Contact only — right side */}
      <ContactLink />
    </nav>
  );
}

/* ══════════════════════════════════════════════════════
   FULL NAVBAR (Home / Products / any non-doc page)
   Layout: [Logo] | Docs▾ Products Services Contact  [Get Started]
══════════════════════════════════════════════════════ */
function FullNavbar() {
  const [docsOpen, setDocsOpen] = useState(false);
  const docsRef = useRef(null);
  useClickOutside(docsRef, () => setDocsOpen(false));

  return (
    <nav style={BASE_NAV}>
      <Logo />
      <Divider />

      {/* Left nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>

        {/* Docs dropdown */}
        <div ref={docsRef} style={{ position: 'relative' }}>
          <button onClick={() => setDocsOpen(v => !v)}
            className={`sdlc-nav-link${docsOpen ? ' active' : ''}`}
            style={{ gap: 5 }}>
            Docs
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ transform: docsOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <DocsDropdown open={docsOpen} onClose={() => setDocsOpen(false)} />
        </div>

        <Link to="/products" className="sdlc-nav-link">Products</Link>

        <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank" rel="noreferrer" className="sdlc-nav-link">
          Services
        </a>

        <ContactLink />
      </div>

      {/* Get Started */}
      <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector"
        target="_blank" rel="noreferrer"
        style={{
          padding: '7px 16px', borderRadius: 7,
          background: 'linear-gradient(135deg,#6366f1,#4f46e5)',
          color: '#fff', fontSize: '.8rem', fontWeight: 700,
          textDecoration: 'none', boxShadow: '0 4px 12px rgba(99,102,241,.35)',
          transition: 'all .2s', flexShrink: 0,
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 7px 18px rgba(99,102,241,.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(99,102,241,.35)'; }}>
        Get Started
      </a>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════
   EXPORT — switches between DocNavbar and FullNavbar
══════════════════════════════════════════════════════ */
export default function SdlcNavbar({ currentProduct = null }) {
  useEffect(() => { injectNavStyles(); }, []);
  return currentProduct ? <DocNavbar currentProduct={currentProduct} /> : <FullNavbar />;
}