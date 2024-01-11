import React from 'react'
import Image from 'next/image'
import image1 from "@/assets/MobileApplication.png";

function SectionThree() {
  return (
    <div>
        <div className="grid grid-cols-2 md:gap-8 gap-6 p-10 md:mt-4">
        <div className="md:col-span-1 col-span-2 md:order-first order-last">
                    <Image src={image1} alt="" className='w-[95%] h-[80%]' /> 
                </div>
               <div className="grid md:col-span-1 col-span-2">
              
                <div className="flex flex-col gap-4 font-sans">
                    <div className="font-bold text-4xl">BLOCKCHAIN DEVELOPMENT</div>
                    <span className="text-xl text-slate-700 font-normal">
                       Cryptocurrency (Digital Currency), smart contracts, peer to peer, Proof of Work and cryptography technologyThe Blockchain consists of individual behavior specifications, a large set of rules that are programmed into it. Those specifications are called protocols. The implementation of specific protocols essentially made Blockchain what it is — a distributed, peer-to-peer and secured information database.The database is the Blockchain and each node on a Blockchain has access to the whole Blockchain. No one node or computer regulates the information it contains. Every node is able to validate the records of the Blockchain. This is all done without one or several intermediaries in control of everything.
                    </span>               
                </div>
               </div>        
        </div>
</div>
  )
}

export default SectionThree
