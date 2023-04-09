import React from 'react'
import InputLabel from '../../utilities/InputLabel'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import StepHeader from '../StepHeader';


const Step1 = ({ nextStep, register, errors, isValid }: any) => {
    return (
        <>
            <div className='space-y-6 mt-7'>
                <div className='relative'>
                    <InputLabel htmlFor="firstname" name="Patient First Name" />
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className='input-control'
                        {...register('firstname', { required: true })}
                    />
                    {errors?.firstname && <p className='text-green text-xs mt-2'>First Name is required</p>}
                </div>
                <div className='relative'>
                    <InputLabel htmlFor="lastname" name="Patient Last Name" />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className='input-control'
                        {...register('lastname', { required: true })}
                    />
                    {errors?.lastname && <p className='text-green text-xs mt-2'>Last Name is required</p>}
                </div>
                <div className='relative'>
                    <InputLabel htmlFor="birthday" name="Date of Birth" />
                    <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        className='input-control'
                        placeholder='MM-DD-YYYY'
                        {...register('birthday', { required: true })}
                    />
                    {errors?.birthday && <p className='text-green text-xs mt-2'>Date of Birth is required</p>}
                </div>
            </div>

            <div className='flex gap-5 mt-7 sm:mt-[52px]'>
                <Link href="/signup" className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center'>
                    <ChevronLeftIcon className='w-6' />
                    <span>Previous</span>
                </Link>
                <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center disabled:bg-[#cccccc]' type="button" disabled={!isValid} onClick={nextStep}>
                    <span>Next</span>
                    <ChevronRightIcon className='w-6' />
                </button>
            </div>

        </>
    )
}

export default Step1