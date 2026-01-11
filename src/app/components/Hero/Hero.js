'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80',
            title: 'সুস্বাদু খাবারের জগত',
            subtitle: 'আপনার পছন্দের খাবার এখন আপনার দোরগোড়ায়',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80',
            title: 'তাজা ও স্বাস্থ্যকর খাবার',
            subtitle: 'প্রতিদিন তাজা উপাদান দিয়ে তৈরি',
        },
       
    ];

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl mx-auto text-white space-y-6">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-2xl opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                                        {slide.subtitle}
                                    </p>
                                    {/* <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            অর্ডার করুন
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                    @apply text-white bg-black/30 w-12 h-12 rounded-full hover:bg-orange-500/80 transition-all duration-300;
                }

                .hero-swiper .swiper-button-next::after,
                .hero-swiper .swiper-button-prev::after {
                    @apply text-xl;
                }

                .hero-swiper .swiper-pagination-bullet {
                    @apply bg-white opacity-50 w-3 h-3;
                }

                .hero-swiper .swiper-pagination-bullet-active {
                    @apply bg-orange-500 opacity-100;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;