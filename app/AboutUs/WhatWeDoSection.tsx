import React from 'react'
import logo1 from "@/assets/Frame.png";
import Image from 'next/image';


function WhatWeDoSection() {
  return (
    <div className='bg-slate-200'>
        <div className="flex flex-col text-center gap-y-5 py-10">
            <div className="text-2xl font-bold">
               WHAT WE DO?
            </div>
            <div className="text-lG font-normal leading-tight">
               We are providing following best services.
            </div>
        </div>
      <div className="grid grid-cols-2 gap-8 p-10">
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10  bg-white justify-start space-y-5">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default WhatWeDoSection;
