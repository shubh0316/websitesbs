import React from "react";
import Image from "next/image";

const FlagSection = () => {

    const imageUrls = ["/CA.jpg",
    "/IN.png",
    "/INDO.jpg",
    "/MA.jpg",
    "/PH.png",
    "/SK.jpg",
    "/SN.jpg",
    "/TH.png",
    "/UAE.jpg",
    "/VT.jpg"].map(
        (url) => ({ url })
    );
    const backgroundStyle = {
        background: "linear-gradient(91.58deg, #101624 0%, #010203 100%)",
      };

 
  return (
    <div className="flex justify-center" style={backgroundStyle}>
      {imageUrls.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl.url}
          alt={`Image ${index + 1}`}
          width={20}
          height={40}
          className="w-5 h-5 rounded-full m-2"
        />
      ))}
    </div>
  );
};

export default FlagSection;
