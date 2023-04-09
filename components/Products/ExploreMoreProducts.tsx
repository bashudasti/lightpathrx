import React from 'react'
import Wrapper from '../utilities/Wrapper'
import { Bar } from '../utilities/Bar'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import SingleProduct from './SingleProduct'

const ExploreMoreProducts = () => {
    const moreProducts: object[] = [
        {
            title: "Generic for Viagra",
            perUser: "from $3 per user",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        },
        {
            title: "Viagra",
            perUser: "from $139 per user",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        },
        {
            title: "Generic for Cialis",
            perUser: "from $82 per month",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        },
        {
            title: "Generic for Viagra",
            perUser: "from $3 per user",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        },
        {
            title: "Viagra",
            perUser: "from $139 per user",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        },
        {
            title: "Generic for Cialis",
            perUser: "from $82 per month",
            image: "/images/more-product.png",
            imageWidth: "310",
            imageHeight: "320"
        }
    ]
    return (
        <section className='py-20 bg-[#FBFCFC] moretreatments'>
            <Wrapper>
                <Bar float='left' />
                <h5 className='text-3xl sm:text-[42px] leading-tight font-bold mb-16'>Explore more ED treatments</h5>
                <Swiper
                    spaceBetween={44}
                    grabCursor={true}
                    freeMode={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className='!pb-20'
                >
                    {moreProducts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SingleProduct data={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Wrapper>
        </section>
    )
}

export default ExploreMoreProducts