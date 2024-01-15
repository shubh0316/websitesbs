"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import menu from "@/assets/svg/menu (1).svg";
import companyLogo from "@/assets/MLMLogo.png";


const navlinks = [
  { title: "Home", destination: "/" },
  { title: "Cooperate Services", destination: "/CoperateServices" },
  { title: "MLM Softwares", destination: "/MLMSoftwares" },
  { title: "Digital Marketing", destination: "/DigitalMarketing" },
  { title: "Web development", destination: "/WebDevelopment" },
  { title: "eCommerce", destination: "/WebPortals" },
  
 

];

function MobileNavExtended() {
  return (
    <div className="flex flex-col text-center items-center justify-evenly bg-white gap-8 py-8 drop-shadow-2xl rounded-b-2xl">
      <ul className="flex flex-col gap-8">
        {navlinks.map((link) => (
          <li key={link.title} className="hover:text-orange-600">
            <Link
              className="tracking-wide leading-tight"
              href={link.destination}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <LoginButton />
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex py-4 items-baseline relative sm:hidden">
       
        <figure className=" py-2">
          <Image
            src={companyLogo}
            className="object-contain"
            alt="logo"
            height={30}

            quality={100}
          />
        </figure>
        <div className="text-black absolute -right-0.5 xm:right-8 top-5">
          <Image onClick={() => setOpen((o) => !o)} src={menu} alt="menu" />
        </div>
      </div>
      {open && (
        <div className="absolute w-full left-0 z-50">
          <MobileNavExtended />
        </div>
      )}
    </>
  );
}

export function LoginButton() {
  return (
    <>      
  
    <Link
      href="#contact"
      className="border border-blue-600 text-white bg-blue-600 px-4 py-2 md:px-1 md:py-1.5 lg:px-8 lg:py-3 rounded-full text-sm transition-all ease-in-out hover:bg-blue-600 hover:text-white hover:scale-110"
    >
      Contact
    </Link>
  
   </>

  );
}

export function DesktopNav() {
  return (
    <div className="py-6 items-center justify-between relative hidden sm:flex">
      <figure>
        <Image
          src={companyLogo}
          className="object-contain p-2"
          alt="logo"
          height={30}
          quality={100}
        />
      </figure>
      <ul className="flex space-x-2 lg:space-x-4">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link
              className="hover:border-b-2 py-1 hover:text-orange-600 px-1 border-orange-600 tracking-wide leading-tight transition-all ease-in-out"
              href={link.destination}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <LoginButton />
    </div>
  );
}

function Navbar() {
  return (
    <div className="max-w-8xl mx-auto px-4">
 
      <MobileNav />
      <DesktopNav />
   
    </div>
  );
}

export default Navbar;