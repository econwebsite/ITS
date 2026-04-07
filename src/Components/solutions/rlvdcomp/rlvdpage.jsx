import './rlvdpage.css';
import RLVDBanner from './bannercomp/rlvdbanner';
import RLVDOverview from './overviewcomp/rlvdoverview';
import RLVDHowItWorks from './howitworkscomp/rlvdhowitworks';
import RLVDDeployment from './deploymentcomp/rlvddeployment';
import RLVDEdgeAI from './edgeaicomp/rlvdedgeai';
import RLVDOutcomes from './outcomescomp/rlvdoutcomes';
import RLVDCta from './ctacomp/rlvdcta';

const RLVDPage = () => {
  return (
    <div className="rlvd-page">
      <RLVDBanner />
      <RLVDOverview />
      <RLVDHowItWorks />
      <RLVDDeployment />
      <RLVDEdgeAI />
      <RLVDOutcomes />
      <RLVDCta />
    </div>
  );
};

export default RLVDPage;