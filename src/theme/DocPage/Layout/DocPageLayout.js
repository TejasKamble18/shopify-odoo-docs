/**
 * src/theme/DocPage/Layout/index.js
 *
 * Swizzled Docusaurus DocPage Layout.
 * Wraps every /docs/** page with the SDLC Corp branded navbar.
 *
 * To create this file in your project run:
 *   npx docusaurus swizzle @docusaurus/theme-classic DocPage/Layout --wrap --typescript false
 * Then replace the content with this file.
 */

import React from 'react';
import DocPageLayout from '@theme-original/DocPage/Layout';
import { useLocation } from '@docusaurus/router';
import SdlcNavbar from '../../../components/SdlcNavbar';
import { getProductByDocsPath, getProductQuickSwitchList } from '../../../config/products';

export default function DocPageLayoutWrapper(props) {
  const location = useLocation();
  const currentProduct = getProductByDocsPath(location.pathname);
  const switcherItems = getProductQuickSwitchList();

  return (
    <>
      <SdlcNavbar currentProduct={currentProduct} switcherItems={switcherItems} />
      <DocPageLayout {...props} />
    </>
  );
}