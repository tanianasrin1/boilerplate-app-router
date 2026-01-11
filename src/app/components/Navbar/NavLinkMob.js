"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
// import { useRouter } from "next/router";
import { Button } from "@mui/material";

const NavLinkMob = ({ toggleDrawer }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="font-Barlow text-base leading-5 tracking-[1%] p-6">
      <IoCloseSharp
        className="lg:hidden block  w-10 ml-auto "
        onClick={toggleDrawer}
      />
      {/* border-b border-gray/75 */}
            <div className="relative group">
        <Link
          className={`${
            pathname === "/" 
              ? "text-red" 
              : "text-black"
          } text-base font-medium pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/"
        >
          হোম
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
      
      <div className="relative group">
        <Link
          className={`${
            pathname === "/about" 
              ? "text-red" 
              : "text-black"
          } text-base pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/about"
        >
          মেনু
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
      <div className="relative group">
        <Link
          className={`${
            pathname === "/about" 
              ? "text-red" 
              : "text-black"
          } text-base pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/about"
        >
          অফার
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
      <div className="relative group">
        <Link
          className={`${
            pathname === "/about" 
              ? "text-red" 
              : "text-black"
          } text-base pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/about"
        >
          ব্রাঞ্চসমূহ
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
      <div className="relative group">
        <Link
          className={`${
            pathname === "/about" 
              ? "text-red" 
              : "text-black"
          } text-base pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/about"
        >
          আমাদের সম্পর্কে
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
      <div className="relative group">
        <Link
          className={`${
            pathname === "/about" 
              ? "text-red" 
              : "text-black"
          } text-base pb-1 transition-all duration-300 relative z-10 block px-2.5 py-2`}
          href="/about"
        >
          বুকিং
        </Link>
        <div className="bg-pink-100 absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-pink-100"></div>
      </div>
    </div>
  );
};

export default NavLinkMob;
