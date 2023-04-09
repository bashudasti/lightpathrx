import { ArrowLongRightIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { Bar } from '../utilities/Bar'

const AvailableTreatments = () => {
    return (
        <section className='py-16 sm:py-28'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <Bar float="left" />
                        <h3 className='text-[28px] sm:text-[54px] leading-tight font-bold md:max-w-xs'>Healthcare Anytime, Anywhere</h3>
                        <a href="#" className='text-green inline-flex items-center gap-5 mt-3'>See available treatments <ArrowLongRightIcon className='w-5' /> </a>
                    </div>
                    <p className='hidden lg:block'>Lightpath Rx continuously updates available treatments to give you the help you need. Our growing list of available treatments includes various medication options, dosage strengths, and treatment schedules for every budget and lifestyle. See our available treatments below:</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-[73px] sm:mt-24 gap-y-16'>
                    <div className='text-center max-w-[335px] ml-auto mr-auto'>
                        <div className='w-[120px] h-[116px] ml-auto mr-auto flex items-end justify-center'>
                            <Image src="/images/ed-medication.png" alt="ed-medication" width="120" height="86" className='mx-auto' />
                        </div>
                        <h5 className='font-medium text-[34px] sm:text-4xl mt-6 mb-4'>ED Medication</h5>
                        <p>Need erectile dysfunction medication? Lightpath Rx offers a diverse selection of ED treatment plans that suit every budget and lifestyle.</p>
                    </div>

                    <div className='text-center max-w-[335px] ml-auto mr-auto'>
                        <div className='w-[120px] h-[116px] ml-auto mr-auto flex items-end justify-center'>
                            <Image src="/images/antidepressants.png" alt="ed-medication" width="75" height="116" className='mx-auto' />
                        </div>

                        <h5 className='font-medium text-[34px] sm:text-4xl mt-6 mb-4'>Antidepressants</h5>
                        <p>Get the help you need completely online. Lightpath Rx offers a variety of antidepressant medications for mental health treatment plans.</p>
                    </div>

                    <div className='text-center max-w-[335px] ml-auto mr-auto'>
                        <div className='w-[120px] h-[116px] ml-auto mr-auto flex items-end justify-center'>
                            <Image src="/images/sleep-aid.png" alt="ed-medication" width="101" height="88" className='mx-auto' />
                        </div>
                        <h5 className='font-medium text-[34px] sm:text-4xl mt-6 mb-4'>Sleep Aid</h5>
                        <p>Regulate your sleeping habits with the help of FDA-approved sleep aid medication! Lightpath Rx offers a selection of sleep aid medications in various dosage strengths to fit your needs.</p>
                    </div>

                    <div className='text-center max-w-[335px] ml-auto mr-auto'>
                        <div className='w-[120px] h-[116px] ml-auto mr-auto flex items-end justify-center'>
                            <Image src="/images/hair-loss.png" alt="ed-medication" width="97" height="106" className='mx-auto' />
                        </div>
                        <h5 className='font-medium text-[34px] sm:text-4xl mt-6 mb-4'>Hair Loss</h5>
                        <p>Restore your healthy hair growth with FDA-approved treatments for hair loss! Lightpath Rx offers various treatments and medications for both men and women.</p>
                    </div>

                    <div className='text-center max-w-[390px] ml-auto mr-auto'>
                        <div className='w-[120px] h-[116px] ml-auto mr-auto flex items-end justify-center'>
                            <Image src="/images/hormone-replacement.png" alt="ed-medication" width="96" height="96" className='mx-auto' />
                        </div>
                        <h5 className='font-medium text-[34px] sm:text-4xl leading-tight mt-6 mb-4'>Hormone Replacement</h5>
                        <p>Restore your youthful energy and vigor with the right hormone replacement therapy! Lightpath Rx offers FDA-approved hormone replacement medication for both men and women.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AvailableTreatments