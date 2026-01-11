// "use client"
// import React, { useState } from "react";
// import Drawer from "react-modern-drawer";
// import "react-modern-drawer/dist/index.css";
// import { BiMenu } from "react-icons/bi";
// import NavLogo from "./NavLogo";
// import Links from "./Links";
// import NavButton from "./NavButton";
// import NavLinkMob from "./NavLinkMob";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState);
//   };
  
//   return (
//     <div className="py-2 shadow-md">
//       <div className="container-sk flex items-center justify-between relative">
//         <NavLogo />
//         <Links />
//         <NavButton />
//         <BiMenu
//           className="lg:hidden block w-10 ml-auto cursor-pointer text-3xl"
//           onClick={toggleDrawer}
//         />
//         <Drawer
//           open={isOpen}
//           onClose={toggleDrawer}
//           direction="left"
//           className="bla bla bla"
//         >
//           <NavLinkMob toggleDrawer={toggleDrawer} />
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// export default Navbar;  

"use client"
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiMenu } from "react-icons/bi";
import NavLogo from "./NavLogo";
import Links from "./Links";
import NavButton from "./NavButton";
import NavLinkMob from "./NavLinkMob";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  return (
    <div className="py-2 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container-sk flex items-center justify-between relative">
        <NavLogo />
        <Links />
        <NavButton />
        <BiMenu
          className="lg:hidden block w-10 ml-auto cursor-pointer text-3xl"
          onClick={toggleDrawer}
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <NavLinkMob toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;