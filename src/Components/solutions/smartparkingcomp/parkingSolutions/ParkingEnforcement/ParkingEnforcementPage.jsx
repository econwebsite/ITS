import React from 'react'
import ParkingEnforcementOverview from './overviewcomp/ParkingEnforcementOverview'
import EnforcementGaps from './gapscomp/EnforcementGaps'
import ViolationTypes from './violationcomp/ViolationTypes'
import ParkingEnforcementHowItWorks from './howitworkscomp/ParkingEnforcementHowItWorks'
import WhyChooseEnforcement from './whychoosecomp/WhyChooseEnforcement'
import EnforcementReference from './referencecomp/EnforcementReference'

function ParkingEnforcementPage() {
  return (
   <div>

     <ParkingEnforcementOverview />

    <EnforcementGaps/>

    <ViolationTypes/>

    <ParkingEnforcementHowItWorks/>

    <WhyChooseEnforcement/>

    <EnforcementReference/>
   </div>

  )
}

export default ParkingEnforcementPage