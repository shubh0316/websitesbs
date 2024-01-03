import React from 'react'
import Image from 'next/image'
import image1 from "@/assets/pagethree.png"

function SectionOne() {
  return (
    <div>
      <div className="p-10 text-left flex flex-col space-y-4">
        <div className="text-extrabold text-lg">
           E-COMMERCE WEBSITE PACKAGES
        </div>
         <p className="text-slate-700 text-md">100% customized Package</p>
         <span className="text-slate-700 text-md mt-10">Electronic commerce or ecommerce is a term for any type of business, or commercial transaction, that involves the transfer of information across the Internet. It covers a range of different types of businesses, from consumer based retail sites, through auction or music sites, to business exchanges trading goods and services between corporations. It is currently one of the most important aspects of the Internet to emerge.</span>
         <span className="text-slate-700 text-md mt-10">Electronic commerce or ecommerce is a term for any type of business, or commercial transaction, that involves the transfer of information across the Internet. It covers a range of different types of businesses, from consumer based retail sites, through auction or music sites, to business exchanges trading goods and services between corporations. It is currently one of the most important aspects of the Internet to emerge.</span>
         <div className="flex flex-row justify-start mt-10 space-x-2">
              <p className="text-bold text-md">System Requirement:-</p>
              <p className=" text-md">Windows Hosting Server, MS SQL Database, .NET Framework 4.0.</p>
         </div>
         <div className="flex flex-row justify-start  space-x-2">
              <p className="text-bold text-md">System Requirement:-</p>
              <p className=" text-md">Windows Hosting Server, MS SQL Database, .NET Framework 4.0.</p>
         </div>
         <Image src={image1} alt="middle" layout="responsive" width={100} height={50} className='w-full h-auto rounded-2xl' />

      </div>
   
   </div>
  )
}

export default SectionOne
