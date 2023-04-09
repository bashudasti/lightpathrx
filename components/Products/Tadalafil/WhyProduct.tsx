import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Image from 'next/image'

const WhyProduct = () => {
    return (
        <section className='pt-20 pb-36'>
            <Wrapper>
                <div className='mb-6 sm:mb-[90px]'>
                    <Bar float='center' />
                    <h2 className='font-bold text-3xl sm:text-[54px] leading-tight text-center'>Why <span className='text-green'>Tadalafil</span>?</h2>
                </div>
                <div className='relative'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[435px]'>
                        <div className='max-w-[450px]'>
                            <h5 className='text-xl'>Flexible Treatment with Tadalafi</h5>
                            <p className='mt-4 mb-6'>With Tadalafil, you can choose to take it daily or on an as-needed basis, giving you control over your sex life.</p>
                        </div>
                        <div>
                            <Image src="/images/tadalafil-pill.png" alt="pills" className='lg:absolute -top-12 left-1/2 lg:-translate-x-1/2 mx-auto' width="505" height="486" />
                        </div>
                        <div className='max-w-[450px] lg:place-self-end relative z-10 mt-6 sm:mt:0'>
                            <h5 className='text-xl'>Same Ingredient, Lower Cost</h5>
                            <p className='mt-4 mb-6'>Tadalafil is a generic version of Cialis® made with the same active ingredient but costs only 10% of the brand name drug.</p>
                            <a href='#' className='theme-btn !min-w-[180px]'>GET STARTED</a>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default WhyProduct