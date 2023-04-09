import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import Image from 'next/image'
import { Bar } from '../../utilities/Bar'

const IntroductionTaking = () => {
    return (
        <section className='pb-0 pt-14 sm:py-16'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 items-center'>
                    <div>
                        <Image src="/images/intro-1.png" alt="Intro" className='rounded-3xl' width="600" height="709" />
                    </div>
                    <div className='lg:pl-12 xl:pl-24'>
                        <h4 className='text-lg font-bold'>Instructions for Taking Tadalafil</h4>
                        <Bar float='left' />
                        <div className='mb-8'>
                            <h5 className='text-[26px] sm:text-[34px] leading-tight mb-4 sm:mb-5'>Regarding Tadalafil</h5>
                            <p className='lg:max-w-md'>Tadalafil is an inexpensive generic version of Cialis® with the same active ingredient as the brand name drug. You can get the same active ingredient as Cialis® at a more affordable price of over 90% less by ordering Tadalafil through Lightpathrx.</p>
                        </div>
                        <div className='mb-8'>
                            <h5 className='text-[26px] sm:text-[34px] leading-tight mb-4 sm:mb-5'>Taking Tadalafil Daily</h5>
                            <p className='lg:max-w-md'>Tadalafil can be taken once a day in a low dose (2.5mg or 5mg dosage) and gradually builds up in your system. This allows you to be ready for sexual activity at any time, without the need to wait for the medication to take effect.</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 items-center mt-12 lg:mt-28'>
                    <div className='order-2 lg:order-1'>
                        <div className='mb-8'>
                            <h5 className='text-[26px] sm:text-[34px] leading-tight mb-4 sm:mb-5'>Whenever required</h5>
                            <p className='lg:max-w-md'>If you wish to be prepared for sexual activity, take the as-needed or “episodic” dosage of tadalafil. It’s recommended to take the pill prior to the intended sexual encounter (usually reaching peak effect 2 hours after consumption), and keep in mind that its impact may last up to 36 hours. The as-needed tadalafil dosage is available in higher doses (5mg, 10mg, or 20mg) compared to the daily-use tadalafil. Therefore, it’s advisable to refrain from using it for multiple consecutive days.</p>
                        </div>
                        <div className='mb-8'>
                            <h5 className='text-[26px] sm:text-[34px] leading-tight mb-4 sm:mb-5'>Common Tadalafil adverse effects</h5>
                            <p className='lg:max-w-md'>The usual side effects of the generic form of Cialis® are headaches, indigestion, heartburn, back pain, muscle aches, facial flushing, nasal congestion, cold symptoms, dizziness, changes in vision, and alterations in blood pressure. In case you experience any of these symptoms, your healthcare provider can assist you in reducing or treating them.</p>
                            <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 mt-6'>
                                <a href='#' className='theme-btn !min-w-0 flex-auto'>
                                    Start Today
                                </a>
                                <a href='#' className='theme-btn outline-btn !min-w-0 flex-auto'>
                                    Begin Your Treatment Today
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <Image src="/images/intro-2.png" alt="Intro" className='rounded-3xl' width="600" height="728" />
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default IntroductionTaking