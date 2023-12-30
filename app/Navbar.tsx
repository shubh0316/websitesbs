"use client";
import React, { useState } from "react";
import logoImg from "@/assets/FSL - Main Logo - Navbar.png";
import Image from "next/image";
import menuImg from "@/assets/svg/menu (1).svg";
import Link from "next/link";
import Container from "./container";


const navlinks = [
  { title: "About", destination: "#about" },
  { title: "Services", destination: "#services" },
  { title: "Specialties", destination: "#specialties" },
  { title: "Why Choose Us", destination: "#choose" },
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
       
        <figure className="mx-auto">
          <Image
            src={logoImg}
            className="object-contain"
            alt="logo"
            height={40}

            quality={100}
          />
        </figure>
        <div className="text-black absolute -right-14 xm:right-8 top-5">
          <Image onClick={() => setOpen((o) => !o)} src={menuImg} alt="menu" />
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
    <ul>  
    <li>  
    <Link
     href="login"
     className= "px-6 py-1 rounded-full text-sm transition-all ease-in-out hover:scale-110 hover:text-orange-600"
   >
    Login
   </Link>
    <Link
      href="#contact"
      className="border border-orange-600 px-6 py-1 rounded-full text-sm transition-all ease-in-out hover:bg-orange-600 hover:text-white hover:scale-110"
    >
      Contact
    </Link>
   
   </li>
   </ul>
   </>

  );
}

export function DesktopNav() {
  return (
    <div className="py-6 items-center justify-between relative hidden sm:flex">
      <figure>
        <Image
          src={logoImg}
          className="object-contain p-2"
          alt="logo"
          height={55}
          quality={100}
        />
      </figure>
      <ul className="flex space-x-6">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link
              className="hover:border-b-2 py-1 hover:text-orange-600 px-1 border-fms-orange tracking-wide leading-tight transition-all ease-in-out"
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
    <div className="max-w-6xl mx-auto px-12">
      <Container>  
      <MobileNav />
      <DesktopNav />
      </Container>
    </div>
  );
}

export default Navbar;