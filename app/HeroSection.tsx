"use client"
import image1 from "@/assets/Rectangle 4464.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "./container";
import { useRouter } from "next/navigation";
import GetQoute from "./Qoute/GetQoute";
import Link from "next/link";
import hero from "@/assets/hero.png";


const HeroSection = () => {
 
  return (
    <div className="overflow-x-auto">  
     <div className="flex md:flex-row flex-col py-10 md:space-y-4 md:space-x-20">
        <div className="flex flex-row space-y-20  ">
       
             <div className="md:py-40 p-4 md:p-10 max-w-4xl">
                   <h3 className="p-2 text-4xl leading-tight font-bold md:w-full pb-4">Consultant for all your business needs.</h3>
                   <h3 className="p-2 text-md text-slate-700">MLM Consultant Asia is a leading India-based software company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provides a variety of software services, including Software Development, Web Development, Web Designing, MLM Software, and website hosting services, among others. We have served our clients with comprehensive web solutions – from strategic planning and online marketing decisions to the actual designing, development, and implementation, including testing of the projects. Our support team is always available for the maintenance and enhancement of the project.</h3>
                   <div className="py-4 md:mt-8">  
                   <Link href="/Qoute"  className="bg-blue-600 text-white rounded-full px-6 py-3.5 text-xl">Get a Quote</Link>
                   </div>
             </div>
            
        </div>
        <div className="mt-20">
            <Image src={hero} alt="hero" className="w-fit mx-auto"  /> 
        </div>
     </div>
     </div>
  );
};

export default HeroSection;
