import React from 'react'
import Wrapper from '../utilities/Wrapper'
import { Bar } from '../utilities/Bar'
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <section className='pt-[90px] pb-28'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Bar float='left' />
                        <h3 className='text-3xl sm:text-[42px] leading-tight font-bold mb-9 lg:mb-0'>See how <span className='text-green'>LightpathRx</span> works</h3>
                    </div>
                    <p className='max-w-md lg:ml-auto'>Lightpath Rx makes healthcare as accessible, convenient, and affordable as possible. With Lightpath Rx’s online platform, everything you need to choose and order your preferred treatment can be done completely online!</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-[90px] gap-y-5 lg:gap-y-0'>
                    <div className='relative lg:max-w-[300px] lg:after:bg-[url("/images/bar.png")] lg:after:h-[3px] lg:after:w-full lg:after:absolute lg:after:-top-3.5 lg:after:left-[140px] pl-24 lg:pl-0'>
                        <div>
                            <span className='w-[50px] h-[50px] rounded-full bg-green border-2 border-white flex justify-center items-end text-[28px] text-white pb-1 shadow-1 absolute left-0 lg:left-16 top-7 lg:-top-9'>1</span>
                            <Image src="/images/browse.png" alt="browse" width="71" height="101" />
                        </div>
                        <h5 className='mt-4 pb-1 text-lg capitalize '>Browse Available Treatments</h5>
                        <p className='text-dark text-sm'>All available treatments can be viewed at the click of a button. Choose the treatment plan and medication that best suits your needs! Your selection will be reviewed by a US-licensed physician to ensure your compatibility with the treatment.</p>
                    </div>
                    <div className='relative lg:max-w-[300px] lg:after:bg-[url("/images/bar.png")] lg:after:h-[3px] lg:after:w-full lg:after:absolute lg:after:-top-3.5 lg:after:left-[140px] pl-24 lg:pl-0'>
                        <div>
                            <span className='w-[50px] h-[50px] rounded-full bg-green border-2 border-white flex justify-center items-end text-[28px] text-white pb-1 shadow-1 absolute left-0 lg:left-16 top-7 lg:-top-9'>2</span>
                            <Image src="/images/treatment.png" alt="browse" width="116" height="94" />
                        </div>
                        <h5 className='mt-4 pb-1 text-lg capitalize '>Confirm Your Treatment</h5>
                        <p className='text-dark text-sm'>Once a selection has been made, you may proceed to confirm your selection and process your order.</p>
                    </div>
                    <div className='relative lg:max-w-[300px] pl-24 lg:pl-0'>
                        <div>
                            <span className='w-[50px] h-[50px] rounded-full bg-green border-2 border-white flex justify-center items-end text-[28px] text-white pb-1 shadow-1 absolute left-0 lg:left-16 top-7 lg:-top-9'>3</span>
                            <Image src="/images/quick-health.png" alt="browse" width="85" height="92" />
                        </div>
                        <h5 className='mt-4 pb-1 text-lg capitalize '>Quick Health Review</h5>
                        <p className='text-dark text-sm'>A quick health review helps your assigned US-licensed physician to determine the appropriate treatment based on your selection. Simply answer a few questions related to your health to finalize your order. No video calls or in-person visits required!</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default HowItWorks