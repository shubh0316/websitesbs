"use client"
import image1 from "@/assets/Rectangle 4464.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "./container";
import { useRouter } from "next/navigation";
import GetQoute from "./Qoute/GetQoute";
import Link from "next/link";


const HeroSection = () => {
 
  return (
    <div className="overflow-x-auto">  
     <div className="flex md:flex-row flex-col ">
        <div className="flex flex-row space-y-4  ">
       
             <div className="md:py-40 md:p-10 max-w-4xl">
                   <h3 className="p-2 text-orange-600 font-bold text-lg pb-4  ">DIGITAL AGENCY -</h3>
                   <h3 className="p-2 text-4xl leading-tight font-bold md:w-full pb-4">An agency for all your business needs.</h3>
                   <h3 className="p-2 text-md text-slate-700">MLM Consultant Asia is a leading India based Software Company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provide variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.</h3>
                   <div className="py-4">  
                   <Link href="/Qoute"  className="bg-blue-600 text-white rounded-full px-5 py-2.5">Get a Quote</Link>
                   </div>
             </div>
            
        </div>
        <div className="mt-20">
            <Image src={image1} alt="hero"  /> 
        </div>
     </div>
     </div>
     
    
  );
};

export default HeroSection;