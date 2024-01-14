import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const data = [
  "Web development",
  "Software Services",
  "MLM Company Setup",
  "FDA Approvals",
  "Import & Export",
  "Party Plan",
  "Uni Level Plan",
  "Binary Plan",
  "ROI Plan",
  "Matrix Plan",
  "Digital Marketing"
];

const MarqueeSection = () => {
  return (
    <div className="sm:overflow-hidden ">
      <div className="mt-4 items-center">
        <div className="bg-white p-3 md:p-10 mt-20 max-w-sm rounded-xl md:max-w-7xl mx-auto overflow-x-hidden">
          <div className="marquee-container overflow-x-hidden whitespace-nowrap">
            <Marquee speed={100} pauseOnHover={true} autoFill={true}>
              {data.map((value, index) => (
                <div key={index} className="flex items-center px-8 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10">
                    <circle cx="5" cy="5" r="5" fill="orange" />
                  </svg>
                  <div>
                    <h4>{value}</h4>
                  </div>
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
