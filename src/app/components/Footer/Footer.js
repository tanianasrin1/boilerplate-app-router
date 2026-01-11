"use client"
import React from "react";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="bg-black text-white lg:py-20 md:pt-16 pt-10 lg:pb-10">
        <div className="container-sk ">
          <FooterLogo />
        </div>
        <div className="w-full  text-center  lg:text-base text-sm  lg:pt-16 pt-8">
          
          <div className="lg:pt-4 pt-2 border-t   container-sk  font-medium text-center justify-between items-center  gap-2 tracking-wide">
            <span> Copyright © {currentYear} Foodduniya. All Rights Reserved</span>
          
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;