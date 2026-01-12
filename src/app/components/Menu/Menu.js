import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="bg-white">
      <section className="lg:py-16 py-10 container-sk arrow_no_margin ">
        <p className=" lg:text-4xl md:text-3xl text-2xl font-semibold lg:mt-8 mt-5 text-center">
          আয়োজন <span className="text-red">সেবা</span>
        </p>
        <p className="lg:w-1/2 w-full  mx-auto text-center text-gray-500  lg:mt-5 mt-3 tracking-wide lg:text-xl md:text-xl text-lg">
          প্রতিটি খাবার তৈরি হয় যত্ন ও ভালোবাসায়। আমাদের অভিজ্ঞ শেফ টিম আপনার
          জন্য প্রস্তুত করবে দেশি-বিদেশি সব ধরনের মুখরোচক খাবার
        </p>

        <div className="mt-10 lg:mt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-8">
            <Image
              src="/images/IMG.jpg"
              alt=""
              width={370}
              height={572}
              className="cursor-pointer hover:scale-105 duration-300 object-cover"
            />
            <Image
              src="/images/IMG.jpg"
              alt=""
              width={370}
              height={572}
              className="cursor-pointer hover:scale-105 duration-300 object-cover"
            />
            <Image
              src="/images/IMG.jpg"
              alt=""
              width={370}
              height={572}
              className="cursor-pointer hover:scale-105 duration-300 object-cover"
            />
            <Image
              src="/images/IMG.jpg"
              alt=""
              width={370}
              height={572}
              className="cursor-pointer hover:scale-105 duration-300 object-cover"
            />
            <Image
              src="/images/IMG.jpg"
              alt=""
              width={370}
              height={572}
              className="cursor-pointer hover:scale-105 duration-300 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
