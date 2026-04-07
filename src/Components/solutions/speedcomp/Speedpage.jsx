import './Speedpage.css';
import SpeedBanner from './bannercomp/Speedbanner';
import SpeedOverview from './overviewcomp/Speedoverview';
import SpeedSolutions from './solutionscomp/Speedsolutions';
import SpeedDeployment from './deploymentcomp/Speeddeployment';
import SpeedFeatures from './featurescomp/Speedfeatures';
import SpeedCta from './ctacomp/Speedcta';

const SpeedPage = () => {
  return (
    <div className="speed-page">
      <SpeedBanner />
      <SpeedOverview />
      <SpeedSolutions />
      <SpeedDeployment />
      <SpeedFeatures />
      <SpeedCta />
    </div>
  );
};

export default SpeedPage;