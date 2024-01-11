
import { Icons } from "@/components/Icons";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/MLMLogo.png";
import call from "@/assets/svg/Phone.svg";
import logo1 from "@/assets/icon1footer.png";
import { FC } from "react";
import whatsapp from "@/assets/svg/Whatsapp.svg";

const Footer: FC = () => {

 
  return (
    <footer>
      <div className="text-black bg-white from-primary ">
       <div className="">
         <Image src={logo} alt= "" className="p-10 w-[30rem]" />
       </div>
       <div className="grid md:grid-cols-4 gap-12 space-y-8 px-10">
       <div className="col-span-1">
         <div className="flex flex-col space-y-4 md:py-8">
          <div className="text-lg font-bold">
            Drop Your Email Here
          </div>
          <div className="flex items-center space-x-4">
      <input
        type="email"
        className="border border-gray-300 text-xs rounded-full px-4 py-2 w-full"
        placeholder="Enter your email address"
      />
      <button className="bg-blue-500 text-white text-md px-4 py-2 rounded-full hover:bg-blue-600">
        Submit 
      </button>
    </div>
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
       <div className="col-span-1">
         <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold">
            Address
          </div>
         <div className="text-md space-y-2  text-start">
               asdasfsdf sdfsdf sdfsdf sdfsdfsd fsdfsd fsdfsdfsd
         </div>
         </div>
       </div>
       <div className="col-span-1">
         <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold">
            Partners
          </div>        
         </div>
         <div className="flex  space-x-4">  
         <Image src={logo1} alt="" width={96} />
         <Image src={logo1} alt="" width={96} />
         </div>
       </div>


       </div>
       <div className="text-center text-slate-700 p-10">@ 2019 MLM Consultant Asia | All rights reserved </div>
      </div>
    </footer>
  );
};

export default Footer;