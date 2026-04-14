import './schoolbusglobals.css';
import SchoolBusHero from './Schoolbushero';
import SchoolBusHowItWorks from './SchoolBusHowItWorks';
import SchoolBusCameras from './Schoolbuscameras';
import SchoolBusEdgeAI from './Schoolbusedgeai';
import SchoolBusIntegration from './Schoolbusintegration';

const SchoolBusPage = () => {
  return (
    <main>
      <SchoolBusHero />
      <SchoolBusHowItWorks />
      <SchoolBusCameras />
      <SchoolBusEdgeAI />
      <SchoolBusIntegration />
    </main>
  );
};

export default SchoolBusPage;