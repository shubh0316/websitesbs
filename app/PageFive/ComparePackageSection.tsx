"use client"
import React from 'react';

const ComparePackageSection = () => {
  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6',
    'Feature 7',
    'Feature 8',
    'Feature 9',
    'Feature 10',
  ];
  const MobileView = () => {
    return (
        <div className="mt-8 bg-white   space-y-20">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-lg font-bold p-3">small $1231</th>
              <th className="text-lg font-bold p-3">small $1231</th>
              <th className="text-lg font-bold p-3">small $1231</th>
              <th className="text-lg font-bold p-3">small $1231</th>
            </tr>
          </thead>
          <tbody>
          <tr className="text-sm text-left  p-8 font-bold  w-full">
            <td colSpan={4} className="px-4">
              Features are listed below
            </td>
          </tr>
          <tr className="text-sm text-left  p-8 font-semibold  w-full">
            <td colSpan={4} className="bg-gray-200 px-4">
              hello friends
            </td>
          </tr>
           
              <tr>
                <td className="text-sm p-3 text-green-500"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
              </tr>
              <tr className="text-sm text-left  p-4 font-bold  w-full">
          </tr>
          <tr className="text-sm text-left  p-4 font-semibold  w-full">
            <td colSpan={4} className="bg-gray-200 px-4">
              hello friends
            </td>
          </tr>
           
              <tr>
                <td className="text-sm p-3 text-green-500"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
                <td className="text-green-500 p-3"> ✔ </td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div>
      <div className="my-8 bg-slate-100">
        <div className="flex flex-col text-center gap-y-5 py-10">
          <div className="text-2xl font-bold">EXTRA FEATURES</div>
          <div className="text-sm font-normal leading-tight">
            We are providing the following best services.
          </div>
          <div> 
          {window.innerWidth <= 600 ? <MobileView /> : null}
          <div className="mt-8 bg-white p-20  space-y-20">
            <div className="grid md:grid-cols-5 border">
              {/* First Column */}
              <div className="col-span-1  flex-col flex items-center justify-center border">
                <div className="text-lg font-bold mb-10 p-10">Get started now</div>
                <div className="text-lg font-bold">Features</div>
                <div className="">  
                
                  <div  className="text-sm font-bold text-left mt-2 p-3">
                    hellobadeseworld
                  </div>
                  <div  className="text-sm  text-center mt-2 p-3">
                    hellobadeseworld
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                    hellobadeseworld
                  </div>
            
                </div>
              </div>

              {/* Second Column */}
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Features</div>
                <div className="text-4xl font-bold">$19.99</div>
                <div className="text-sm text-gray-500 mt-6">what&apos;s included</div>
                </div>
                
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
           
              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center ">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Features</div>
                <div className="text-4xl font-bold">$19.99</div>
                <div className="text-sm text-gray-500 mt-6">what&apos;s included</div>
                </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
         
              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Features</div>
                <div className="text-4xl font-bold">$19.99</div>
                <div className="text-sm text-gray-500 mt-6">what&apos;s included</div>
                </div>
         
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
       
              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Features</div>
                <div className="text-4xl font-bold">$19.99</div>
                <div className="text-sm text-gray-500 mt-6">what&apos;s included</div>
                </div>
              
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
            
              </div>
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};


export default ComparePackageSection;
