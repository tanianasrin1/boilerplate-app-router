"use client";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const GalleryContent = () => {
  return (
    <>
     <div className="bg-[#fcf7f4]">
         <section className="lg:py-16 py-10 container-sk arrow_no_margin ">
        <p className=" lg:text-4xl md:text-3xl text-2xl font-semibold lg:mt-8 mt-5 text-center">
          আমাদের <span className="text-red">সেবাসমূহ</span>
        </p>
        <p className="lg:w-1/2 w-full  mx-auto text-center text-gray-500  lg:mt-5 mt-3 tracking-wide lg:text-xl md:text-xl text-lg">
         যেখানে প্রতিটি আয়োজন মানেই স্বাদের উৎসব, আর প্রতিটি পদ তৈরি হয় যত্ন আর ভালোবাসায়
        </p>

        <div className="mt-10 lg:mt-10">
          <PhotoProvider>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-8">
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
              <PhotoView src="/images/card.png">
                <Image
                  src="/images/card.png"
                  alt=""
                  width={370}
                  height={261}
                  className="cursor-pointer hover:scale-105 duration-300 object-cover"
                />
              </PhotoView>
            </div>
          </PhotoProvider>
        </div>
      </section>
     </div>
    </>
  );
};

export default GalleryContent;


  {/* {gallery?.gallery_item.map(
                        (item, index) =>
                          item?.title.includes("gallery_item_") && (
                            <>
                              <PhotoView  src={item?.contents?.image}>
                                <Image
                                 src={item?.contents?.image}
                                  alt=""
                                  width={550}
                                  height={550}
                                  className="cursor-pointer hover:scale-105 duration-300 lg:h-60 md:h-44 h-40 object-cover "
                                />
                              </PhotoView>
                            </>
                          )
                      )} */}
