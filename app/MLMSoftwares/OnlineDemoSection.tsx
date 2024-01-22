// OnlineDemoSection.tsx
import React from 'react';

const OnlineDemoSection: React.FC = () => {
  return (
    <div id="contact" className="bg-orange-500 p-8">
      <div className="max-w-6xl mx-auto bg-slate-100 p-10 rounded-2xl shadow-lg">
      <div className="flex flex-col text-center gap-y-5 py-5">
        <div className="text-2xl font-bold">ONLINE FREE DEMO</div>
        <div className="text-sm font-normal leading-tight text-slate-600">
        Fill The Form & Get Free Online Demo Login Details
        </div>
      </div>
        <div className="grid md:grid-cols-4 gap-10">            
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold text-center">Name</h3>
            <div className=" p-4 shadow-md border-2 border-gray-300 bg-white">
              <input
                type="text"
                className="w-full h-full outline-none text-center"
                placeholder="Name"
              />
            </div>
          </div>

        
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold text-center">Email</h3>
            <div className=" p-4 shadow-md border-2 border-gray-300 bg-white">
              <input
                type="text"
                className="w-full h-full outline-none text-center"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Input 3 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold text-center">Phone Number</h3>
            <div className=" p-4 shadow-md border-2 border-gray-300 bg-white">
              <input
                type="text"
                className="w-full h-full outline-none text-center"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Input 4 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold text-center">Demo Request For</h3>
            <div className=" p-4 shadow-md border-2 border-gray-300 bg-white">
              <input
                type="text"
                className="w-full h-full outline-none text-center"
                placeholder="request"
              />
            </div>
          </div>
        </div>

      
        <div className="mt-8 flex items-center md:justify-end">  
          <button className="bg-blue-500 text-white px-20 py-2 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineDemoSection;
