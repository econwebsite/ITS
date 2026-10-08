import './itspage.css';
import { Helmet } from 'react-helmet-async';
import ITSBanner from './bannercomp/itsbanner';
import ITSOverview from './overviewcomp/itsoverview';
import ITSSolutions from './solutionscomp/its-solutions';
import ITSUseCases from './usecasescomp/itsusecases';
import ITSBenefits from './benefitscomp/itsbenefits';
import ITSCta from './ctacomp/itscta';

const ITSPage = () => {
  const siteUrl = typeof window !== 'undefined'
    ? window.location.origin.replace(/\/$/, '')
    : 'https://its.e-consystems.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solutions',
        item: `${siteUrl}/solutions/traffic-enforcement-camera`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Traffic Enforcement Camera',
        item: `${siteUrl}/solutions/traffic-enforcement-camera`,
      },
    ],
  };

  return (
    <div className="its-page">
      <Helmet>
        <title>AI-Powered ANPR Traffic Enforcement Cameras</title>
        <meta name='description' content='AI-powered ANPR traffic enforcement cameras for speed detection, red-light enforcement, stop-sign monitoring, and lane violation detection for smart cities.' />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <ITSBanner />
      <ITSOverview />
      <ITSSolutions />
      <ITSUseCases />
      <ITSBenefits />
      <ITSCta />
    </div>
  );
};

export default ITSPage;