import './rlvdpage.css';
import { Helmet } from 'react-helmet-async';
import RLVDBanner from './bannercomp/rlvdbanner';
import RLVDOverview from './overviewcomp/rlvdoverview';
import RLVDCameras from './detectioncomp/RLVDCameras';
import RLVDHowItWorks from './howitworkscomp/rlvdhowitworks';
import RLVDDeployment from './deploymentcomp/rlvddeployment';
import RLVDEdgeAI from './edgeaicomp/rlvdedgeai';
import RLVDOutcomes from './outcomescomp/rlvdoutcomes';
import RLVDCta from './ctacomp/rlvdcta';
import RLVDVideoShowcase from './videoshowcomp/RLVDVideoShowcase';

const RLVDPage = () => {
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
        name: 'Red Light Violation Detection Camera',
        item: `${siteUrl}/solutions/red-light-violation-detection-camera`,
      },
    ],
  };

  return (
    <div className="rlvd-page">
      <Helmet>
        <title>Red Light Violation Detection (RLVD) Cameras</title>
        <meta name='description' content='AI-powered vision-based red light violation detection (RLVD) cameras for automated enforcement, evidence capture, and vehicle identification at intersections.' />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <RLVDBanner />
      <RLVDOverview />
      <RLVDCameras />
      <RLVDHowItWorks />
      <RLVDDeployment />
      <RLVDEdgeAI />
      <RLVDOutcomes />
      {/* <RLVDVideoShowcase /> */}
      <RLVDCta />
    </div>
  );
};

export default RLVDPage;