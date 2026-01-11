import React from "react";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterLogo = () => {
  // Social media links - easily update these
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/foodduniya",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/foodduniya",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/foodduniya",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col lg:gap-12 gap-0 lg:py-8 py-4">
      <div className="lg:w-4/12 w-full">
        <Image
          placeholder="blur"
          src="/images/logo.jpeg"
          width={500}
          height={100}
          alt="logo"
          className="object-contain h-25 my-auto w-fit"
          blurDataURL="/blur.png"
        />

        {/* Social Media Icons */}
        <div className="flex gap-4 my-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-red transition-all duration-300 rounded-full p-3 group"
              aria-label={social.name}
            >
              <social.icon className="text-white text-lg" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="lg:w-8/12 w-full">
        <FooterLinks />
      </div>
    </div>
  );
};

export default FooterLogo;