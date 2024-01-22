"use client";
import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const backgroundStyle = {
    background: "linear-gradient(91.58deg, #101624 0%, #010203 100%)",
  };

  return (
    <>
    <div style={backgroundStyle}>  
      <div className="text-center text-white font-sans font-bold mt-6  p-14 text-4xl leading-tight tracking-wider">
        Award Winning MLM Consultant
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 p-10 md:px-20 md:py-10  text-white " >
        {/* First Stat */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col items-center">
            <CountUp
              start={0}
              end={50}
              duration={2}
              className="text-5xl font-semibold"
              enableScrollSpy={true}
              suffix="+"
            />
            <p className="text-2xl mt-2">Companies consulted</p>
          </div>
        </div>

        {/* Second Stat */}
        <div className="col-span-1 md:col-span-1 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <CountUp
              start={0}
              end={7}
              duration={2}
              className="text-5xl font-semibold"
              enableScrollSpy={true}
              suffix="+"
            />
            <p className="text-2xl mt-2">Global Office</p>
          </div>
        </div>

        {/* Third Stat */}
        <div className="col-span-1 md:col-span-1 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <CountUp
              start={0}
              end={16}
              duration={2}
              className="text-5xl font-semibold"
              enableScrollSpy={true}
              suffix="+"
            />
            <p className="text-2xl mt-2">Years of experience</p>
          </div>
        </div>

        {/* Fourth Stat */}
        <div className="col-span-1 md:col-span-1 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <CountUp
              start={0}
              end={36}
              duration={2}
              className="text-5xl font-semibold"
              enableScrollSpy={true}
              suffix="+"
            />
            <p className="text-2xl mt-2">Products Registered</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default StatsSection;
