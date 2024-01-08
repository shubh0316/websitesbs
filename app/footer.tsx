
import { Icons } from "@/components/Icons";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/MLMLogo.png";
import call from "@/assets/svg/Phone.svg";
import { FC } from "react";
import whatsapp from "@/assets/svg/Whatsapp.svg";

const Footer: FC = () => {

const company = [
    "About Us",
    "Why Choose us?",
    "Our Mission",
    "Technology",
    "Our Clients",
    "Terms & condition",
    "Privacy Policy",
    "Disclaimer"
];  
const Services = [
  "Best Website Package",
  "Software Development",
  "Starter Website Package",
  "Basic Website Package",
  "Business Website Package",
  "Ultimate Website Package",
  "Website Maintenance",
  "Binary Plan Calc"
]; 
const DigitalMarketing = [
    "Search Engine Optimization",
    "Social Media Optimization",
    "Directory Listing",
    "Online Classified Ad",
    "e-Commerce Web Portal",
    "Real Estate Web Portal"
]; 
const MLMSoftware = [
    "MLM Binary Plan",
    "MLM Board Plan",
    "MLM Matrix Plan",
    "MLM Unilevel Plan",
    "MLM Generation Plan",
    "MLM MonoLine Plan",
    "MLM Investment Plan",
    "Crowd Funding Plan"
]; 
 
  return (
    <footer>
      <div className="text-black bg-white from-primary ">
       <div className="">
         <Image src={logo} alt= "" className="p-10 w-[30rem]" />
       </div>
       <div className="grid md:grid-cols-5 gap-10 space-y-8 px-10">
       <div className="col-span-1">
         <div className="flex flex-col space-y-4 md:py-8">
          <div className="text-lg font-bold">
            Company
          </div>
         {company.map((company, index) => (
          <div key={index} className="text-left font-normal text-sm">
            {company}
            </div>
         ))}
         </div>
       </div>
       <div className="col-span-1">
         <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold">
            Services
          </div>
         {Services.map((services, index) => (
          <div key={index} className="text-left font-normal text-sm">
            {services}
            </div>
         ))}
         </div>
       </div>
       <div className="col-span-1">
         <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold">
            Digital Marketing
          </div>
         {DigitalMarketing.map((marketing, index) => (
          <div key={index} className="text-left font-normal text-sm">
            {marketing}
            </div>
         ))}
         </div>
       </div>
       <div className="col-span-1">
         <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold">
            MLM Software
          </div>
         {MLMSoftware.map((software, index) => (
          <div key={index} className="text-left font-normal text-sm">
            {software}
            </div>
         ))}
         </div>
       </div>
       <div className="col-span-1">
  <div className="flex flex-col space-y-4">
    <div className="text-lg font-bold">
      Contact
    </div>
    <div className="flex flex-row space-x-4">
      <Image src={call} alt= "" />
   <div className="text-left font-normal text-sm">
      +91 99999999
   </div>
   </div>
   <div className="flex flex-row space-x-4">
      <Image src={whatsapp} alt= "" />
   <div className="text-left font-normal text-sm">
      +91 99999999
   </div>
   </div>
   
  </div>
</div>

       </div>
       <div className="text-center text-slate-700 p-10">@ 2019 MLM Consultant Asia | All rights reserved </div>
      </div>
    </footer>
  );
};

export default Footer;