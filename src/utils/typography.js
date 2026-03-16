/**
 * typography.js — Shared typography constants for all React pages.
 * Import and use FONTS_IMPORT in useStyles() hooks, FONT_BODY / FONT_DISPLAY
 * in inline style fontFamily props.
 */

/** Google Fonts URL — single source, load once */
export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap';

/** @import statement for injection into <style> tags */
export const FONTS_IMPORT = `@import url('${GOOGLE_FONTS_URL}');`;

/** Font-family stacks */
export const FONT_BODY    = "'Inter', system-ui, -apple-system, sans-serif";
export const FONT_DISPLAY = "'Syne', sans-serif";
export const FONT_MONO    = "'JetBrains Mono', 'Fira Code', monospace";

/**
 * Core CSS variables string — inject into a <style> tag once at :root
 * Covers font families, type scale, spacing, letter-spacing, line-height.
 */
export const TYPOGRAPHY_CSS_VARS = `
  /* ── Font families ── */
  --font-body:    ${FONT_BODY};
  --font-display: ${FONT_DISPLAY};
  --font-mono:    ${FONT_MONO};

  /* ── Type scale (clamp: min, preferred vw, max) ── */
  --text-hero:  clamp(3.75rem, 8vw, 7.5rem);    /* 60–120px */
  --text-h1:    clamp(2rem, 4vw, 2.75rem);       /* 32–44px  */
  --text-h2:    clamp(1.5rem, 2.8vw, 2rem);      /* 24–32px  */
  --text-h3:    clamp(1.125rem, 2vw, 1.25rem);   /* 18–20px  */
  --text-body:  clamp(1rem, 1.5vw, 1.125rem);    /* 16–18px  */
  --text-sm:    clamp(0.8125rem, 1.2vw, 0.875rem); /* 13–14px */
  --text-xs:    0.75rem;                           /* 12px    */

  /* ── Letter spacing ── */
  --tracking-hero:   -0.04em;
  --tracking-h1:     -0.03em;
  --tracking-h2:     -0.025em;
  --tracking-h3:     -0.01em;
  --tracking-body:    0;
  --tracking-caps:    0.08em;
  --tracking-wide:    0.05em;

  /* ── Line heights ── */
  --leading-display:  1.05;
  --leading-heading:  1.18;
  --leading-snug:     1.35;
  --leading-body:     1.68;
  --leading-relaxed:  1.75;

  /* ── Font weights ── */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    800;
`;