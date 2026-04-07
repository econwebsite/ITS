import './sbsapage.css';
import SBSABanner from './bannercomp/sbsabanner';
import SBSAOverview from './overviewcomp/sbsaoverview';
import SBSAHowItWorks from './howitworkscomp/sbsahowitworks';
import SBSACameras from './camerascomp/sbsacameras';
import SBSAEdgeAI from './edgeaicomp/sbsaedgeai';
import SBSAIntegration from './integrationcomp/sbsaintegration';
import SBSAOutcomes from './outcomescomp/sbsaoutcomes';
import SBSACta from './ctacomp/sbsacta';

const SBSAPage = () => {
  return (
    <div className="sbsa-page">
      <SBSABanner />
      <SBSAOverview />
      <SBSAHowItWorks />
      <SBSACameras />
      <SBSAEdgeAI />
      <SBSAIntegration />
      <SBSAOutcomes />
      <SBSACta />
    </div>
  );
};

export default SBSAPage;