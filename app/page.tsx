import Image from 'next/image'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import WhatWeDoSection from './WhatWeDoSection'
import WebsitePackagesSection from './WebsitePackagesSection'
import HaveAnyQuestionSection from './HaveAnyQuestionSection'
import MarqueeSection from './MarqueeSection'
import GetQoute from './Qoute/GetQoute'
import StatsSection from './StatsSection'
import FlagSection from './FlagSection'


export default function Home() {
  return (
     <>
         <HeroSection /> 
          <MarqueeSection /> 
          <AboutSection /> 
          <StatsSection />
          
          <WhatWeDoSection /> 
          <WebsitePackagesSection /> 
          <HaveAnyQuestionSection /> 
          
     </>
  )
}
