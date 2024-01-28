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
    <div>
    <div className="grid grid-cols-2 md:gap-8  gap-6 p-10 ">
    <div className="grid md:col-span-1 col-span-2">
          <div className="flex flex-col gap-4 font-sans md:mt-20">
              <div className="font-bold text-3xl">Consultant for all your business needs.</div>
              <span className="text-xl text-slate-700 font-normal">
              MLM Consultant Asia is a leading India-based software company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provides a variety of software services, including Software Development, Web Development, Web Designing, MLM Software, and website hosting services, among others. We have served our clients with comprehensive web solutions – from strategic planning and online marketing decisions to the actual designing, development, and implementation, including testing of the projects. Our support team is always available for the maintenance and enhancement of the project.
              </span>    
              <div className="py-4 md:mt-8">  
                   <Link href="/Qoute"  className="bg-blue-600 text-white rounded-full px-5 py-3 text-lg">Get a Quote</Link>
              </div>           
          </div>
         </div> 
    <div className="md:col-span-1 md:mt-20 col-span-2  md:rounded-xl object-cover">
                <Image src={hero} alt="" className='md:h-[80%] lg:w-[100%] object-cover rounded-xl' /> 
            </div>
           
    </div>

</div>
  );
};

export default HeroSection;
