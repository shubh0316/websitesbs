"use client"
import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import { useRouter } from 'next/router';

function page() {

 
  return (
    <>     
     <div>
      <SectionOne />
       <SectionTwo /> 
       <SectionThree />
    </div>
    </>

  )
}

export default page
