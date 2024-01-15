"use client"
import React from 'react';
import useMedia from 'use-media';


const MobileView = () => {
  return (
      <div className="mt-4 bg-white space-y-6 overflow-x-hidden">
          <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">OUR FEATURES</div>
        <div className="text-sm font-normal leading-tight">
          We are providing the following best services.
        </div>
        <div> 
        </div>
    </div>
      <table className="w-lg ">
        <thead>
          <tr>
            <th className="text-md font-normal p-3">Startup $699</th>
            <th className="text-md font-normal p-3">Basic $899</th>
            <th className="text-md font-normal p-3">Standard $1099</th>
            <th className="text-md font-normal p-3">Business $1599</th>
          </tr>
        </thead>
        <tbody>
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
            Features
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Facebook FAN Page
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          LinkedIn Company Page
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
        <tr className="text-sm text-left  p-4 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Twitter Profile
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Pinterest Profile
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Cover Photo Creation
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Banner/Poster Posting
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
            Video Promotions
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Youtube
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Metacafe
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
        <tr className="text-sm text-left  p-4 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Daily Motion
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Vimeo
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Break.com
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Others
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
            Blog
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Keyword Related Blog Content Writing
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Blog Creation in Wordpress
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
        <tr className="text-sm text-left  p-4 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Blogger
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Other blog websites
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Blog Posting
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
            Press Releases
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Keyword Oriented Press Releases Writing
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Submission to Press Release Distribution 
          sites
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
            Article Promotion
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Keyword Oriented Article Writing
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          No of Article Submission Websites
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
          Social Bookmarking
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Website URLs Submission
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Blog URLs Submission
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Press Releases URLs Submission
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Video URLs Submission
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
          Additional
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Latest Online Marketing Trend updation
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
          Analysis Report
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Weekly Activity Report
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Monthly Activity Report
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
        <tr className="text-sm text-left  p-8 font-bold  w-full">
          <td colSpan={4} className="px-4 p-2">
          Customer support
          </td>
        </tr>
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          E-mail
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
        <tr className="text-sm text-left  p-8 font-normal  w-full">
          <td colSpan={4} className="bg-gray-200 px-4">
          Telephone
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
      
        
      
        
         
          
        </tbody>
        
      </table>
    </div>
    
  );
};

const DesktopView = () => {
  return (
    <div>
      
    <div className= "my-8 ">
     <div className="flex flex-col text-center gap-y-5 py-10">
       <div className="text-2xl font-bold">OUR FEATURES</div>
       <div className="text-sm font-normal leading-tight">
         We are providing the following best services.
       </div>
       <div> 

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
             <div className="text-4xl font-bold">$699</div>
             
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
             <div className="text-4xl font-bold">$899</div>
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
             <div className="text-4xl font-bold">$1099</div>
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
             <div className="text-4xl font-bold">$1599</div>
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
  )
}

const ComparePackageSection = () => {
  const isMobileView = useMedia({ maxWidth: 767 });

  return (
     <>
           {isMobileView ? <MobileView /> : <DesktopView />}

     </>
  );
};


export default ComparePackageSection;
