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
            <div className="my-8 bg-slate-100">
      <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">EXTRA FEATURES</div>
        <div className="text-sm font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
      </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-lg font-normal md:font-bold p-3">Startup $349.99</th>
              <th className="text-lg font-normal md:font-bold p-3">Basic $549.99</th>
              <th className="text-lg font-normal md:font-bold p-3">Standard $799.99</th>
              <th className="text-lg font-normal md:font-bold p-3">Business $1099.99</th>
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
          <div className="text-2xl font-bold">OUR FEATURES</div>
          <div className="text-sm font-normal leading-tight">
            We are providing the following best services.
          </div>
          <div> 
          {window.innerWidth <= 600 ? <MobileView /> : null}
          <div className="mt-8 bg-white p-20  space-y-20">
            <div className="grid md:grid-cols-5 border">
              
              <div className="col-span-1  flex-col flex items-center justify-center border">
                <div className="text-lg font-bold  p-10">Get started now</div>
                <div className="text-lg font-bold">Features</div>
                <div className="">  
                
                  <div  className="text-sm  text-left mt-2 p-3">
                    Facebook FAN Page
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                  LinkedIn Company Page
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                  Twitter Profile
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                  Pinterest Profile
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                  Cover Photo Creation
                  </div>
                  <div  className="text-sm  text-left mt-2 p-3">
                  Banner/Poster Posting
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Video Promotions
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Youtube
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Metacafe
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Daily Motion
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Vimeo
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Break.com
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Others
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Blog
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Keyword Related Blog Content Writing
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Blog Creation in Wordpress
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Blogger
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Other blog websites
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Blog Posting
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Press Releases
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Keyword Oriented Press Releases Writing
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Submission to Press Release Distribution sites
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Article Promotion
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Keyword Oriented Article Writing
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  No of Article Submission Websites
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Social Bookmarking
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Website URLs Submission
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Blog URLs Submission
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Press Releases URLs Submission
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Video URLs Submission
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Additional
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Latest Online Marketing Trend updation
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                  Analysis Report
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Weekly Activity Report
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  Monthly Activity Report
                  </div>
                  <div  className="text-sm font-bold  text-left mt-2 p-3">
                   Customer support
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                  E-mail
                  </div>
                  <div  className="text-sm font-normal  text-left mt-2 p-3">
                   Telephone
                  </div>
                 
                  
                  
                  
                </div>
              </div>

              
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Startup</div>
                <div className="text-4xl font-bold">$349.99</div>
                
                </div>
                <div className="mt-[rem]"> 
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  X
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    1
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    X
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    1
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  4
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    1
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  5
                  </div>
                  <div  className="text-black-500 mt-[4rem] p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  5
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  5
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  5
                  </div>
                  <div  className="text-black-500 mt-[4rem] p-2">
                  X
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                  X
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-black-500 mt-2 mb-[1.5rem] p-2">
                  X
                  </div>
                  </div>
                  
                  

              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center ">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Basic</div>
                <div className="text-4xl font-bold">$549.99</div>
                </div>
                <div className="mt-[rem]"> 
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    8
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  4
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    3
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    2
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  8
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    3
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-[4rem] p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  15
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[6rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 mb-[1.5rem] p-2">
                  ✔
                  </div>
                  </div>
         
              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Standard</div>
                <div className="text-4xl font-bold">$799.99</div>
                </div>
                <div className="mt-[rem]"> 
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    15
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    7
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  7
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    5
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    3
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    3
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    4
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  15
                  </div>
                  <div  className="text-black-500 mt-[4rem] p-2">
                  30
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  20
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  20
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  25
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[6rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 mb-[1.5rem] p-2">
                  ✔
                  </div>
                  </div>
              </div>
              <div className="col-span-1 border p-4 flex flex-col items-center">
                <div className="p-10">  
              <div className="text-lg font-bold mb-4">Business</div>
                <div className="text-4xl font-bold">$19.99</div>
                </div>
              
                <div className="mt-[rem]"> 
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                    ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    25
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    10
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  10
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    8
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    5
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                    15
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    5
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  15
                  </div>
                  <div  className="text-black-500 mt-[6rem] p-2">
                    5
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  25
                  </div>
                  <div  className="text-black-500 mt-[4rem] p-2">
                  50
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  50
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  50
                  </div>
                  <div  className="text-black-500 mt-2 p-2">
                  40
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[6rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-[4rem] p-2">
                  ✔
                  </div>
                  <div  className="text-green-500 mt-2 mb-[1.5rem] p-2">
                  ✔
                  </div>
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
