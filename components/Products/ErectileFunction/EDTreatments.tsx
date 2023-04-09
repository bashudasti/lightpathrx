import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Image from 'next/image'
import Link from 'next/link'

const EDTreatments = () => {
    return (
        <section className='bg-lightblue bg-opacity-10 pt-12 md:pt-32'>
            <Wrapper>
                <div className='mb-11'>
                    <Bar float='left' />
                    <h3 className='text-[28px] sm:text-[32px] leading-tight font-bold'><span className='block text-[28px] sm:text-[42px] text-green'>ED treatments,</span> now made simple.</h3>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-11 -mb-24'>
                    <div>
                        <Image src="/images/treatment1.png" alt="treatment" width="360" height="360" className='rounded-3xl mx-auto lg:mx-0' />
                        <h5 className='text-xl mt-6 mb-3'>Various ED treatments are available</h5>
                        <p className='text-sm text-dark'>Erectile dysfunction medications, whether designed for as-needed or daily use, have been approved by the Food and Drug Administration (FDA). Therefore, you can choose the medication that suits your needs without worrying about its safety and efficacy.</p>
                    </div>
                    <div>
                        <Image src="/images/treatment2.png" alt="treatment" width="360" height="360" className='rounded-3xl mx-auto lg:mx-0' />
                        <h5 className='text-xl mt-6 mb-3'>Expert online consultation - All done privately</h5>
                        <p className='text-sm text-dark'>In order to help you determine the best course of action for your situation, our licensed providers offer nonjudgmental support to assist you in discussing your sexual life or any related concerns.</p>
                    </div>
                    <div>
                        <Image src="/images/treatment3.png" alt="treatment" width="360" height="360" className='rounded-3xl mx-auto lg:mx-0' />
                        <h5 className='text-xl mt-6 mb-3'>The same amount of effectiveness for 95% less</h5>
                        <p className='text-sm text-dark'>Why pay more for the identical active ingredient? Sildenafil, the generic version of Viagra, which is the most widely used treatment for erectile dysfunction, contains the same active ingredient as Viagra® but is significantly less expensive.</p>
                    </div>
                </div>

                <div className='rounded-3xl bg-heading py-8 sm:py-14 px-8 sm:px-[120px] relative -bottom-52'>
                    <h4 className='text-white text-lg sm:text-[28px] leading-tight font-bold max-w-[600px]'>Get evaluated in the convenience of your home and get your prescribed medication at a low price.</h4>
                    <ul className='my-6 space-y-3'>
                        <li className='text-sm sm:text-base text-white flex gap-4 items-center'>
                            <span className='bg-green w-5 h-5 rounded-full text-heading text-[11px] leading-none flex items-center justify-center'>1</span>
                            Answer some questions
                        </li>
                        <li className='text-sm sm:text-base text-white flex gap-4 items-center'>
                            <span className='bg-green w-5 h-5 rounded-full text-heading text-[11px] leading-none flex items-center justify-center'>2</span>
                            Consult with a licensed provider
                        </li>
                        <li className='text-sm sm:text-base text-white flex gap-4 items-center'>
                            <span className='bg-green w-5 h-5 rounded-full text-heading text-[11px] leading-none flex items-center justify-center'>3</span>
                            Get ED pills delivered, if prescribed
                        </li>
                    </ul>
                    <Link href="#" className='bg-primary text-white rounded-[3px] text-sm sm:text-lg text-center py-4 px-[39px] inline-block'>Start Here</Link>

                    <Image src="/images/treatment-bottles.png" alt="" width="826" height="704" className='xl:absolute -right-[205px] -bottom-[185px] bottlesRigh -mb-28 sm:-mb-[240px] xl:mb-0' />
                </div>
            </Wrapper>
        </section>
    )
}

export default EDTreatments