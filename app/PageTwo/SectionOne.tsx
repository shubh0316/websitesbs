import React from 'react'
import Image from 'next/image'
import image1 from "@/assets/PageTwo1.png";

function SectionOne() {
  return (
    <div>
        <div className="grid grid-cols-2 md:gap-20 gap-10 p-8 ">
               <div className="grid md:col-span-1 col-span-2">
                <div className="flex flex-col gap-4">
                    <div className="text-extrabold">SOFTWARE DEVELOPMENT</div>
                    <span className='text-md text-slate-700 font-normal'>Web Application, Android Apps, IOS Apps, Windows Apps</span>
                    <span className="text-md text-slate-700 font-normal">
                    MLM Consultant Asia is a leading India based Software Company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provide variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
                    </span>
                </div>
               </div>
               <div className="md:col-span-1 col-span-2">
                    <Image src={image1} alt="" className='w-[95%] h-[80%]' /> 
                </div>
        </div>
        <div className="grid grid-cols-2 md:gap-20 gap-10 p-8 ">
        <div className="md:col-span-1 col-span-2 md:order-first order-last">
        <Image src={image1} alt="" className='w-[95%] h-[80%]' /> 
    </div>
        <div className="grid md:col-span-1 col-span-2">
        <div className="flex flex-col gap-4">
            <div className="text-extrabold">SOFTWARE DEVELOPMENT</div>
            <span className='text-md text-slate-700 font-normal'>Web Application, Android Apps, IOS Apps, Windows Apps</span>
            <span className="text-md text-slate-700 font-normal">
                MLM Consultant Asia is a leading India based Software Company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provide a variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
            </span>
        </div>
    </div>
   
</div>
        <div className="grid grid-cols-2 md:gap-20 gap-10 p-8 ">
      
        <div className="grid md:col-span-1 col-span-2">
        <div className="flex flex-col gap-4">
            <div className="text-extrabold">SOFTWARE DEVELOPMENT</div>
            <span className='text-md text-slate-700 font-normal'>Web Application, Android Apps, IOS Apps, Windows Apps</span>
            <span className="text-md text-slate-700 font-normal">
                MLM Consultant Asia is a leading India based Software Company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provide a variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
            </span>
        </div>
      
    </div>
    <div className="md:col-span-1 col-span-2 md:order-last">
        <Image src={image1} alt="" className='w-[95%] h-[80%]' /> 
    </div>
</div>
</div>
  )
}

export default SectionOne
