import React from "react";

const SectionThree = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center py-10 h-full">
      <div className="text-2xl font-bold mb-3">OUR PACKAGES</div>
       
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-xl justify-center">
       
        <div className="flex flex-col items-center transition duration-500 ease-in-out hover:scale-110 p-4 max-w-md">
          <div className="flex flex-col space-y-6 bg-white rounded-2xl p-8">
            <div className="text-2xl font-semibold text-start">Small Business</div>
            <div className="text-md font-normal text-start">Basic e-commerce Package</div>
            <div className="text-2xl font-normal text-start">$1599</div>
            <div className="w-full border border-blue-500 bg-white mt-8 text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
              Get a Qoute
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center transition duration-500 ease-in-out hover:scale-110 p-4 max-w-md">
          <span className="bg-orange-500 text-white p-2 text-center w-full rounded-t-2xl">
            Most Popular
          </span>
          <div className="flex flex-col space-y-6 bg-white rounded-2xl p-4 w-full">
            <div className="text-2xl font-semibold text-start">Mid-size Business</div>
            <div className="text-md font-normal text-start">Pro e-Commerce Package</div>
            <div className="text-2xl font-normal text-start">$3999</div>
            <div className="w-full border border-blue-500 bg-white mt-4 text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
              Get a Qoute
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center transition duration-500 ease-in-out hover:scale-110 p-4 max-w-md">
          <div className="flex flex-col space-y-6 bg-white rounded-2xl p-8">
            <div className="text-2xl font-semibold text-start">Large Business</div>
            <div className="text-md font-normal text-start">B2B e-commerce Package</div>
            <div className="text-2xl font-normal text-start">$5999</div>
            <div className="w-full border border-blue-500 bg-white mt-8 text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
              Get a Qoute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
