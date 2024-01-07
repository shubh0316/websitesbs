import Image from 'next/image'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import WhatWeDoSection from './WhatWeDoSection'
import WebsitePackagesSection from './WebsitePackagesSection'
import HaveAnyQuestionSection from './HaveAnyQuestionSection'
import MarqueeSection from './MarqueeSection'


export default function Home() {
  return (
     <>
         <HeroSection />
         <MarqueeSection />
         <AboutSection />
         <WhatWeDoSection />
         <WebsitePackagesSection />
         <HaveAnyQuestionSection />
     </>
  )
}
