import Image from 'next/image'
import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'

const GetOnline = () => {
    return (
        <section className='pt-[90px] pb-28'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <Bar float='left' />
                        <h3 className='text-[28px] sm:text-[42px] leading-tight font-bold mb-9 lg:mb-0'>How to get Sildenafil online through <span className='text-green'>LightpathRx</span></h3>
                    </div>
                    <div className='text-right hidden lg:block'>
                        <a href='#' className='theme-btn !min-w-[155px]'>
                            Start Today
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:mt-[90px] gap-y-6 sm:gap-y-12 lg:gap-y-0'>
                    <div className='relative lg:max-w-[300px] flex gap-6 items-center lg:block'>
                        <div className='lg:w-[105px] lg:h-[101px]'>
                            <Image src="/images/effortless.png" alt="browse" width="71" height="101" />
                        </div>
                        <div>
                            <h5 className='mt-4 pb-1 text-base sm:text-lg capitalize lg:min-h-[60px]'>Effortless Consultation</h5>
                            <p className='text-dark text-sm'>Respond to a few inquiries regarding your symptoms and medical history.</p>
                        </div>
                    </div>
                    <div className='relative lg:mx-auto lg:max-w-[300px] flex gap-6 items-center lg:block'>
                        <div className='lg:w-[105px] lg:h-[101px]'>
                            <Image src="/images/connect-with-a-higher.png" alt="browse" width="105" height="101" />
                        </div>
                        <div>
                            <h5 className='mt-4 pb-1 text-base sm:text-lg capitalize '>Connect With A Healthcare Provider</h5>
                            <p className='text-dark text-sm'>A certified medical professional will assess whether treatment is appropriate for you.</p>
                        </div>
                    </div>
                    <div className='relative lg:ml-auto lg:max-w-[300px] flex gap-6 items-center lg:block'>
                        <div className='lg:w-[105px] lg:h-[101px]'>
                            <Image src="/images/free-shiping.png" alt="browse" width="86" height="99" />
                        </div>
                        <div>
                            <h5 className='mt-4 pb-1 text-base sm:text-lg capitalize lg:min-h-[60px]'>Free Shipping</h5>
                            <p className='text-dark text-sm'>If prescribed, your medication for erectile dysfunction will be sent to you discreetly at no additional cost.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-8 lg:hidden'>
                    <a href='#' className='theme-btn !min-w-[155px]'>
                        Start Today
                    </a>
                </div>
            </Wrapper>
        </section>
    )
}

export default GetOnline