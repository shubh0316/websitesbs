import React from 'react'
import DataSection from './DataSection'
import ExtraFeature from './ExtraFeature'
import BackOfficeSection from './BackOfficeSection'
import OnlineDemoSection from './OnlineDemoSection'

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">  
      <DataSection />
      <ExtraFeature />
      <BackOfficeSection />
      <OnlineDemoSection />
     
      </div>
    </div>
  )
}

export default page
