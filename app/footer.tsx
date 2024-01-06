
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="text-white bg-gradient-to-br from-primary to-black">
        <div className="px-6 pt-12 pb-12 mx-auto sm:pt-24 max-w-7xl">
          <div className="grid lg:grid-cols-[2fr_repeat(2,1fr)_1.2fr] lg:grid-rows-[repeat(2,auto)] sm:grid-cols-3 grid-rows-[repeat(4,auto)] grid-cols-1 grid-flow-col gap-x-12 gap-y-6">
            <>
              {/* <a href="/">
                <Icons.lcWhiteText
                  className="w-48 h-20 sm:col-span-3 lg:col-span-1"
                  preserveAspectRatio="xMinYMid meet"
                />
              </a> */}
              <div className="flex flex-col text-sm text-gray-200 gap-y-4 lg:col-span-1">
                <p className="font-light [text-wrap:balance]">
                At LC, with over 25 years of experience, we excel in 3PL/4PL services, delivering tailored logistics solutions that prioritize our clients.
                <br/> 
                Our comprehensive services encompass Trucking, Brokerage, Freight Forwarding, Logistics, Distribution, Financial Services, Customs Compliance, and Consulting, helping companies thrive.
                </p>
                <p className="hidden mt-auto lg:flex">
                  <MapPin size={20} className="mr-2" />
                  6415 Northwest Dr. Unit 17 & 18 Mississauga, ON L4V 1X1
                </p>
              </div>
            </>

            <>
              <h3 className="self-center hidden uppercase sm:block">
                Services
              </h3>
              {/* <ul className="hidden space-y-4 text-sm font-light sm:block">
                {services.map((service) => (
                  <li
                    className="cursor-pointer hover:underline"
                    key={service.title}
                  >
                    <a href={service.href}>{service.title}</a>
                  </li>
                ))}
              </ul> */}
            </>

            <>
              <h3 className="self-center hidden uppercase sm:block">
                Training
              </h3>
              {/* <ul className="hidden space-y-4 text-sm font-light sm:block">
                {trainings.map((training) => (
                  <li
                    className="cursor-pointer hover:underline"
                    key={training.title}
                  >
                    {" "}
                    <a href={training.href}>{training.title}</a>
                  </li>
                ))}
              </ul> */}
            </>

            <>
              <h3 className="self-center uppercase">Talk To Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex">
                  <Phone size={20} className="mr-2" /> Toll Free: (888) 856-2352
                </li>
                <li className="flex">
                  <Phone size={20} className="mr-2" /> (905) 247-6868
                </li>
                <li className="flex hover:underline">
                  <Mail size={20} className="mr-2" />
                  <a href="mailto:info@loadlc.com">info@loadlc.com</a>
                </li>
              </ul>
            </>
          </div>

          <div className="h-px mt-16 mb-8 opacity-25 bg-gradient-to-r from-slate-200 to-white" />

          <div className="flex items-baseline justify-between text-sm font-light">
            <p>&copy; 2023 Logistics Coordinators. All Rights Reserved.</p>

            <a
              href="https://www.linkedin.com/company/logistics-coordinators/"
              className="hidden sm:block"
            >
              <Linkedin
                size={20}
                strokeWidth={1.5}
                className="mr-2 transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;