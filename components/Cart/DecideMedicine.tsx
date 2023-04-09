import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const DecideMedicine = ({ nextStep, register, errors }: any) => {
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5 min-h-[calc(100vh_-_81px)]'>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className='bg-white rounded-3xl pt-8 px-4 sm:px-12 lg:px-[90px] pb-5 min-h-[695px] flex flex-col justify-between items-center'>
                    <div className='w-full'>
                        <div className='text-center pb-7'>
                            <h1 className='text-[22px]'>First Decided your preferred medication</h1>
                        </div>
                        <div className='max-w-[560px] mx-auto'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='relative'>
                                    <input
                                        type="radio"
                                        className='absolute hidden peer'
                                        value="generic viagra"
                                        id="generic-viagra"
                                        defaultChecked
                                        {...register("medicine", { required: true })}

                                    />
                                    <label htmlFor='generic-viagra' className='bg-gray100 text-dark rounded-3xl border-2 border-transparent p-4 cursor-pointer inline-block w-full peer-checked:border-green peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                        <p className='capitalize text‑inherit leading-none'>Generic Viagra</p>
                                        <span className='text-gray200 text-[13px]'>$34 per dose</span>
                                        <div className='mt-9'>
                                            <Image src="/images/generic-viagra.png" className='mx-auto' alt="product" width="209" height="208" />
                                        </div>
                                    </label>
                                    <CheckCircleIcon className='w-4 absolute top-4 right-4 text-green  hidden peer-checked:block' />
                                </div>
                                <div className='relative'>
                                    <input
                                        type="radio"
                                        className='absolute hidden peer'
                                        value="generic cialis"
                                        id="generic-cialis"
                                        {...register("medicine", { required: true })}
                                    />
                                    <label htmlFor='generic-cialis' className='bg-gray100 text-dark rounded-3xl border-2 border-transparent p-4 cursor-pointer inline-block w-full peer-checked:border-green peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                        <p className='capitalize text‑inherit leading-none'>Generic Cialis</p>
                                        <span className='text-gray200 text-[13px]'>$2.9 per dose</span>
                                        <div className='mt-9'>
                                            <Image src="/images/generic-cialis.png" className='mx-auto' alt="product" width="209" height="208" />
                                        </div>
                                    </label>
                                    <CheckCircleIcon className='w-4 text-green absolute top-4 right-4 hidden peer-checked:block' />
                                </div>
                            </div>
                            {errors?.medicine && <p className='text-heading text-xs mt-2'>Please select one option</p>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-5 max-w-[450px] mx-auto mt-14'>
                            <Link href="/recommendation" className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center'>
                                <ChevronLeftIcon className='w-6' />
                                <span>Back</span>
                            </Link>
                            <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center' onClick={nextStep} type="button">
                                <span>Next</span>
                                <ChevronRightIcon className='w-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DecideMedicine