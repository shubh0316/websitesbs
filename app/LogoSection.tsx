import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const imageUrls = [
  "logo1.png",
  "logo2.png",
    "logo4.png",
    "logo5.svg",
    "logo6.png",
    "logo7.png",
    "logo8.jpeg",
    "logo9.png",
    "logo10.jpeg",
    "logo11.jpeg",
    "logo12.jpeg",
    "logo13.jpeg",
    "logo14.jpeg",
    "logo15.jpeg",
    "logo16.jpeg",
    "logo17.jpeg",
    "logo18.jpeg", 
].map((url) => ({ url }));

const MarqueeSection = () => {
  return (
    <div className="sm:overflow-hidden ">
        <div className="text-center font-sans font-bold p-4 text-4xl">
         Our Partners
      </div>
      <div className="mt-4 items-center">
        <div className="bg-slate-300 p-3 md:p-10 mt-10 max-w-sm rounded-xl md:max-w-7xl mx-auto overflow-x-hidden">
          <div className="marquee-container overflow-x-hidden whitespace-nowrap">
            <Marquee speed={300} pauseOnHover={true} autoFill={true}>
              {imageUrls.map((value, index) => (
                <div key={index} className="flex items-center px-8 gap-2">
                   <Image
          key={index}
          src={value.url}
          alt={`Image ${index + 1}`}
          className="w-fit h-40 object-cover"
        />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
