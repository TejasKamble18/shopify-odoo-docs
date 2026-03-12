import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const products = [
  {
    id: 'shopify-connector',
    name: 'Odoo Shopify Connector',
    description: 'Seamless real-time synchronization between Odoo ERP and Shopify stores',
    icon: '🛒',
    status: 'Live',
    statusColor: '#10b981',
    features: [
      'Real-time Product Sync',
      'Automated Order Management',
      'Inventory Synchronization',
      'Customer Data Sync',
      'Payment Processing',
      'Multi-warehouse Support'
    ],
    link: '/docs/docs/intro',
    badge: 'Enterprise Ready',
  },
  {
    id: 'magento-connector',
    name: 'Odoo Magento 2 Connector',
    description: 'Connect your Odoo instance with Magento 2 for complete ecommerce automation',
    icon: '🔗',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Product Catalog Sync',
      'Order Automation',
      'Advanced Inventory',
      'Customer Profiles',
      'Multi-store Management',
      'Analytics Integration'
    ],
    link: '#',
    badge: 'Q2 2026',
  },
  {
    id: 'woocommerce-connector',
    name: 'Odoo WooCommerce Connector',
    description: 'Integrate Odoo with WooCommerce for WordPress-based ecommerce stores',
    icon: '📦',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'WordPress Integration',
      'Real-time Sync',
      'Order Management',
      'Customer Sync',
      'Payment Gateway',
      'Stock Management'
    ],
    link: '#',
    badge: 'Q2 2026',
  },
  {
    id: 'ebay-connector',
    name: 'Odoo eBay Connector',
    description: 'Manage your eBay inventory and orders directly from Odoo',
    icon: '🏷️',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Listing Management',
      'Order Import/Export',
      'Inventory Tracking',
      'Pricing Automation',
      'Seller Analytics',
      'Multi-account Support'
    ],
    link: '#',
    badge: 'Q3 2026',
  },
  {
    id: 'amazon-connector',
    name: 'Odoo Amazon Connector',
    description: 'Full Amazon Seller Central integration with Odoo ERP',
    icon: '🚚',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Seller Central Sync',
      'FBA/FBM Management',
      'Order Fulfillment',
      'Pricing Optimization',
      'Analytics Dashboard',
      'Multi-region Support'
    ],
    link: '#',
    badge: 'Q3 2026',
  },
  {
    id: 'hrms-dashboard',
    name: 'HRMS Dashboard',
    description: 'Advanced HR management with comprehensive analytics and reporting',
    icon: '👥',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Employee Management',
      'Attendance Tracking',
      'Leave Management',
      'Payroll Processing',
      'Performance Analytics',
      'Mobile Access'
    ],
    link: '#',
    badge: 'Q3 2026',
  },
  {
    id: 'access-management',
    name: 'Odoo Access Management',
    description: 'Enterprise-grade role-based access control and security',
    icon: '🔐',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Role-based Access',
      'Permission Management',
      'Audit Trail Logging',
      'Security Policies',
      'User Activity Monitor',
      'Compliance Reports'
    ],
    link: '#',
    badge: 'Q4 2026',
  },
  {
    id: 'project-cost',
    name: 'Project Cost Management',
    description: 'Track, manage, and analyze project costs with precision',
    icon: '💰',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Cost Tracking',
      'Budget Planning',
      'Resource Allocation',
      'Financial Reports',
      'Profitability Analysis',
      'Real-time Dashboards'
    ],
    link: '#',
    badge: 'Q4 2026',
  },
  {
    id: 'shipstation-connector',
    name: 'Odoo ShipStation Connector',
    description: 'Seamless shipping and fulfillment integration with ShipStation',
    icon: '📮',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    features: [
      'Order Synchronization',
      'Multi-carrier Shipping',
      'Tracking Integration',
      'Fulfillment Automation',
      'Label Printing',
      'Return Management'
    ],
    link: '#',
    badge: 'Q1 2027',
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <Layout
      title="SDLC Corp - Odoo Integration Solutions"
      description="Enterprise-grade Odoo integrations for ecommerce platforms"
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Innovative Enterprise Solutions</span>
            <h1 className={styles.heroTitle}>
              Transform Your Business with <span className={styles.gradient}>Seamless Integrations</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Connect Odoo with your favorite ecommerce platforms and business tools. Automate workflows, 
              synchronize data in real-time, and scale your business without limitations.
            </p>
            <div className={styles.heroButtons}>
              <a href={selectedProduct.link} className={styles.btnPrimary}>
                Explore Shopify Connector
                <span className={styles.btnArrow}>→</span>
              </a>
              <a href="https://sdlccorp.com/contact-us/" className={styles.btnSecondary}>
                Schedule Demo
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Active Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>Solutions</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Our Solutions</span>
              <h2>Comprehensive Integration Solutions</h2>
              <p>Choose from our suite of enterprise-grade connectors and management tools</p>
            </div>

            {/* Product Grid */}
            <div className={styles.productGrid}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`${styles.productCard} ${selectedProduct.id === product.id ? styles.active : ''} ${hoveredProductId === product.id ? styles.hovered : ''}`}
                  onClick={() => setSelectedProduct(product)}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div className={styles.cardBadge} style={{ backgroundColor: product.statusColor }}>
                    {product.status}
                  </div>
                  <div className={styles.cardIcon}>{product.icon}</div>
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <p className={styles.cardDescription}>{product.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.badge}>{product.badge}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Product Details */}
            <div className={styles.selectedProduct}>
              <div className={styles.selectedProductHeader}>
                <div className={styles.selectedProductIcon}>
                  {selectedProduct.icon}
                </div>
                <div className={styles.selectedProductInfo}>
                  <h2>{selectedProduct.name}</h2>
                  <p>{selectedProduct.description}</p>
                  <div className={styles.selectedProductMeta}>
                    <span 
                      className={styles.status}
                      style={{ backgroundColor: selectedProduct.statusColor }}
                    >
                      {selectedProduct.status}
                    </span>
                    <span className={styles.badge2}>{selectedProduct.badge}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className={styles.featuresContainer}>
                <h3>Key Features</h3>
                <div className={styles.featuresList}>
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.featureCheck}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={styles.selectedProductCta}>
                {selectedProduct.status === 'Live' && (
                  <>
                    <Link
                      to={selectedProduct.link}
                      className={styles.ctaPrimary}
                    >
                      View Full Documentation
                    </Link>
                    <a
                      href="https://apps.odoo.com"
                      className={styles.ctaSecondary}
                    >
                      Install from Odoo Store
                    </a>
                  </>
                )}
                {selectedProduct.status === 'Coming Soon' && (
                  <>
                    <div className={styles.comingSoon}>
                      <p>🚀 This solution is coming soon</p>
                      <span>Expected: {selectedProduct.badge}</span>
                    </div>
                    <a
                      href="https://sdlccorp.com/contact-us/"
                      className={styles.ctaNotify}
                    >
                      Get Notified
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChooseUs}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why SDLC Corp</span>
              <h2>Why Choose SDLC Corp</h2>
              <p>Enterprise-grade solutions trusted by leading organizations worldwide</p>
            </div>

            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🛡️</div>
                <h4>Enterprise Security</h4>
                <p>Bank-level encryption, compliance certifications, and regular security audits</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>⚡</div>
                <h4>Real-time Synchronization</h4>
                <p>Instant data sync with webhook-based triggers and automated workflows</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🎯</div>
                <h4>Expert Implementation</h4>
                <p>Dedicated technical team guides you through setup and optimization</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>📊</div>
                <h4>Advanced Analytics</h4>
                <p>Comprehensive dashboards and reports for data-driven decisions</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🚀</div>
                <h4>Scalable Infrastructure</h4>
                <p>Grows with your business from startup to enterprise scale</p>
              </div>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon}>🤝</div>
                <h4>24/7 Support</h4>
                <p>Dedicated support team available round the clock for assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <h3>Eliminate Manual Data Entry</h3>
                <p>Automate data flow between systems and reduce human error</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>Improve Operational Efficiency</h3>
                <p>Streamline workflows and save hours of manual work daily</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>Better Business Insights</h3>
                <p>Unified data across platforms enables smarter decision-making</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>Faster Time to Market</h3>
                <p>Quick deployment means you start seeing ROI immediately</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Business?</h2>
              <p>Start your integration journey today and unlock new possibilities</p>
              <div className={styles.ctaButtons}>
                <a href="https://sdlccorp.com/contact-us/" className={styles.btnCtaPrimary}>
                  Schedule Free Consultation
                </a>
                <a href="/docs/docs/intro" className={styles.btnCtaSecondary}>
                  Explore Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}