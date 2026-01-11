"use client"
import Link from "next/link";
import React from "react";
import "react-modern-drawer/dist/index.css";
import { usePathname, useRouter } from "next/navigation";

const Links = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const router = useRouter();
  
  return (
    <div className="w-8/12 lg:flex items-center justify-end gap-x-2.5 leading-5 tracking-[1%] hidden lg:text-base text-sm">
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

export default Links;