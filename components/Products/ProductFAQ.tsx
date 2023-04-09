import React, { useState } from 'react'
import Wrapper from '../utilities/Wrapper'
import { Bar } from '../utilities/Bar'
import FAQ from '../utilities/FAQ'
import Image from 'next/image'
import { useRouter } from 'next/router'


const ProductFAQ = ({ data }: any) => {


    const router = useRouter();


    return (
        <section className={`${router.asPath === "/tadalafil" ? "border-y-[10px]" : undefined} border-gray100 pt-32 pb-24`}>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2 '>
                    <div className='max-w-sm'>
                        <Bar float="left" />
                        <h3 className='text-3xl sm:text-[42px] leading-tight font-bold'><span className='text-green'>Frequently Asked Questions</span> about ED medication</h3>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <FAQ data={data} />
                    </div>
                </div>

                {router.asPath === "/tadalafil" &&
                    <div className='bg-heading rounded-3xl shadow-4 px-8 sm:px-20 xl:px-[120px] pb-8 pt-11 sm:py-14 lg:py-24 mt-24 relative'>
                        <Image src="/images/ic.png" alt="logo" width="189" height="206" className='absolute right-0 lg:left-9 top-5' />
                        <div className='grid grid-cols-1 md:grid-cols-12 relative z-10'>
                            <div className='col-span-12 lg:col-span-9 xl:col-span-8'>
                                <div className='sm:hidden'><Bar float='left' /></div>
                                <h5 className='text-white capitalize text-2xl sm:text-[34px] leading-tight mb-1.5'>IMPORTANT SAFETY INFORMATION</h5>
                                <p className='text-white opacity-80 hidden sm:block'>The following safety information is important to know before …</p>
                            </div>
                            <div className='col-span-12 lg:col-span-3 xl:col-span-4 lg:text-right mt-6 lg:mt-0'>
                                <a href='#' className='theme-btn !min-w-[171px]'>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </Wrapper>
        </section>
    )
}

export default ProductFAQ