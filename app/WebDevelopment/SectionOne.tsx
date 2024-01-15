import React from "react";
import Image from "next/image";
import image1 from "@/assets/PageTwo1.png";
import image2 from "@/assets/MobileApplication.png";
import image3 from "@/assets/webApplication.png";

function SectionOne() {
  return (
    <div>
      <div id="service" className="grid grid-cols-2 md:gap-20 gap-10 p-8 font-sans">
        <div className="grid md:col-span-1 col-span-2 font-sans">
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-bold">SOFTWARE DEVELOPMENT</div>
            <span className="text-lg text-slate-700 font-normal">
              Web Application, Android Apps, IOS Apps, Windows Apps
            </span>
            <span className="text-xl text-slate-700 font-normal">
            MLM Consultant Asia is a leading Software Company focused on delivering the best and most cost-effective solutions to our clients. We provide variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
            </span>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2">
          <Image src={image1} alt="" className="w-[95%] h-[80%]" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:gap-20 gap-10 p-8  font-sans">
        <div className="md:col-span-1 col-span-2 md:order-first order-last">
          <Image src={image2} alt="" className="w-[95%] h-[80%]" />
        </div>
        <div className="grid md:col-span-1 col-span-2">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-4xl">MOBILE DEVELOPMENT</div>
            <span className="text-lg text-slate-700 font-normal">
              Building compelling mobile apps for Windows, iPhone and Android
            </span>
            <span className="text-xl  text-slate-700 font-normal">
            Building compelling mobile apps for Windows, iPhone and AndroidMobile application development is considered to be a highly challenging operation by many organizations, owing to its multiple platforms and contending technologies.We build mobile apps for every user, every platform and every industry. The value a mobile app creates and the ability it gives you to engage customers is really incredible. If you know that a mobile app can be a game changer in your business, you are wonderful. No doubt, you can outstandingly energize your business performance by investing in a mobile app
            </span>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:gap-20 gap-10 p-8 font-sans">
        <div className="grid md:col-span-1 col-span-2">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-4xl">WEB APPLICATION DEVELOPMENT</div>
            
            <span className="text-xl text-slate-700 font-normal">
            Systematic lifecycle process based on Waterfall and Agile frameworks ensures zero functional gaps, reliable timely deliveryWeb application development is recognized as a formidable undertaking for numerous organizations, marked by the diverse range of platforms and competing technologies. Our expertise lies in crafting web applications that cater to every user, span across various platforms, and serve diverse industries.The impact a web app can have on your business and its potential to engage users is truly remarkable. Recognizing the transformative potential of a web application demonstrates your forward-thinking approach. Undoubtedly, investing in a web app has the power to significantly enhance your business performance
            </span>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 md:order-last">
          <Image src={image3} alt="" className="w-[95%] h-[80%]" />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
