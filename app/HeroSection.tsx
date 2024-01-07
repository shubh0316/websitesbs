import image1 from "@/assets/Rectangle 4464.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
     <div className="flex md:flex-row flex-col">
        <div className="flex flex-row space-y-4 pt-10 pl-5">
             <div className="">
                   <h3 className="text-orange-600 font-bold text-lg pb-4">DIGITAL AGENCY -</h3>
                   <h3 className="text-4xl leading-tight font-bold md:w-1/2 pb-4">An agency for all your business needs.</h3>
                   <h3 className="text-md text-slate-700 md:w-1/2">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</h3>
                   <div className="py-4">  
                   <Button className="bg-blue-600 rounded-full px-5 py-2.5">Get a Quote</Button>
                   </div>
             </div>
        </div>
        <div className="mt-20">
            <Image src={image1} alt="hero"  /> 
        </div>
     </div>
    
  );
};

export default HeroSection;