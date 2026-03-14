import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Reusable CTA section used on marketing pages (products, Shopify–Odoo, etc.).
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
  const PrimaryTag = primaryExternal ? 'a' : Link;
  const SecondaryTag = secondaryHref ? (secondaryExternal ? 'a' : Link) : null;

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
              <PrimaryTag
                href={primaryExternal ? primaryHref : undefined}
                to={primaryExternal ? undefined : primaryHref}
                target={primaryExternal ? '_blank' : undefined}
                rel={primaryExternal ? 'noreferrer' : undefined}
                className="btn-hero-primary"
              >
                {primaryLabel}
              </PrimaryTag>
            )}
            {SecondaryTag && secondaryHref && (
              <SecondaryTag
                href={secondaryExternal ? secondaryHref : undefined}
                to={secondaryExternal ? undefined : secondaryHref}
                target={secondaryExternal ? '_blank' : undefined}
                rel={secondaryExternal ? 'noreferrer' : undefined}
                className="btn-hero-ghost"
              >
                {secondaryLabel}
              </SecondaryTag>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

