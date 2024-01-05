// OnlineDemoSection.tsx
import React from 'react';

const OnlineDemoSection: React.FC = () => {
  return (
    <div className="bg-orange-500 p-8">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">EXTRA FEATURES</div>
        <div className="text-sm font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
        <div className="grid md:grid-cols-4 gap-10">
            
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2">Heading 1</h3>
            <div className="rounded-full p-4 shadow-md">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Placeholder 1"
              />
            </div>
          </div>

          {/* Input 2 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2">Heading 2</h3>
            <div className="rounded-full p-4 shadow-md">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Placeholder 2"
              />
            </div>
          </div>

          {/* Input 3 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2">Heading 3</h3>
            <div className="rounded-full p-4 shadow-md">
              <input
                type="text"
                className="w-full h-full"
                placeholder="Placeholder 3"
              />
            </div>
          </div>

          {/* Input 4 */}
          <div className="col-span-1 text-start">
            <h3 className="text-md mb-2">Heading 4</h3>
            <div className="rounded-full p-4 shadow-md">
              <input
                type="text"
                className="w-full h-full outline-none"
                placeholder="Placeholder 4"
              />
            </div>
          </div>
        </div>

        {/* Headings and Submit Button */}
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
