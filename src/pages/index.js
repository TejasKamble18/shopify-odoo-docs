import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SdlcNavbar from '../components/SdlcNavbar';
import { PRODUCTS, PRODUCT_GROUPS } from '../config/products';

/* ─────────────────────────────────
   CONSTANTS
───────────────────────────────── */
const LOGO_WHITE = 'https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2025/12/23102543/SDLCCORP-White-Branding.png';

const INTEGRATIONS = PRODUCTS.filter(p => p.category === 'Connectors').map(p => ({
  icon: p.icon,
  name: p.shortName,
  color: p.color,
  live: p.status === 'live',
}));

const FEATURES = [
  { icon: '⚡', title: 'Real-Time Webhooks', desc: 'Instant bidirectional sync. Data flows the moment something changes — zero polling delays.' },
  { icon: '🏭', title: 'Multi-Warehouse', desc: 'Map platform locations to Odoo warehouses. Unified inventory across every fulfillment center.' },
  { icon: '🔄', title: 'Async Queue Engine', desc: 'Built-in retry queue for every sync operation. Nothing gets lost — auto-retry with full error logs.' },
  { icon: '📊', title: 'Financial Reporting', desc: 'Payouts, net profit, sales analytics directly in Odoo accounting. No manual reconciliation.' },
  { icon: '🏪', title: 'Multi-Store Ready', desc: 'Connect unlimited stores to one Odoo instance. Each with its own config, warehouses and queues.' },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'OAuth 2.0 auth, encrypted credential storage and granular access controls throughout.' },
];

const SERVICES = [
  { icon: '🔗', title: 'Odoo Integration', desc: 'API connectors, bidirectional sync, third-party platform integration.', href: 'https://sdlccorp.com/services/odoo-integration-services/' },
  { icon: '⚙️', title: 'Odoo Development', desc: 'Custom module development, workflow automation, feature extensions.', href: 'https://sdlccorp.com/services/odoo-services/odoo-development-company/' },
  { icon: '🎨', title: 'Odoo Customization', desc: 'UI/UX customization, report design and tailored workflows.', href: 'https://sdlccorp.com/services/odoo-services/odoo-customization-services/' },
  { icon: '🚀', title: 'Odoo Implementation', desc: 'End-to-end deployment from requirements through go-live and hypercare.', href: 'https://sdlccorp.com/services/odoo-services/odoo-implementation-services/' },
  { icon: '🔄', title: 'Odoo Migration', desc: 'Seamless version upgrades and platform migrations with zero data loss.', href: 'https://sdlccorp.com/services/odoo-services/odoo-migration-services/' },
  { icon: '🛟', title: 'Odoo Support', desc: '24/7 expert support, SLA-backed maintenance and ongoing enhancements.', href: 'https://sdlccorp.com/services/odoo-services/odoo-support-services/' },
];

const STATS = [
  { value: '500+', label: 'Active Clients' },
  { value: '120+', label: 'Projects Delivered' },
  { value: 'v18–19', label: 'Odoo Supported' },
  { value: '24/7', label: 'Expert Support' },
];

/* ─────────────────────────────────
   TINY COMPONENTS
───────────────────────────────── */
function LiveDot({ size = 6 }) {
  return <span style={{ width: size, height: size, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 0 0 rgba(16,185,129,.4)', display: 'inline-block', animation: 'sdlcPulse 2s infinite', flexShrink: 0 }} />;
}

function LiveBadge() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 9px', background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.3)', borderRadius: 20, fontSize: '.62rem', fontWeight: 700, color: '#10b981', letterSpacing: '.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      <LiveDot /> Live
    </span>
  );
}

