import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Reusable CTA section used on marketing pages (products, Shopify–Odoo, etc.).
 *
 * FIXED: Previously, when primaryExternal=false or secondaryExternal=false,
 * the component rendered <a href={undefined}> instead of <Link to={href}>.
 * Now correctly routes internal paths via Docusaurus <Link to="...">
 * and external URLs via <a href="..." target="_blank">.
 */
export default function MarketingCta({
  eyebrow = 'Get Started Today',
  heading,
  headingEmphasis,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  primaryExternal = true,
  secondaryExternal = true,
}) {
  return (
    <section className="cta-section">
      <div className="section-inner">
        <div className="cta-box">
          <div className="cta-tag">{eyebrow}</div>
          {heading && (
            <h2 className="cta-heading">
              {heading}{' '}
              {headingEmphasis && <em>{headingEmphasis}</em>}
            </h2>
          )}
          {body && <p className="cta-sub">{body}</p>}
          <div className="cta-btns">
            {primaryHref && (
              primaryExternal ? (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-primary"
                >
                  {primaryLabel}
                </a>
              ) : (
                <Link to={primaryHref} className="btn-hero-primary">
                  {primaryLabel}
                </Link>
              )
            )}
            {secondaryHref && (
              secondaryExternal ? (
                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-ghost"
                >
                  {secondaryLabel}
                </a>
              ) : (
                <Link to={secondaryHref} className="btn-hero-ghost">
                  {secondaryLabel}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}