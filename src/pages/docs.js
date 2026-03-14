import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SdlcNavbar from '../components/SdlcNavbar';
import { PRODUCT_GROUPS } from '../config/products';

function LiveBadge() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.3)', borderRadius: 10, fontSize: '.6rem', fontWeight: 700, color: '#10b981', letterSpacing: '.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'docsPagePulse 2s infinite' }} />
      Live
    </span>
  );
}

function NotifyBtn({ name }) {
  const [sent, setSent] = useState(false);
  return (
    <button onClick={e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: sent ? 'rgba(16,185,129,.1)' : 'rgba(255,255,255,.05)', border: `1px solid ${sent ? 'rgba(16,185,129,.3)' : 'rgba(255,255,255,.1)'}`, borderRadius: 7, color: sent ? '#10b981' : 'rgba(255,255,255,.45)', fontSize: '.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', fontFamily: 'inherit' }}>
      {sent ? '✓ You\'re on the list' : '🔔 Notify me when live'}
    </button>
  );
}

export default function DocsLanding() {
  const [filter, setFilter] = useState('All');
  const allItems = PRODUCT_GROUPS.flatMap(g => g.items.map(p => ({
    ...p,
    groupAccent: g.accent,
    groupCat: g.label,
    live: p.status === 'live',
    href: p.docsIntro,
  })));
  const filtered = filter === 'All' ? allItems : allItems.filter(p => p.groupCat === filter);

  useEffect(() => {
    const id = 'sdlc-docs-landing-styles';
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Mono:wght@400;500&display=swap');
      .sdlc-docs-root * { font-family: 'Bricolage Grotesque', sans-serif !important; box-sizing: border-box; }
      .sdlc-docs-root code { font-family: 'DM Mono', monospace !important; }
      @keyframes docsPagePulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.5)} 50%{box-shadow:0 0 0 4px rgba(16,185,129,0)} }
      @keyframes docsSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      .docs-prod-card { transition: all .22s cubic-bezier(.22,.68,0,1.2) !important; }
      .docs-prod-card:hover { transform: translateY(-4px) !important; box-shadow: 0 22px 50px rgba(0,0,0,.5) !important; }
      .docs-prod-card:hover .docs-card-border { opacity: 1 !important; }
      .docs-section-chip { transition: all .15s !important; }
      .docs-section-chip:hover { background: rgba(99,102,241,.14) !important; color: #a5b4fc !important; }
    `;
    document.head.appendChild(s);
    return () => { const el = document.getElementById(id); if (el) el.remove(); };
  }, []);

  return (
    <Layout title="Documentation — SDLC Corp Odoo Integration Platform" description="Full documentation for all SDLC Corp Odoo connectors and business tools.">
      <div className="sdlc-docs-root" style={{ background: '#050714', color: '#fff', minHeight: '100vh', paddingTop: 60 }}>
        <SdlcNavbar />

        {/* Hero */}
        <section style={{ padding: '72px 32px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '0', left: '25%', right: '25%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.5),rgba(6,182,212,.5),transparent)' }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', background: 'rgba(99,102,241,.1)', border: '1px solid rgba(99,102,241,.22)', borderRadius: 20, marginBottom: 22, fontSize: '.68rem', fontWeight: 700, color: '#818cf8', letterSpacing: '.07em', textTransform: 'uppercase' }}>
              📖 Documentation
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              All product documentation
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.42)', lineHeight: 1.7, marginBottom: 32 }}>
              Guides, API references and integration tutorials for every SDLC Corp product.
              Find your connector below and get set up in minutes.
            </p>

            {/* Search hint */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 18px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, fontSize: '.83rem', color: 'rgba(255,255,255,.32)', marginBottom: 36 }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              Search documentation across all products using the sidebar search
              <kbd style={{ padding: '2px 7px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 5, fontSize: '.7rem', fontFamily: 'DM Mono, monospace' }}>⌘K</kbd>
            </div>

            {/* Filter tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              {['All', 'Connectors', 'Business Tools'].map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} style={{
                  padding: '7px 18px',
                  background: filter === cat ? 'rgba(99,102,241,.18)' : 'rgba(255,255,255,.04)',
                  border: `1px solid ${filter === cat ? 'rgba(99,102,241,.4)' : 'rgba(255,255,255,.08)'}`,
                  borderRadius: 8, color: filter === cat ? '#a5b4fc' : 'rgba(255,255,255,.36)',
                  fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all .18s', fontFamily: 'inherit',
                }}>{cat}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section style={{ padding: '0 32px 100px', maxWidth: 1200, margin: '0 auto' }}>

          {filter === 'All' ? (
            // Grouped view when showing All
            PRODUCT_GROUPS.map(group => (
              <div key={group.label} style={{ marginBottom: 64 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: group.accent, boxShadow: `0 0 10px ${group.accent}80` }} />
                  <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-.01em' }}>{group.label}</h2>
                  <span style={{ padding: '2px 9px', background: `${group.accent}12`, border: `1px solid ${group.accent}22`, borderRadius: 10, fontSize: '.62rem', fontWeight: 700, color: group.accent }}>
                    {group.items.length} products
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                  {group.items.map(p => <ProductCard key={p.name} p={p} accent={group.accent} />)}
                </div>
              </div>
            ))
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, paddingTop: 8 }}>
              {filtered.map(p => <ProductCard key={p.name} p={p} accent={p.groupAccent} />)}
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '52px 32px', textAlign: 'center', background: 'rgba(255,255,255,.01)' }}>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.3)', marginBottom: 20 }}>
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer"
              style={{ padding: '10px 22px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: 9, fontWeight: 700, fontSize: '.88rem', textDecoration: 'none', boxShadow: '0 6px 20px rgba(99,102,241,.28)', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
              Contact support
            </a>
            <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank" rel="noreferrer"
              style={{ padding: '10px 22px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.7)', borderRadius: 9, fontWeight: 600, fontSize: '.88rem', textDecoration: 'none', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.7)'; }}>
              View services
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProductCard({ p, accent }) {
  return (
    <div className="docs-prod-card" style={{
      background: p.live ? `linear-gradient(145deg, ${p.color}08, rgba(5,7,20,1))` : 'rgba(255,255,255,.02)',
      border: `1px solid ${p.live ? p.color + '25' : 'rgba(255,255,255,.06)'}`,
      borderRadius: 14, padding: '24px 24px 20px',
      display: 'flex', flexDirection: 'column', gap: 14,
      position: 'relative', overflow: 'hidden',
      animation: 'docsSlideUp .5s both',
    }}>
      {/* Top glow line for live products */}
      {p.live && <div className="docs-card-border" style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: 1, background: `linear-gradient(90deg,transparent,${p.color}90,transparent)`, opacity: 0.7, transition: 'opacity .3s' }} />}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 46, height: 46, borderRadius: 11, background: `${p.color}12`, border: `1px solid ${p.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem', flexShrink: 0 }}>
            {p.icon}
          </div>
          <div>
            <h3 style={{ fontSize: '.95rem', fontWeight: 800, color: '#fff', margin: 0, marginBottom: 3 }}>{p.name}</h3>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              {p.live ? <LiveBadge /> : (
                <span style={{ padding: '2px 8px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, fontSize: '.6rem', fontWeight: 600, color: 'rgba(255,255,255,.32)' }}>
                  Coming {p.eta}
                </span>
              )}
            </div>
          </div>
        </div>
        {p.live && (
          <a href={p.href}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '6px 13px', background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: 7, color: p.color, fontSize: '.75rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all .2s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = `${p.color}25`; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = `${p.color}15`; e.currentTarget.style.transform = 'none'; }}>
            Open docs
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.42)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {p.tags.map(t => (
          <span key={t} style={{ padding: '2px 8px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 5, fontSize: '.6rem', fontWeight: 600, color: 'rgba(255,255,255,.3)', letterSpacing: '.02em' }}>{t}</span>
        ))}
      </div>

      {/* Doc sections */}
      {p.live && (
        <div>
          <div style={{ fontSize: '.58rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 8 }}>Sections</div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {p.sections.map((sec, i) => (
              <a key={sec} href={`${p.href.replace('/intro', '')}/${sec.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}`}
                className="docs-section-chip"
                style={{ padding: '4px 10px', background: 'rgba(99,102,241,.07)', border: '1px solid rgba(99,102,241,.14)', borderRadius: 7, fontSize: '.7rem', fontWeight: 600, color: 'rgba(255,255,255,.45)', textDecoration: 'none', transition: 'all .15s', display: 'inline-block' }}>
                {i === 0 ? '→ ' : ''}{sec}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTA row */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 'auto', paddingTop: 4 }}>
        {p.live ? (
          <>
            <Link to={p.href}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '.78rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,.28)', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(99,102,241,.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(99,102,241,.28)'; }}>
              Read documentation
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            {p.installHref && (
              <a href={p.installHref} target="_blank" rel="noreferrer"
                style={{ fontSize: '.75rem', fontWeight: 600, color: 'rgba(255,255,255,.35)', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#96bf48'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.35)'}>
                Install on Odoo ↗
              </a>
            )}
          </>
        ) : (
          <NotifyBtn name={p.name} />
        )}
      </div>
    </div>
  );
}

