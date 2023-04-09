import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Image from 'next/image'

const HowProductWork = () => {
    return (
        <section className='py-12 sm:py-[85px] bg-lightblue bg-opacity-10'>
            <Wrapper>
                <div className='mb-11'>
                    <Bar float='left' />
                    <h3 className='text-[28px] sm:text-[34px] leading-tight'>How Tadalafil works</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11'>
                    <div>
                        <div className=''>
                            <Image src="/images/tadefail-1.png" alt="Product" className='rounded-3xl' width="360" height="360" />
                        </div>
                        <h6 className='text-xl mt-6 mb-3'>Inhibits PDE5</h6>
                        <p className='text-dark text-sm'>Viagra® is an oral ED medication that works by suppressing an enzyme in the body called PDE5.</p>
                    </div>
                    <div>
                        <div className=''>
                            <Image src="/images/tadefail-2.png" alt="Product" className='rounded-3xl' width="360" height="360" />
                        </div>
                        <h6 className='text-xl mt-6 mb-3'>Enhances blood circulation</h6>
                        <p className='text-dark text-sm'>When the activity of PDE5 is reduced, the flow of blood throughout the body, including the penis, is enhanced.</p>
                    </div>
                    <div>
                        <div className=''>
                            <Image src="/images/tadefail-3.png" alt="Product" className='rounded-3xl' width="360" height="360" />
                        </div>
                        <h6 className='text-xl mt-6 mb-3'>Produces firm erections</h6>
                        <p className='text-dark text-sm'>By increasing blood flow to the penis, Viagra® enables the attainment of firmer and more gratifying erections when sexually aroused.</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default HowProductWork