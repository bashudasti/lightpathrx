import React from 'react'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';


const Step3 = ({ nextStep, register, errors, prevStep, isValid }: any) => {
    return (
        <>
            <p className='text-heading mx-auto mt-7 text-center mb-4 text-[15px] leading-tight'>What outcomes do you desire to achieve?</p>
            <div className='space-y-3 max-w-[408px] mx-auto'>
                <div className='relative'>
                    <input
                        type="radio"
                        value="improvement"
                        id="improvement"
                        className='sr-only peer'
                        {...register("achieve", { required: true })}
                    />
                    <label htmlFor="improvement" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green text-[15px] capitalize'>
                        Improving Erectile Function During Sexual Activity
                    </label>
                    <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                    <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                </div>
                <div className='relative'>
                    <input
                        type="radio"
                        value="boosting"
                        id="boosting"
                        className='sr-only peer'
                        {...register("achieve", { required: true })}
                    />
                    <label htmlFor="boosting" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green text-[15px] capitalize'>
                        Boosting My Sex Drive
                    </label>
                    <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                    <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                </div>
                <div className='relative'>
                    <input
                        type="radio"
                        value="both"
                        id="both"
                        className='sr-only peer'
                        {...register("achieve", { required: true })}
                    />
                    <label htmlFor="both" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green text-[15px] capitalize'>
                        Both Options
                    </label>
                    <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                    <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-[18px] hidden peer-checked:block' />
                </div>
            </div>

            <div className='flex gap-5 mt-7 sm:mt-[52px]'>
                <button type="button" className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center' onClick={prevStep}>
                    <ChevronLeftIcon className='w-6' />
                    <span>Previous</span>
                </button>
                <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center disabled:bg-[#cccccc]' type="button" disabled={!isValid} onClick={nextStep}>
                    <span>Next</span>
                    <ChevronRightIcon className='w-6' />
                </button>
            </div>
        </>
    )
}

export default Step3