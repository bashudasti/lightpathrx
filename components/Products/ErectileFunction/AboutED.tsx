import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import Image from 'next/image'
import { Bar } from '../../utilities/Bar'

const AboutED = () => {
    return (
        <section className='pt-[70px] pb-24'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='pt-12'>
                        <Image src="/images/ed.png" alt="ED" width="450" height="709" className='h-[263px] object-cover object-left-top rounded-3xl mx-auto mb-9 lg:m-0 lg:h-auto' />
                    </div>
                    <div>
                        <Bar float="left" />
                        <h3 className='text-[28px] sm:text-[32px] leading-tight font-bold'>What is <br /> <span className='text-green text-[28px] sm:text-[42px] leading-tight'>Erectile Dysfunction</span> <span className='text-[28px] sm:text-[42px] leading-tight'>(ED)?</span></h3>

                        <div className='mt-12'>
                            <Bar float="left" />
                            <h5 className='text-2xl sm:text-[34px] leading-tight mb-5 sm:mb-6'>Why does it happen?</h5>
                            <p>Erectile dysfunction, also known as impotence, refers to the condition where a man is unable to achieve or sustain an erection during sexual activity. This occurs when the penile chambers fail to produce and maintain the necessary pressure required for a full erection. Although sexual stimulation is typically enough to initiate an erection, men with ED struggle to maintain rigidity until ejaculation. The condition can stem from a variety of factors, including aging, hypertension, vascular disease, multiple sclerosis, prostate cancer treatments, stress, certain antidepressants, specific spinal cord injuries, and other causes.</p>
                        </div>

                        <div className='mt-12'>
                            <Bar float="left" />
                            <h5 className='text-2xl sm:text-[34px] leading-tight mb-5 sm:mb-6'>How does ED medication help?</h5>
                            <p>Prescription medication for ED - PDE5 inhibitors, has been clinically proven to be an effective treatment for ED. Have questions about side effects, an underlying cause, or an underlying condition? Our healthcare platform lets you get medical advice from expert providers about whether ED medication is right for you, without the stress of an in-person doctor visit.</p>
                        </div>
                        <div className='mt-12'>
                            <Bar float="left" />
                            <h5 className='text-2xl sm:text-[34px] leading-tight mb-5 sm:mb-6'>What are ED treatments available?</h5>
                            <p>In the United States, many ED pills are prescribed. Our expert medical advisors helped us determine which ED treatments we should offer through our platform, ranging from highly effective ED as-needed treatments (like Viagra®) to daily ED medications (like Cialis® generic). In addition to Hims, doctors sometimes prescribe medications such as vardenafil (Levitra®, Staxyn®) and alprostadil, a penile injection that is not available through our platform.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default AboutED