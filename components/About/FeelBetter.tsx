import React from 'react'
import Wrapper from '../utilities/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import { Bar } from '../utilities/Bar';

const FeelBetter = () => {

    const feelBetterArray = [
        {
            path: "/images/better-1.png"
        },
        {
            path: "/images/better-2.png"
        },
        {
            path: "/images/better-3.png"
        },
        {
            path: "/images/better-4.png"
        },
        {
            path: "/images/better-1.png"
        },
        {
            path: "/images/better-2.png"
        },
        {
            path: "/images/better-3.png"
        },
        {
            path: "/images/better-4.png"
        }
    ]

    return (
        <section className='bg-[#FBFCFC] pt-20 pb-20 sm:pb-32'>
            <Wrapper>
                <div className='sm:text-center pb-11 sm:pb-20'>
                    <div className='sm:hidden'>
                        <Bar float="left" />
                    </div>
                    <h4 className='text-[28px] sm:text-[34px] leading-tight'>Finally, an easier way to feel better.</h4>
                    <div className='flex gap-5 mt-6 max-w-[480px] mx-auto flex-col sm:flex-row'>
                        <a href='#' className='theme-btn !min-w-0 sm:!min-w-[155px] flex-auto text-sm sm:!text-base'>
                            Start Today
                        </a>
                        <a href='#' className='theme-btn outline-btn !min-w-0 flex-auto text-sm sm:!text-base'>
                            Begin Your Treatment Today
                        </a>
                    </div>
                </div>
            </Wrapper>

            <Swiper
                grabCursor={true}
                freeMode={true}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1537: {
                        slidesPerView: 4.5,
                        spaceBetween: 0,
                    },
                }}
                className='!pb-1.5 !pl-1.5'
            >
                {feelBetterArray.map((item, index) => (
                    <SwiperSlide key={index} className='odd:pt-16'>
                        <Image src={item.path} alt="better" width="512" height="446" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default FeelBetter