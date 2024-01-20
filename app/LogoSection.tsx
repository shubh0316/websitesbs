import React from "react";
import Image from "next/image";

const imageUrls = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo69.png",
  "/logo10.png",
  "/logo11.png",
  "/logo12.png",
  "/logo13.png",
  "/logo14.png",
  "/logo15.png",
  "/logo16.png",
  "/logo17.png",
  "/logo18.png", 
  "/logo19.png",
  "/logo20.png",
  "/logo21.png",
  "/logo22.png",
  "/logo23.png",
  "/logo24.png",
  "/logo25.png",
  "/logo26.png"
].map((url) => ({ url }));

const LogoSection = () => {
  return (
    <div className="sm:overflow-hidden" style={{ background: "linear-gradient(91.58deg, #101624 0%, #010203 100%)" }}>
      <div className="text-center font-sans font-bold p-4 text-4xl text-white">
        PARTNERS AND TECHNOLOGY
      </div>
      <div className="flex flex-wrap justify-center md:p-10">
        {imageUrls.map((logo, index) => (
          <div key={index} className="m-4">
            <Image src={logo.url} alt={`Logo ${index + 1}`} width={140} height={180} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
