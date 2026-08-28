import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  Download,
  BookOpen,
  Store,
  BrainCircuit,
  ShieldCheck,
  Zap,
  Database,
  Monitor,
  ExternalLink,
  FileText,
} from 'lucide-react';
import styles from './index.module.css';
import { PARTNER_DATA } from '../data/ecosystem';
import clsx from 'clsx';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  openInNewTab?: boolean;
}

function Feature({title, description, icon, link, className, openInNewTab}: FeatureItem) {
  const isExternal = link.startsWith('http') || openInNewTab;
  return (
    <Link 
      to={link} 
      className={clsx(styles.featureCard, className)}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ display: 'block', height: '100%', color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}
    >
      {icon}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const appVersion = (siteConfig.customFields?.appVersion as string) || '1.0.0';

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
        }
      });
    }, observerOptions);

    // Observe all elements with fadeInUp class
    const animatedElements = document.querySelectorAll(`.${styles.fadeInUp}`);
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          {/* Technical Grid Background */}
          <div className={styles.heroGrid} aria-hidden="true" />
          
          <div className={styles.heroContent}>
            {/* Logo Placeholder */}
            <div
              className={`${styles.logoPlaceholder} ${styles.fadeInUp} ${styles.pulseSubtle}`}
              aria-label="Gen Image Factory Logo"
            >
              GIF
            </div>

            {/* Main Heading */}
            <h1 
              className={`${styles.heroTitle} ${styles.fadeInUp} ${styles.delay1}`}
              style={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(to bottom, #ffffff 20%, #a3a3a3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Gen Image Factory
            </h1>

            {/* Version Badge - Under Heading */}
            <div className={`${styles.versionBadge} ${styles.fadeInUp} ${styles.delay1}`}>
              [ {appVersion} ]
            </div>

            {/* Subtitle */}
            <p className={`${styles.heroSubtitle} ${styles.fadeInUp} ${styles.delay2}`}>
              High-volume desktop automation utility designed for Print-on-Demand and microstock creators. Automate your generation, background removal, extra alpha channel removal, metadata tagging and quality control.
            </p>

            {/* Call-to-Action Buttons */}
            <div className={`${styles.ctaButtons} ${styles.fadeInUp} ${styles.delay3}`}>
              <a href="https://github.com/ShiftlineTools/gen-image-factory/releases" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} aria-label="Download Gen Image Factory">
                <Download className={styles.ctaIcon} /> Download
              </a>
              <Link to="/docs/getting-started/installation" className={`${styles.btn} ${styles.btnSecondary}`} aria-label="View Documentation">
                <BookOpen className={styles.ctaIcon} /> Documentation
              </Link>
              <a href="https://apps.microsoft.com/detail/9P761655KPBW" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} aria-label="Get from Microsoft Store">
                <Store className={styles.ctaIcon} /> Microsoft Store
              </a>
            </div>
          </div>
        </section>

        {/* Integrated Platforms/APIs Section - Engine Room */}
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`} style={{marginTop: '4rem'}}>
            Integration Platforms/Apis
          </h2>
        </div>
        <section className={styles.integratedApisSection}>
          <div className={styles.container}>
            <div className={`integration-brand-links ${styles.fadeInUp} ${styles.delay1}`} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: 0}}>
              {PARTNER_DATA.integratedApis.map((api, index) => (
                <a
                  key={index}
                  href={api.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{fontWeight: 900, fontSize: 'clamp(1.5rem, 6vw, 3rem)', color: '#ffffff', textDecoration: 'none', letterSpacing: '-2px', opacity: 0.8, display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', lineHeight: 1.2}}
                >
                  {api.name} <ExternalLink size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className={`integration-helper ${styles.fadeInUp} ${styles.delay2}`} style={{textAlign: 'center', fontSize: '0.875rem', color: '#a3a3a3', marginTop: '1rem', marginBottom: '2rem', fontFamily: 'var(--ifm-font-family-monospace)', padding: '0 1rem'}}>
          *API integrations for professional workflows.
        </div>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
              Powerful Features
            </h2>

            <div className={styles.featuresGrid}>
              {([
                {
                  title: 'Mass Storefront Automation',
                  description: 'Turn simple text lists and keyword CSVs into ready-to-upload files and automated metadata control for Merch by Amazon, Displate and Etsy.',
                  icon: <FileText className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/user-guide/settings#template-configuration',
                  className: `${styles.fadeInUp}`,
                },
                {
                  title: 'High-Volume AI Generation',
                  description: 'Leverage advanced generative models to produce massive batches of commercial-grade digital wall art and vector assets effortlessly.',
                  icon: <BrainCircuit className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/user-guide/settings#required-api-keys',
                  className: `${styles.fadeInUp} ${styles.delay1}`,
                },
                {
                  title: 'Automated Quality Filtering',
                  description: 'Screen out flawed AI generations automatically to guarantee your store listings only feature top-tier, crisp visual assets.',
                  icon: <ShieldCheck className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/user-guide/failed-images-review',
                  className: `${styles.fadeInUp} ${styles.delay2}`,
                },
                {
                  title: 'Bulk Pipeline Execution',
                  description: 'Process hundreds of images in sequence with optimized job queues tailored for rapid e-commerce publishing.',
                  icon: <Zap className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/user-guide/settings#job-configuration',
                  className: `${styles.fadeInUp} ${styles.delay3}`,
                },
                {
                  title: 'Instant SEO Metadata',
                  description: 'Automatically generate buyer-optimized titles, tags, and descriptions to completely eliminate tedious manual data entry.',
                  icon: <Database className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/user-guide/settings#job-configuration',
                  className: `${styles.fadeInUp} ${styles.delay1}`,
                },
                {
                  title: 'Cross-Platform Desktop App',
                  description: 'Native performance for Windows, macOS, and Linux built for power users who demand total control and zero login requirements.',
                  icon: <Monitor className={styles.featureIcon} aria-hidden="true" />,
                  link: '/docs/getting-started/installation',
                  className: `${styles.fadeInUp} ${styles.delay2}`,
                },
              ] as FeatureItem[]).map((feature, index) => (
                <Feature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                  className={feature.className}
                  openInNewTab={feature.openInNewTab}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className={styles.productShowcase}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
              Watch the Masterclass Playlist
            </h2>

            <div className={`${styles.screenshotPlaceholder} ${styles.fadeInUp} ${styles.delay1}`} style={{ padding: 0, overflow: 'hidden', background: 'transparent', boxShadow: 'none' }}>
              <div className="video-container" style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                zIndex: 10,           // This lifts it above hero overlays
                marginBottom: '2rem',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                cursor: 'pointer'      // Shows the user it is clickable
              }}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed?listType=playlist&list=PLMnsuvEr-iQk"
                  title="Gen Image Factory Masterclass Playlist"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'auto' // Ensures clicks reach the video
                  }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Apps Section */}
        <section className={styles.recommendedAppsSection}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.fadeInUp}`}>
              Recommended Apps
            </h2>

            <div className={styles.recommendedApps}>
              {PARTNER_DATA.recommendedApps.map((app) => (
                <div key={app.id} className={`${styles.recommendedAppCard} ${styles.fadeInUp}`}>
                  <h3 className={styles.recommendedAppTitle}>{app.name}</h3>
                  <p className={styles.recommendedAppDescription}>{app.description}</p>
                  <a
                    href={app.link}
                    target="_blank"
                    rel={app.isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
                    className={styles.recommendedAppButton}
                  >
                    LEARN MORE →
                  </a>
                </div>
              ))}
            </div>

            <p className={styles.recommendedAppsDisclosure}>
              *Shiftline Tools recommends software used in our internal pro workflows. If you purchase through these affiliate links, we may earn a commission at no extra cost to you, which helps support the continued development of our tools.
            </p>
          </div>
        </section>

      </main>
    </Layout>
  );
}

