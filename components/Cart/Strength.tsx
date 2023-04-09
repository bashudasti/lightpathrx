import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const MedicineStrong = ({ nextStep, prevStep, register, errors }: any) => {
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5 min-h-[calc(100vh_-_81px)]'>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className='bg-white rounded-3xl pt-8 px-4 sm:px-12 lg:px-[90px] pb-5 min-h-[695px] flex flex-col justify-between items-center'>
                    <div className='w-full'>
                        <div className='text-center pb-7'>
                            <h1 className='text-[22px]'>How strong per serving you think you need</h1>
                        </div>
                        <div className='space-y-[10px] max-w-[450px] mx-auto'>
                            <div className='relative'>
                                <input
                                    type="radio"
                                    value="beginner"
                                    id="beginner"
                                    className='absolute opacity-0 peer'
                                    defaultChecked 
                                    {...register("strength", { required: true })}
                                />
                                <label htmlFor="beginner" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Beginner</p>
                                    <p className='capitalize text-inherit text-[15px]'>2.5mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>
                            <div className='relative'>
                                <input
                                    type="radio"
                                    {...register("strength", { required: true })}
                                    value="intermediate"
                                    id="intermediate"
                                    className='absolute opacity-0 peer'
                                />
                                <label htmlFor="intermediate" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Intermediate</p>
                                    <p className='capitalize text-inherit text-[15px]'>5mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>
                            <div className='relative'>
                                <input
                                    type="radio"
                                    {...register("strength", { required: true })}
                                    value="strong"
                                    id="strong"
                                    className='absolute opacity-0 peer' />
                                <label htmlFor="strong" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Strong</p>
                                    <p className='capitalize text-inherit text-[15px]'>10mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>

                            <div className='relative'>
                                <input
                                    type="radio"
                                    {...register("strength", { required: true })}
                                    value="regular"
                                    id="regular"
                                    className='absolute opacity-0 peer'
                                />
                                <label htmlFor="regular" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Regular</p>
                                    <p className='capitalize text-inherit text-[15px]'>5mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>

                            <div className='relative'>
                                <input
                                    type="radio"
                                    {...register("strength", { required: true })}
                                    value="advanced"
                                    id="advanced"
                                    className='absolute opacity-0 peer'
                                />
                                <label htmlFor="advanced" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Advanced</p>
                                    <p className='capitalize text-inherit text-[15px]'>10mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>

                            <div className='relative'>
                                <input
                                    type="radio"
                                    {...register("strength", { required: true })}
                                    value="maximum"
                                    id="maximum"
                                    className='absolute opacity-0 peer' />
                                <label htmlFor="maximum" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                    <p className='capitalize text-inherit text-[15px]'>Maximum</p>
                                    <p className='capitalize text-inherit text-[15px]'>20mg</p>
                                </label>
                                <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                                <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                            </div>
                        </div>
                        {errors?.strength && <p className='text-heading text-xs mt-2'>Please select one option</p>}
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-5 max-w-[450px] mx-auto mt-14'>
                            <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center' type="button" onClick={prevStep}>
                                <ChevronLeftIcon className='w-6' />
                                <span>Back</span>
                            </button>
                            <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center' type="button" onClick={nextStep}>
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

export default MedicineStrong