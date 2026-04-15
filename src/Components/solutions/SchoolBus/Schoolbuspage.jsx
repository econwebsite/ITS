import './Schoolbusglobals.css';
import SchoolBusBanner from './SchoolBusbanner';
import SchoolBusHero from './Schoolbushero';
import SchoolBusHowItWorks from './SchoolBusHowItWorks';
import SchoolBusCameras from './Schoolbuscameras';
import SchoolBusEdgeAI from './Schoolbusedgeai';
import SchoolBusIntegration from './Schoolbusintegration';

const SchoolBusPage = () => {
  return (
    <main>
      <SchoolBusBanner />
      <SchoolBusHero />
      <SchoolBusHowItWorks />
      <SchoolBusCameras />
      <SchoolBusEdgeAI />
      <SchoolBusIntegration />
    </main>
  );
};

export default SchoolBusPage;