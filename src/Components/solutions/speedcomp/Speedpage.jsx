import './Speedpage.css';
import { Helmet } from 'react-helmet-async';
import SpeedBanner from './bannercomp/Speedbanner';
import SpeedOverview from './overviewcomp/Speedoverview';
import SpeedSolutions from './solutionscomp/Speedsolutions';
import SpeedDeployment from './deploymentcomp/Speeddeployment';
import SpeedFeatures from './featurescomp/Speedfeatures';
import SpeedCta from './ctacomp/Speedcta';

const SpeedPage = () => {
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
        name: 'Speed Enforcement Camera',
        item: `${siteUrl}/solutions/speed-enforcement-camera`,
      },
    ],
  };

  return (
    <div className="speed-page">
      <Helmet>
        <title>High-Speed ANPR Cameras for Traffic Speed Enforcement</title>
        <meta name='description' content='High-performance ANPR speed enforcement cameras for accurate vehicle speed detection, evidence capture, and intelligent traffic enforcement in smart cities.' />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <SpeedBanner />
      <SpeedSolutions />
      <SpeedDeployment />
      <SpeedFeatures />
      <SpeedCta />
    </div>
  );
};

export default SpeedPage;