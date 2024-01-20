// OnlineDemoSection.tsx
import React from 'react';

const OnlineDemoSection: React.FC = () => {
  return (
    <div id="contact" className="bg-orange-500 p-8">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
      <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">ONLINE FREE DEMO</div>
        <div className="text-sm font-normal leading-tight text-slate-600">
        Fill The Form & Get Free Online Demo Login Details
        </div>
      </div>
        <div className="grid md:grid-cols-4 gap-10">            
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold">Name</h3>
            <div className="rounded-full p-4 shadow-md border-2 border-gray-300 ">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Name"
              />
            </div>
          </div>

        
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold">Email</h3>
            <div className="rounded-full p-4 shadow-md border-2 border-gray-300 ">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Input 3 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold">Phone Number</h3>
            <div className="rounded-full p-4 shadow-md border-2 border-gray-300 ">
              <input
                type="text"
                className="w-full h-full"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Input 4 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2 font-bold">Demo Request For</h3>
            <div className="rounded-full p-4 shadow-md border-2 border-gray-300 ">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="service"
              />
            </div>
          </div>
        </div>

      
        <div className="mt-8 flex items-center md:justify-end">  
          <button className="bg-blue-500 text-white px-20 py-2 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineDemoSection;
