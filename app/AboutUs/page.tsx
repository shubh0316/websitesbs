import Image from 'next/image'
import HeroSection from './HeroSection'
import Container from '../container'
import AboutSection from './AboutSection'
import WhatWeDoSection from './WhatWeDoSection'
import WebsitePackagesSection from './WebsitePackagesSection'
import HaveAnyQuestionSection from './HaveAnyQuestionSection'


export default function Home() {
  return (
     <>
         <HeroSection />
         <AboutSection />
         <WhatWeDoSection />
         <WebsitePackagesSection />
         <HaveAnyQuestionSection />
     </>
  )
}
