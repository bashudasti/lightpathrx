import React from 'react'
import Wrapper from '../utilities/Wrapper'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <section>
            <Wrapper>
                <h2 className='text-2xl sm:text-[28px] leading-tight mb-8 md:mb-24 max-w-[930px] mx-auto'>Our belief is that the way you feel physically and mentally has a significant impact on how you <span className='text-green'>approach life</span>. Hence, we are working towards creating a future where individuals can tap into this power without any hindrances.</h2>

                <Image src="/images/about.png" alt="about" width="1170" height="693" className='mx-auto' />


            </Wrapper>

            <div className='border-t-[10px] md:border-t-0 border-gray100 pt-12 md:py-36  mt-12 md:mt-0'>
                <Wrapper>
                    <div className='space-y-12 sm:space-y-24'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-9 lg:gap-12 xl:gap-[120px]'>
                            <div className='lg:col-span-5 order-2 lg:order-1'>
                                <p className='text-[22px] leading-tight'>Our goal is to make it easy for people to attain happiness and good health by addressing and finding solutions for <span className='text-green'>health and wellness challenges</span>. We understand that each individual is unique, which is why we offer <span className='text-green'>personalized</span> care that is tailored to deliver desired results. Furthermore, we strive to promote acceptance and <span>normalization</span> of these challenges.</p>
                            </div>
                            <div className='lg:col-span-7 order-1 lg:order-2'>
                                <Image src="/images/about-1.png" alt="about" width="600" height="500" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-9 lg:gap-12 xl:gap-[120px]'>
                            <div className='col-span-6'>
                                <Image src="/images/about-2.png" alt="about" width="600" height="500" />
                            </div>
                            <div className='col-span-6'>
                                <p className='text-[22px] leading-tight lg:max-w-[450px]'>Our mission is driven by a strong <span className='text-green'>personal connection</span> because, like our customers, we are also users of our own products and services. This is what makes <span className='text-green'>Lightpathrx</span> a powerful force in the industry.</p>
                            </div>

                        </div>
                    </div>
                </Wrapper>
            </div>
        </section>
    )
}

export default AboutUs