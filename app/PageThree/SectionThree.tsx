import React from "react";

const SectionThree = () => {
  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex flex-col text-center gap-y-5 py-10">
          <div className="text-2xl font-bold">WHAT WE DO?</div>
          <div className="text-lG font-normal leading-tight">
            We are providing following best services.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-10 md:ml-40 gap-8">
  <div className="transition duration-500 ease-in-out hover:scale-110 p-4">
    <div className="flex flex-col space-y-6 bg-white rounded-2xl p-8">
      <div className="text-2xl font-semibold text-start">Small Business</div>
      <div className="text-md font-normal text-start">Basic e-commerce Package</div>
      <div className="text-2xl font-normal text-start">$999.999</div>
      <div className="w-full md:w-80 border border-blue-500 bg-white mt-8 md:mt-12 text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
        View Package
      </div>
    </div>
  </div>
          <div className=" transition duration-500 ease-in-out items-center hover:scale-110 p-2">
            <span className="bg-orange-500 text-white p-2 text-center px-20 md:px-[10rem] rounded-t-2xl">Most Popular</span>
  <div className="flex flex-col space-y-6 bg-white  rounded-2xl p-4">
    <div className="text-2xl font-semibold text-start">Small Business</div>
    <div className="text-md font-normal text-start">Basic e-commerce Package</div>
    <div className="text-2xl font-normal text-start">$999.999</div>
    <div className="flex items-start justify-start">
  <div className="w-full md:w-80 border border-blue-500 bg-white mt-4 text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
    View Package
  </div>
    </div>
  </div>
</div>
          <div className=" transition duration-500 ease-in-out hover:scale-110 p-4">
            <div className="flex flex-col space-y-6 bg-white rounded-2xl p-8">
              <div className="text-2xl font-semibold text-start">Small Business</div>
              <div className="text-md font-normal text-start">Basic e-commerce Package</div>
              <div className="text-2xl font-normal text-start">$999.999</div>
              <div className="w-full md:w-80 border border-blue-500 bg-white mt-8 md:mt-12 py-2 text-center text-blue-500  transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
                View Package
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
