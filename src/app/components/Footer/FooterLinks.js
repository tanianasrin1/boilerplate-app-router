import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FooterLinks = () => {

      const contactData = {
    address: "123 Food Street, Dhaka, Bangladesh",
    email: "info@foodduniya.com",
    phone: "+880 1234-567890"
  }; 
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {/* Home */}
      <div className=" overflow-hidden lg:text-base md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="lg:text-[22px] text-lg font-semibold  mb-6 text-red"> Product</h3>


        <div>
          <Link
            href="/about-us"
            className="w-max cursor-pointer  hover:text-red "
          >
            <span className="   ">About Us</span>
          </Link>
        </div>
        <div>
          <Link
            href="/our-menu"
            className="w-max cursor-pointer  hover:text-red"
          >
            <span className="   ">Menu</span>
          </Link>
        </div>
        <div>
          <Link
            href="/our-menu"
            className="w-max cursor-pointer  hover:text-red"
          >
            <span className="   ">Reviews</span>
          </Link>
        </div>
        <div>
          <Link
            href="/contact-us"
            className="w-max cursor-pointer  hover:text-red"
          >
            <span className="   ">Contact Us</span>
          </Link>
        </div>
      </div>

      <div className="overflow-hidden lg:text-base md:text-base text-sm space-y-2 lg:mt-0 mt-6">
      <h3 className="lg:text-[22px] text-lg  font-semibold mb-6 text-red">
        Contact Info
      </h3>
      
      {/* Address */}
      <div className="flex items-start gap-3 mb-3">
        <FaMapMarkerAlt className=" mt-1 " size={18} />
        <p>{contactData.address}</p>
      </div>
      
      {/* Email */}
      <div className="flex items-center gap-3 mb-3">
        <FaEnvelope className="" size={18} />
        <a 
          href={`mailto:${contactData.email}`} 
          className="hover:text-red transition-colors"
        >
          {contactData.email}
        </a>
      </div>
      
      {/* Phone */}
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="" size={18} />
        <a 
          href={`tel:${contactData.phone}`} 
          className="hover:text-red transition-colors"
        >
          {contactData.phone}
        </a>
      </div>
    </div>

      <div className=" overflow-hidden lg:text-base md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="lg:text-[22px] text-lg  font-semibold  mb-6 text-red">
          {" "}
          Opening Time
        </h3>
        Monday to Sunday: <br></br> 7.00 am to 12.00 am
      </div>
    </div>
  );
};

export default FooterLinks;
