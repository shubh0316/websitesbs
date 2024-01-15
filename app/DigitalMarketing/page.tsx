import React from 'react'
import Description from './Description'
import ComparePackageSection from './ComparePackageSection';
import CallCenter from './CallCenter';

const page = () => {
  return (
    <div>
      <Description />
      <CallCenter />
      <ComparePackageSection />
    </div>
  )
}

export default page;