function EtaBadge({ eta }) {
  return <span style={{ padding: '3px 9px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, fontSize: '.62rem', fontWeight: 600, color: 'rgba(255,255,255,.35)', letterSpacing: '.03em', whiteSpace: 'nowrap' }}>{eta}</span>;
}

function NotifyBtn() {
  const [sent, setSent] = useState(false);
  return (
    <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 3000); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', background: sent ? 'rgba(16,185,129,.1)' : 'rgba(255,255,255,.05)', border: `1px solid ${sent ? 'rgba(16,185,129,.35)' : 'rgba(255,255,255,.1)'}`, borderRadius: 8, color: sent ? '#10b981' : 'rgba(255,255,255,.45)', fontSize: '.78rem', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
      {sent ? '✓ Added to list' : '🔔 Notify me'}
    </button>
  );
}

/* ─────────────────────────────────
   ORBIT DIAGRAM
───────────────────────────────── */
function OrbitDiagram() {
  const platforms = [
    { name: 'Shopify', icon: '🛍️', color: '#96bf48' },
    { name: 'WooCommerce', icon: '🌐', color: '#7f54b3' },
    { name: 'Magento', icon: '🔷', color: '#f46f25' },
    { name: 'Amazon', icon: '📦', color: '#ff9900' },
    { name: 'eBay', icon: '🏷️', color: '#e53238' },
    { name: 'ShipStation', icon: '🚚', color: '#0070f3' },
  ];
  return (
    <div style={{ position: 'relative', width: 400, height: 430, margin: '0 auto', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      {/* Orbit ring */}
      <div style={{ position: 'absolute', top: 35, left: 35, right: 35, bottom: 55, borderRadius: '50%', border: '1px dashed rgba(255,255,255,.07)', animation: 'sdlcOrbitSpin 40s linear infinite' }}>
        {platforms.map((p, i) => {
          const angle = (i / platforms.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 150;
          const x = r + r * Math.cos(rad);
          const y = r + r * Math.sin(rad);
          return (
            <div key={p.name} style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', animation: 'sdlcOrbitCounter 40s linear infinite' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: `${p.color}10`, border: `1px solid ${p.color}28`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, backdropFilter: 'blur(8px)' }}>
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{p.icon}</span>
                <span style={{ fontSize: '.46rem', fontWeight: 700, color: 'rgba(255,255,255,.38)', letterSpacing: '.04em', textTransform: 'uppercase' }}>{p.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Inner ring */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', width: 170, height: 170, borderRadius: '50%', border: '1px solid rgba(99,102,241,.13)', boxShadow: '0 0 0 22px rgba(99,102,241,.025)' }} />
      {/* Center node */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', width: 92, height: 92, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(28,40,120,.95),rgba(50,70,200,.95))', border: '1.5px solid rgba(99,102,241,.45)', boxShadow: '0 0 36px rgba(99,102,241,.22),0 0 72px rgba(99,102,241,.07)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, zIndex: 5 }}>
        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>⚙️</span>
        <span style={{ fontSize: '.5rem', fontWeight: 900, color: '#fff', letterSpacing: '.07em', textTransform: 'uppercase' }}>Odoo ERP</span>
      </div>
      {/* Chips */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap' }}>
        {['Orders', 'Products', 'Inventory', 'Payouts', 'Customers'].map((chip, i) => (
          <span key={chip} style={{ padding: '3px 8px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, fontSize: '.58rem', color: 'rgba(255,255,255,.38)', fontWeight: 600, animation: `sdlcChipBlink 3s ${i * .4}s ease-in-out infinite` }}>{chip}</span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────
   MAIN PAGE
───────────────────────────────── */
export default function Home() {
  const [activeCat, setActiveCat] = useState('All');
  const allProducts = PRODUCTS || [];
  const filtered = activeCat === 'All' ? allProducts : allProducts.filter(p => p.category === activeCat);

  /* shared reusable inline styles */
  const sectionTag = (accent = '#6366f1', text = '#818cf8') => ({
    display: 'inline-flex', alignItems: 'center', gap: 7,
    padding: '4px 14px',
    background: `${accent}10`, border: `1px solid ${accent}28`,
    borderRadius: 20, fontSize: '.7rem', fontWeight: 700,
    color: text, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 16,
  });
  const h2 = { fontSize: 'clamp(1.8rem, 3.5vw, 2.65rem)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', marginBottom: 12, lineHeight: 1.12 };
  const subtext = { fontSize: '1rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7 };
  const btnP = (extra = {}) => ({ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: '.93rem', textDecoration: 'none', boxShadow: '0 8px 24px rgba(99,102,241,.32)', fontFamily: 'inherit', ...extra });
  const btnG = (extra = {}) => ({ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.78)', borderRadius: 10, fontWeight: 600, fontSize: '.93rem', textDecoration: 'none', fontFamily: 'inherit', ...extra });
  const arrowSvg = <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

  return (
    <Layout title="SDLC Corp — Odoo Integration Platform" description="Enterprise-grade connectors and business tools built for Odoo ERP.">
      <div className="sdlc-root" style={{ background: '#050714', color: '#fff', minHeight: '100vh' }}>
        <SdlcNavbar />

        {/* ═══════════ HERO ═══════════ */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 32px 60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%,black 0%,transparent 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '15%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '25%', right: '5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(6,182,212,.07) 0%,transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          <div className="sdlc-hero-g" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div className="sdlc-stagger">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: 'rgba(99,102,241,.1)', border: '1px solid rgba(99,102,241,.25)', borderRadius: 20, marginBottom: 28 }}>
                <LiveDot />
                <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#818cf8', letterSpacing: '.07em', textTransform: 'uppercase' }}>Odoo Integration Platform</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.08, color: '#fff', marginBottom: 22 }}>
                Connect Odoo to{' '}
                <span style={{ background: 'linear-gradient(135deg,#818cf8 0%,#22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>every platform</span>
                {' '}you sell on
              </h1>
              <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,.48)', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Enterprise-grade connectors for Shopify, Magento, WooCommerce, Amazon, eBay and more — plus powerful business modules built natively for Odoo ERP.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
                <a href="https://sdlccorp.com/in/odoo-development-company/" target="_blank" rel="noreferrer" className="sdlc-btn-p" style={btnP()}>Get started free {arrowSvg}</a>
                <Link to="/docs" className="sdlc-btn-g" style={btnG()}>Browse docs</Link>
              </div>
              <div style={{ display: 'flex', gap: 32, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.07)' }}>
                {STATS.map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.03em', color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.32)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sdlc-orbit-hide" style={{ animation: 'sdlcFadeIn 1s .3s both', display: 'flex', justifyContent: 'center' }}>
              <OrbitDiagram />
            </div>
          </div>
        </section>

        {/* ═══════════ PLATFORM STRIP ═══════════ */}
        <div style={{ padding: '38px 32px', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', background: 'rgba(255,255,255,.01)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '.62rem', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.18)', marginBottom: 22 }}>Connecting Odoo with the platforms that power modern commerce</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              {INTEGRATIONS.map((p, i) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 16px', background: `${p.color}0b`, border: `1px solid ${p.color}22`, borderRadius: 30, animation: `sdlcFadeIn .5s ${i * .07}s both`, transition: 'all .2s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${p.color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <span style={{ fontSize: '1rem' }}>{p.icon}</span>
                  <span style={{ fontSize: '.8rem', fontWeight: 600, color: p.live ? '#fff' : 'rgba(255,255,255,.38)' }}>{p.name}</span>
                  {p.live && <LiveDot size={5} />}
                </div>
              ))}
              <div style={{ padding: '7px 16px', background: 'rgba(255,255,255,.02)', border: '1px dashed rgba(255,255,255,.08)', borderRadius: 30, fontSize: '.7rem', color: 'rgba(255,255,255,.2)', fontWeight: 600 }}>+ More coming</div>
            </div>
          </div>
        </div>

        {/* ═══════════ PRODUCTS GRID ═══════════ */}
        <section style={{ padding: '96px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ marginBottom: 50, textAlign: 'center' }}>
              <div style={sectionTag()}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                Full Product Suite
              </div>
              <h2 style={h2}>Everything your Odoo team needs</h2>
              <p style={{ ...subtext, maxWidth: 490, margin: '0 auto 28px' }}>Connectors for every major commerce platform plus purpose-built business modules — one ecosystem.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                {['All', 'Connectors', 'Business Tools'].map(cat => (
                  <button key={cat} onClick={() => setActiveCat(cat)} style={{ padding: '7px 18px', background: activeCat === cat ? 'rgba(99,102,241,.18)' : 'rgba(255,255,255,.04)', border: `1px solid ${activeCat === cat ? 'rgba(99,102,241,.42)' : 'rgba(255,255,255,.08)'}`, borderRadius: 8, color: activeCat === cat ? '#a5b4fc' : 'rgba(255,255,255,.36)', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all .18s', fontFamily: 'inherit' }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(308px,1fr))', gap: 16 }}>
              {filtered.map(p => (
                <div key={p.name} className="sdlc-prod-card" style={{ background: p.live ? 'linear-gradient(135deg,rgba(99,102,241,.07),rgba(6,182,212,.04))' : 'rgba(255,255,255,.02)', border: `1px solid ${p.live ? 'rgba(99,102,241,.2)' : 'rgba(255,255,255,.06)'}`, borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column', gap: 13, position: 'relative', overflow: 'hidden' }}>
                  {p.live && <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.6),rgba(6,182,212,.6),transparent)' }} />}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{p.icon}</div>
                    {p.live ? <LiveBadge /> : <EtaBadge eta={p.eta} />}
                  </div>
                  <div>
                    <div style={{ fontSize: '.56rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 3 }}>{p.category}</div>
                    <h3 style={{ fontSize: '.98rem', fontWeight: 700, color: '#fff', margin: 0 }}>{p.name}</h3>
                  </div>
                  <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.65, margin: 0, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ padding: '2px 8px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 5, fontSize: '.6rem', fontWeight: 600, color: 'rgba(255,255,255,.3)', letterSpacing: '.02em' }}>{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    {p.live ? (
                      <>
                        <a href={p.href} target="_blank" rel="noreferrer" className="sdlc-btn-p" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 15px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: 7, fontWeight: 700, fontSize: '.78rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,.28)', fontFamily: 'inherit' }}>
                          Install on Odoo {arrowSvg}
                        </a>
                        <Link to={p.docsHref} style={{ fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.32)', textDecoration: 'none', transition: 'color .15s', fontFamily: 'inherit' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.32)'}>Docs →</Link>
                      </>
                    ) : <NotifyBtn />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,.04)', background: 'rgba(255,255,255,.01)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ marginBottom: 56, maxWidth: 540 }}>
              <div style={sectionTag('#06b6d4', '#22d3ee')}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#06b6d4', display: 'inline-block' }} />
                Platform Capabilities
              </div>
              <h2 style={h2}>Built for enterprise reliability</h2>
              <p style={subtext}>Every connector shares the same battle-tested infrastructure — designed for scale, not just demos.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(268px,1fr))', gap: 13 }}>
              {FEATURES.map(f => (
                <div key={f.title} className="sdlc-feat-card" style={{ padding: 24, background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 9, background: 'rgba(99,102,241,.08)', border: '1px solid rgba(99,102,241,.11)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: 13 }}>{f.icon}</div>
                  <h3 style={{ fontSize: '.9rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.36)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section style={{ padding: '72px 32px' }}>
          <div className="sdlc-stats-g" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, overflow: 'hidden' }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ padding: '42px 22px', textAlign: 'center', background: '#050714', borderRight: i < 3 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-.04em', background: 'linear-gradient(135deg,#fff,rgba(255,255,255,.5))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.26)', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,.04)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50, flexWrap: 'wrap', gap: 20 }}>
              <div>
                <div style={sectionTag('#f59e0b', '#fbbf24')}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  Professional Services
                </div>
                <h2 style={h2}>Expert Odoo services</h2>
                <p style={{ ...subtext, maxWidth: 440 }}>Beyond products — a full team of Odoo specialists for every stage of your project.</p>
              </div>
              <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 20px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: 'rgba(255,255,255,.55)', fontSize: '.82rem', fontWeight: 600, textDecoration: 'none', transition: 'all .2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.color = 'rgba(255,255,255,.55)'; }}>
                View all services →
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(275px,1fr))', gap: 13 }}>
              {SERVICES.map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" className="sdlc-serv-card"
                  style={{ padding: 24, background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{s.icon}</div>
                    <span style={{ fontSize: '.88rem', fontWeight: 700, color: '#fff' }}>{s.title}</span>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.36)', lineHeight: 1.62, margin: 0, flex: 1 }}>{s.desc}</p>
                  <span style={{ fontSize: '.73rem', fontWeight: 700, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 5 }}>
                    Learn more
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section style={{ padding: '96px 32px', borderTop: '1px solid rgba(255,255,255,.04)', background: 'rgba(255,255,255,.01)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="sdlc-contact-g" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div style={sectionTag('#10b981', '#34d399')}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Get in touch
                </div>
                <h2 style={h2}>Let's build something together</h2>
                <p style={{ ...subtext, marginBottom: 32 }}>
                  Complex integration requirement? Custom Odoo module? Our specialists are ready to scope your project — free consultation, no commitment.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 34 }}>
                  {[
                    { icon: '💬', title: 'Free Consultation', desc: 'Discuss your needs with our integration experts' },
                    { icon: '⚡', title: 'Fast Turnaround', desc: 'Most projects scoped and kicked off within 1 week' },
                    { icon: '🛡️', title: 'Enterprise SLA', desc: '24/7 support backed by formal SLA agreements' },
                  ].map(item => (
                    <div key={item.title} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(16,185,129,.07)', border: '1px solid rgba(16,185,129,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.95rem', flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontSize: '.86rem', fontWeight: 700, color: '#fff', marginBottom: 2 }}>{item.title}</div>
                        <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.36)' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer" className="sdlc-btn-p"
                    style={{ ...btnP({ background: 'linear-gradient(135deg,#10b981,#059669)', boxShadow: '0 8px 24px rgba(16,185,129,.22)' }) }}>
                    Contact our team {arrowSvg}
                  </a>
                  <a href="https://sdlccorp.com/services/odoo-integration-services/" target="_blank" rel="noreferrer" className="sdlc-btn-g" style={btnG()}>View services</a>
                </div>
              </div>
              {/* Contact card */}
              <div style={{ background: 'linear-gradient(135deg,rgba(16,185,129,.07),rgba(6,182,212,.04))', border: '1px solid rgba(16,185,129,.18)', borderRadius: 18, padding: 38, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(16,185,129,.6),rgba(6,182,212,.6),transparent)' }} />
                <div style={{ marginBottom: 26 }}>
                  <img src={LOGO_WHITE} alt="SDLC Corp" style={{ height: 20, marginBottom: 14, display: 'block' }} onError={e => e.target.style.display = 'none'} />
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>SDLC Corp</div>
                  <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.38)' }}>Digital Transformation & Odoo Specialists</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: '🌐', label: 'Website', value: 'sdlccorp.com', href: 'https://sdlccorp.com/' },
                    { icon: '📧', label: 'Email', value: 'support@sdlccorp.com', href: 'mailto:support@sdlccorp.com' },
                    { icon: '🛒', label: 'Odoo App Store', value: 'View all modules', href: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector' },
                    { icon: '📍', label: 'Services', value: 'sdlccorp.com/services', href: 'https://sdlccorp.com/services/odoo-integration-services/' },
                  ].map(c => (
                    <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 15px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 10, textDecoration: 'none', transition: 'all .15s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; }}>
                      <span style={{ fontSize: '1.05rem' }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: '.6rem', fontWeight: 700, color: 'rgba(255,255,255,.22)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 1 }}>{c.label}</div>
                        <div style={{ fontSize: '.8rem', fontWeight: 600, color: '#fff' }}>{c.value}</div>
                      </div>
                      <svg width="11" height="11" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="2" viewBox="0 0 24 24" style={{ marginLeft: 'auto' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <section style={{ padding: '56px 32px 96px' }}>
          <div style={{ maxWidth: 840, margin: '0 auto', background: 'linear-gradient(135deg,rgba(99,102,241,.12),rgba(6,182,212,.07))', border: '1px solid rgba(99,102,241,.22)', borderRadius: 20, padding: '60px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(99,102,241,.8),rgba(6,182,212,.8),transparent)' }} />
            <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(99,102,241,.12)', border: '1px solid rgba(99,102,241,.25)', borderRadius: 20, fontSize: '.7rem', fontWeight: 700, color: '#818cf8', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 20 }}>Start today</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.15, marginBottom: 12 }}>
              One platform.{' '}
              <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every channel.</span>
              <br />All inside Odoo.
            </h2>
            <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.4)', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Join 500+ businesses running their Odoo ecosystem on SDLC Corp. Start free, scale endlessly.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector" target="_blank" rel="noreferrer" className="sdlc-btn-p" style={btnP()}>Install Shopify Connector {arrowSvg}</a>
              <Link to="/docs" className="sdlc-btn-g" style={btnG()}>Read docs</Link>
              <a href="https://sdlccorp.com/contact-us/" target="_blank" rel="noreferrer" className="sdlc-btn-g" style={btnG({ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.48)' })}>Talk to sales</a>
            </div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '50px 32px 26px' }}>
          <div className="sdlc-footer-g" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr', gap: 40, marginBottom: 42 }}>
            <div>
              <a href="https://sdlccorp.com/" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginBottom: 14 }}>
                <img src={LOGO_WHITE} alt="SDLC Corp" style={{ height: 20, display: 'block' }} onError={e => e.target.style.display = 'none'} />
              </a>
              <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.26)', lineHeight: 1.65, maxWidth: 230, marginBottom: 18 }}>
                Enterprise-grade Odoo integrations and business tools for modern commerce teams worldwide.
              </p>
              <div style={{ display: 'flex', gap: 7 }}>
                {[{ l: 'Odoo Store', h: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector' }, { l: 'sdlccorp.com', h: 'https://sdlccorp.com/' }].map(({ l, h }) => (
                  <a key={l} href={h} target="_blank" rel="noreferrer"
                    style={{ padding: '5px 11px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 6, fontSize: '.68rem', fontWeight: 600, color: 'rgba(255,255,255,.36)', textDecoration: 'none', transition: 'all .15s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.36)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; }}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: 'Products', links: [{ l: 'Shopify Connector', h: 'https://apps.odoo.com/apps/modules/18.0/sdlc_shopify_connector' }, { l: 'All Products', h: '/products' }, { l: 'Roadmap', h: '#' }] },
              { title: 'Developers', links: [{ l: 'Documentation', h: '/docs/shopify/intro' }, { l: 'Getting Started', h: '/docs/shopify/installation/getting-started' }, { l: 'Release Notes', h: '/docs/shopify/reference/release-notes' }] },
              { title: 'Company', links: [{ l: 'Website', h: 'https://sdlccorp.com/' }, { l: 'Services', h: 'https://sdlccorp.com/services/odoo-integration-services/' }, { l: 'Contact', h: 'https://sdlccorp.com/contact-us/' }] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: '.6rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.2)', marginBottom: 14 }}>{col.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(({ l, h }) => (
                    <li key={l}>
                      <a href={h} style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.3)', textDecoration: 'none', transition: 'color .15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.3)'}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.16)' }}>© {new Date().getFullYear()} SDLC Corp. All rights reserved.</span>
            <span style={{ fontSize: '.66rem', color: 'rgba(255,255,255,.12)', fontFamily: "'DM Mono', monospace" }}>Odoo Integration Platform · v18–19</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
}