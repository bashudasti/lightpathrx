import React from 'react'
import Wrapper from '../utilities/Wrapper'
import { Bar } from '../utilities/Bar'
import ReactPlayer from 'react-player'


const AboutBanner = () => {
    return (
        <section className='pt-14 sm:pt-16 pb-8 sm:pb-[332px] bg-gray100'>
            <Wrapper>
                <span className='text-heading block mb-2'>About us</span>
                <Bar float='left' />
                <h1 className='text-[32px] lg:text-[46px] font-bold leading-tight mt-5 sm:mb-8 md:mb-16 max-w-[932px]'>We strive to enhance the overall <span className='text-green'>health and well-being</span> of the world by advocating and supporting <span className='text-green'>better health practices.</span></h1>


            </Wrapper>
        </section>
    )
}

export default AboutBanner