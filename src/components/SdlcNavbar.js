import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { DOCS_GROUPS } from '../config/products';

const LOGO_URL = 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png';

function LiveDot() {
  return (
    <span style={{
      width: 6, height: 6, borderRadius: '50%', background: '#10b981',
      display: 'inline-block', flexShrink: 0,
      animation: 'sdlcNavPulse 2s infinite',
    }} />
  );
}

function DocsDropdown({ open }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
      transform: 'translateX(-50%)',
      width: 640,
      background: '#0c0e1d',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 16, padding: '20px 20px 16px',
      boxShadow: '0 28px 72px rgba(0,0,0,.7)',
      zIndex: 9999,
      animation: 'sdlcNavDropIn .18s cubic-bezier(.16,1,.3,1)',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.7),transparent)' }} />

      {DOCS_GROUPS.map(group => (
        <div key={group.group} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: '.58rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 8, paddingLeft: 2 }}>
            {group.group}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {group.items.map(item => (
              <a key={item.name} href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 9,
                  background: item.live ? `${item.color}10` : 'transparent',
                  border: `1px solid ${item.live ? item.color + '22' : 'transparent'}`,
                  textDecoration: 'none',
                  opacity: item.live ? 1 : 0.52,
                  transition: 'all .15s',
                  cursor: item.live ? 'pointer' : 'default',
                  pointerEvents: item.live ? 'auto' : 'none',
                }}
                onMouseEnter={e => { if (item.live) { e.currentTarget.style.background = `${item.color}18`; e.currentTarget.style.opacity = '1'; } }}
                onMouseLeave={e => { e.currentTarget.style.background = item.live ? `${item.color}10` : 'transparent'; }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: `${item.color}15`, border: `1px solid ${item.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                }}>{item.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
                    <span style={{ fontSize: '.82rem', fontWeight: 700, color: item.live ? '#fff' : 'rgba(255,255,255,.48)' }}>{item.name}</span>
                    {item.live && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '1px 7px', background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.28)', borderRadius: 10, fontSize: '.55rem', fontWeight: 700, color: '#10b981', letterSpacing: '.05em', textTransform: 'uppercase' }}>
                        <LiveDot /> Live
                      </span>
                    )}
                    {!item.live && <span style={{ fontSize: '.55rem', fontWeight: 600, color: 'rgba(255,255,255,.2)' }}>Soon</span>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.2)' }}>More products shipping every quarter</span>
        <Link to="/docs" style={{ fontSize: '.75rem', fontWeight: 700, color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
          All documentation →
        </Link>
      </div>
    </div>
  );
}

export default function SdlcNavbar({ currentProduct = null, switcherItems = [] }) {
  const [docsOpen, setDocsOpen] = useState(false);
  const docsRef = useRef(null);

  useEffect(() => {
    const fn = e => { if (docsRef.current && !docsRef.current.contains(e.target)) setDocsOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const navLink = { padding: '6px 11px', borderRadius: 7, color: 'rgba(255,255,255,.5)', fontSize: '.82rem', fontWeight: 600, textDecoration: 'none', transition: 'all .15s', display: 'inline-block' };

  return (
    <nav className="sdlc-nb" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 5000,
      height: 60, display: 'flex', alignItems: 'center',
      padding: '0 24px',
      background: 'rgba(5,7,20,.92)',
      borderBottom: '1px solid rgba(255,255,255,.07)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
    }}>
      {/* Logo → homepage */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 8, flexShrink: 0, textDecoration: 'none' }}>
        <img src={LOGO_URL} alt="SDLC Corp" style={{ height: 22, width: 'auto', display: 'block' }}
          onError={e => { e.target.style.display = 'none'; e.target.insertAdjacentHTML('afterend', '<span style="font-weight:900;font-size:.88rem;color:#fff;letter-spacing:-.02em;font-family:Bricolage Grotesque,sans-serif">SDLC Corp</span>'); }} />
      </a>

      <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,.1)', margin: '0 16px', flexShrink: 0 }} />

      {/* If on a product docs page, show breadcrumb */}
      {currentProduct ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 28, flexShrink: 0 }}>
          <Link to="/docs" style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.35)'}>
            Docs
          </Link>
          <span style={{ color: 'rgba(255,255,255,.18)', fontSize: '.75rem' }}>/</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: '.88rem' }}>{currentProduct.icon}</span>
            <span style={{ fontSize: '.78rem', fontWeight: 700, color: '#fff' }}>{currentProduct.shortName}</span>
          </span>
        </div>
      ) : (
        <span style={{ fontSize: '.66rem', fontWeight: 700, color: 'rgba(255,255,255,.22)', letterSpacing: '.08em', textTransform: 'uppercase', marginRight: 28, whiteSpace: 'nowrap', flexShrink: 0 }}>
          Odoo Integrations
        </span>
      )}

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        {/* Docs dropdown */}
        <div ref={docsRef} style={{ position: 'relative' }}>
          <button onClick={() => setDocsOpen(v => !v)} style={{
            ...navLink, background: docsOpen ? 'rgba(255,255,255,.07)' : 'transparent',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            color: docsOpen ? '#fff' : 'rgba(255,255,255,.5)',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            Docs
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: docsOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <DocsDropdown open={docsOpen} />
        </div>

        {[
          { l: 'Products', h: '/#products' },
          { l: 'Services', h: 'https://sdlccorp.com/services/odoo-integration-services/', ext: true },
        ].map(({ l, h, ext }) => (
          <a key={l} href={h} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}
            style={navLink}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.background = 'transparent'; }}>
            {l}
          </a>
        ))}
      </div>

      {/* Right CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginLeft: 'auto', flexShrink: 0 }}>
        <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer"
          style={{ padding: '5px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 7, color: 'rgba(255,255,255,.68)', fontSize: '.78rem', fontWeight: 600, textDecoration: 'none', transition: 'all .15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.color = 'rgba(255,255,255,.68)'; }}>
          Contact
        </a>
        <a href="https://sdlccorp.com/in/odoo-development-company/" target="_blank" rel="noreferrer"
          style={{ padding: '6px 16px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: 7, color: '#fff', fontSize: '.78rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,.3)', transition: 'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 18px rgba(99,102,241,.42)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(99,102,241,.3)'; }}>
          Get Started
        </a>
      </div>
    </nav>
  );
}