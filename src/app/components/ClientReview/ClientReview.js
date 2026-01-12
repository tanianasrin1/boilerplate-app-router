"use client";
import React, { useEffect, useState } from "react";
// import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowSize from "@/hooks/useWindowSize";
import { Rating } from "@mui/material";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Image from "next/image";

const ClientReview = () => {
  const windowSize = useWindowSize();
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (windowSize?.width < 450) {
      setCount(1);
    } else if (windowSize?.width < 850) {
      setCount(1);
    } else if (windowSize?.width < 1024) {
      setCount(1);
    } else {
      setCount(1);
    }
  }, [windowSize]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={count}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className=" lg:h-[380px] md:h-[320px] h-[260px]"
    >
      <>
        <SwiperSlide>
          <div className="">
            <div className="mt-6">
              <Image
                className=" object-cover lg:h-20 lg:w-20 md:h-32 md:w-32 h-10 w-10 rounded-full border border-orange-800 mx-auto"
                src="/images/no-image-icon-6.png"
                width={50}
                height={50}
                alt="Institution logo"
                blurDataURL="/blur.png"
              />
            </div>
            <div className=" flex justify-center items-center">
              <Rating
                className="text-primary mt-5 text-lg "
                name="read-only"
                value={5 || 0}
                readOnly
              />
            </div>

            <p className="lg:text-lg md:text-base text-sm lg:leading-[28px]  text-center lg:w-8/12 lg:mt-7 md:mt-10 mt-8  mx-auto w-full">
              “ Our certified instructors have years of experience in teaching
              safe and defensive driving techniques. They are dedicated to
              helping you become a confident and responsible driver.We
              understand that every student is unique. Our courses are
              personalized to match your skill level, pace, and goals”
            </p>
            <p className="lg:text-[22px] md:text-lg text-base  text-center font-semibold lg:mt-7 mt-5 text-black-theme">
              Cody Fisher
            </p>
          </div>
        </SwiperSlide>
      </>
    </Swiper>
  );
};

export default ClientReview;
