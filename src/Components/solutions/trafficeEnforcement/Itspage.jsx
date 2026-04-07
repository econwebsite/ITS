import './itspage.css';
import ITSBanner from './bannercomp/itsbanner';
import ITSOverview from './overviewcomp/itsoverview';
import ITSSolutions from './solutionscomp/its-solutions';
import ITSUseCases from './usecasescomp/itsusecases';
import ITSBenefits from './benefitscomp/itsbenefits';
import ITSCta from './ctacomp/itscta';

const ITSPage = () => {
  return (
    <div className="its-page">
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