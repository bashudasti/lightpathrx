import Image from 'next/image'
import React from 'react'
import { Bar } from '../utilities/Bar'

const Banner = () => {
    return (
        <section className='sm:min-h-[calc(50vh)] lg:min-h-[780px] bg-lightgray relative z-0 pb-8 lg:pb-0 pt-9 lg:pt-0'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[780px]'>
                    <div className='mb-9 lg:mb-0'>
                        <Bar float="left" />
                        <h1 className='text-[32px] sm:text-[54px] font-bold leading-tight'>Lightpath Rx</h1>
                        <p className='text-xl sm:text-heading sm:text-3xl'>healthcare made simple</p>
                        <p className='max-w-[461px] mt-5'>Lightpath Rx is America’s #1 online portal for FDA-approved treatments and medication. We make healthcare simple, affordable, and convenient through our 100% online platform that links you with US-licensed physicians and US-based pharmacies, all in just 5 minutes.</p>
                        <a href='#' className='theme-btn mt-32 !hidden lg:!inline-flex'>START YOUR TREATMENT TODAY</a>
                    </div>
                    <div>
                        <Image src="/images/products.png" alt="products" width="857" height="711" className='ml-auto mr-auto lg:mr-0' />
                        <div className='lg:hidden text-center'>
                            <a href='#' className='theme-btn !bg-white !text-green !text-sm !min-w-[285px] !h-11'>START YOUR TREATMENT TODAY</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-green absolute right-0 bottom-0 lg:top-0 w-full h-[270px] sm-h-80 md:h-96 lg:h-full lg:w-1/3 -z-[1]'></div>
        </section>
    )
}

export default Banner