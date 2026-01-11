import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {

  return (
    <div>
      <Link href="/" className="w-fit">
          <Image
            placeholder="blur"
            src="/images/logo.jpeg"
            width={100}
            height={80}
            alt="logo"
            className="object-contain h-14 w-fit md:h-21.25  my-auto"
            blurDataURL="/blur.png "
            loading="eager"
          />
        </Link>
    </div>
  );
};

export default NavLogo;
