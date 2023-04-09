import React, { useState } from 'react'
import Wrapper from './utilities/Wrapper'
import { Bar } from './utilities/Bar'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay, Scrollbar, A11y } from 'swiper';
import 'swiper/css';

const Testimonial = () => {
    const testimonials = [
        {
            img: "/images/face.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        },
        {
            img: "/images/face-1.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        },
        {
            img: "/images/face-2.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        },
        {
            img: "/images/face.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        },
        {
            img: "/images/face-1.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        },
        {
            img: "/images/face-2.png",
            title: "Jane Cooper",
            location: "Los Angeles, CA",
            star: 5,
            paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
        }

    ]
    return (
        <section className='pt-14 sm:py-24 overflow-hidden'>
            <Wrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 items-end mb-11'>
                    <div>
                        <Bar float='left' />
                        <h4 className='text-[28px] sm:text-[34px] leading-tight'>Real results from real guys</h4>
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-auto'>
                        <div className='flex gap-1'>
                            <StarIcon className='w-4 text-[#F8B84E]' />
                            <StarIcon className='w-4 text-[#F8B84E]' />
                            <StarIcon className='w-4 text-[#F8B84E]' />
                            <StarIcon className='w-4 text-[#F8B84E]' />
                            <StarIcon className='w-4 text-[#F8B84E]' />
                        </div>
                        <a href='#' className='underline text-xs text-gray200'>4.5 average rating</a>
                    </div>
                </div>
            </Wrapper>
            <div className='lg:max-w-[calc(((100%_-_1220px)_/_2)_+_1220px)] ml-auto'>
                <Swiper
                    spaceBetween={30}
                    grabCursor={true}
                    freeMode={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1537: {
                            slidesPerView: 3.5,
                            spaceBetween: 40,
                        },
                    }}
                    className='!pb-1.5 !pl-1.5 testimonial'
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className={`border border-[#EBEBEB] rounded-[10px] py-5 px-9 min-h-[223px] ${isActive ? "shadow-3" : null}`}>
                                    <div className='flex items-end gap-5'>
                                        <Image src={testimonial.img} alt="face" className='rounded-full w-12 h-12' width="48" height="48" />
                                        <div>
                                            <h6 className='text-[#333333] text-base font-bold'>{testimonial.title}</h6>
                                            <p className='text-[#666666] text-sm'>{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-1 my-5'>
                                        <StarIcon className='w-[18px] text-[#F8B84E]' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]' />
                                    </div>

                                    <p className='dark'>{testimonial.paragraph}</p>

                                </div>
                            )}

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <Wrapper>
                <p className='underline text-xs text-gray200 mt-6 sm:mt-14 text-center'>These customers’ results have not been independently verified. Individual results will vary.</p>
            </Wrapper>

        </section>
    )
}

export default Testimonial