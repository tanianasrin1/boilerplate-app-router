"use client"
import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";
// import useWindowSize from "@/hooks/useWindowSize";

const ServicePlace = () => {
  const windowSize = useWindowSize();
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (windowSize?.width < 450) {
      setCount(2);
    } else if (windowSize?.width < 850) {
      setCount(3);
    } else if (windowSize?.width < 1024) {
      setCount(4);
    } else if (windowSize?.width < 1280) {
      setCount(4);
    } else {
      setCount(5);
    }
  }, [windowSize]);

  return (
    <section className="bg-white">
      <div className="container-sk py-8 lg:py-16">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={count}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SHAHEEN HALL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SKS CONVENTION HALL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">BARIDHARA DOHS </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SENA KUNJO</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SHAHEEN HALL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SKS CONVENTION HALL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">BARIDHARA DOHS </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full mx-auto"
                src="/images/logo.jpeg"
                width={200}
                height={100}
                alt="logo"
              />
              <p className="text-sm lg:text-base text-black font-semibold mt-3">SENA KUNJO</p>
            </div>
          </SwiperSlide>
          
         
        </Swiper>
      </div>
    </section>
  );
};

export default ServicePlace;