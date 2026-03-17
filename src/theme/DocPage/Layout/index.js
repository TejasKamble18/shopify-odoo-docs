/**
 * src/theme/DocPage/Layout/index.js
 *
 * Swizzled Docusaurus DocPage Layout.
 * Wraps every /docs/** page with the SDLC Corp branded navbar.
 *
 * FIX M4: Removed unused switcherItems prop — SdlcNavbar only accepts
 *          currentProduct. Passing extra props caused React warnings.
 */

import React from 'react';
import DocPageLayout from '@theme-original/DocPage/Layout';
import { useLocation } from '@docusaurus/router';
import SdlcNavbar from '../../../components/SdlcNavbar';
import { getProductByDocsPath } from '../../../config/products';

export default function DocPageLayoutWrapper(props) {
  const location = useLocation();
  const currentProduct = getProductByDocsPath(location.pathname);

  return (
    <>
      <SdlcNavbar currentProduct={currentProduct} />
      <DocPageLayout {...props} />
    </>
  );
}