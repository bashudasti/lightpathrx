import React from 'react'
import { PencilIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Profile = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            <div className='border-2 border-gray200 border-opacity-40 rounded-lg py-4 sm:py-[22px] px-4 sm:px-8'>
                <h1 className='text-lg md:text-[22px]'>Joseph Petchonka</h1>
                <ul className='mt-5'>
                    <li className='flex items-center pb-1 gap-1'>
                        <p className='text-lg text-dark'>Email:</p>
                        <span className='text-lg text-left text-gray200'>joepetchonka@gmail.com</span>
                    </li>
                    <li className='flex items-center py-1 gap-1'>
                        <p className='text-lg text-dark'>Phone Number:</p>
                        <span className='text-lg text-left text-gray200'>(123)456-7890</span>
                    </li>
                    <li className='flex items-center py-1 gap-1'>
                        <p className='text-lg text-dark'>DOB:</p>
                        <span className='text-lg text-left text-gray200'>02 34 5678</span>
                    </li>
                    <li className='flex items-center pt-1 gap-1'>
                        <p className='text-lg text-dark'>Password:</p>
                        <span className='text-lg text-left text-gray200'>*********</span>
                    </li>

                </ul>
            </div>
            <div className='space-y-7'>
                <div className='border-2 border-gray200 border-opacity-40 rounded-lg pt-14 py-4 pr-4 pl-4 sm:pl-7 relative'>
                    <button type='button' className='bg-gray200 bg-opacity-10 uppercase text-dark text-base font-medium flex items-center justify-center gap-1 rounded-[3px] w-28 h-10 absolute right-4 top-3'>
                        <PencilIcon className='w-5 h-5' />
                        <span>Edit</span>
                    </button>
                    <p className='uppercase text-heading text-[15px]'>PERSONAL AND SHIPPING INFO</p>
                    <h3 className='text-lg font-medium text-heading mt-1 mb-3'>Joseph Petchonka</h3>

                    <p className='text-gray200'>(631)552-8701 9</p>
                    <p className='text-gray200'>SALEM ROAD</p>
                    <p className='text-gray200'>Centereach NY, 11720</p>
                </div>
                <div className='border-2 border-gray200 border-opacity-40 rounded-lg py-4 pr-4 pl-4 sm:pl-7 relative'>
                    <button type='button' className='bg-gray200 bg-opacity-10 uppercase text-dark text-base font-medium flex items-center justify-center gap-1 rounded-[3px] w-28 h-10 absolute right-4 top-3'>
                        <PencilIcon className='w-5 h-5' />
                        <span>Edit</span>
                    </button>
                    <p className='uppercase text-heading text-[15px] mb-4'>BILLING INFO</p>

                    <p className='text-gray200'>123 Insert Address Here</p>
                    <p className='text-gray200'>Lorem, NY, 12345</p>
                </div>
                <div className='border-2 border-gray200 border-opacity-40 rounded-lg py-4 pr-4 pl-4 sm:pl-7 relative'>
                    <button type='button' className='bg-gray200 bg-opacity-10 uppercase text-dark text-base font-medium flex items-center justify-center gap-1 rounded-[3px] w-28 h-10 absolute right-4 top-3'>
                        <PencilIcon className='w-5 h-5' />
                        <span>Edit</span>
                    </button>
                    <p className='uppercase text-heading text-[15px]'>PAYMENT INFO</p>
                    <div className='mt-5'>
                        <Image src="/images/cards.png" width="111" height="23" alt="payment" />
                    </div>
                    <ul className='mt-6'>
                        <li className='flex justify-between items-center border-t-2 border-gray200 border-opacity-50 py-2'>
                            <p className='font-medium text-base lg:text-lg text-heading'>CC# :</p>
                            <span className='text-base lg:text-lg text-right text-gray200'>1234********7890</span>
                        </li>
                        <li className='flex justify-between items-center border-t-2 border-gray200 border-opacity-50 py-2'>
                            <p className='font-medium text-base lg:text-lg text-heading'>Exp. Date:</p>
                            <span className='text-base lg:text-lg text-right text-gray200'>01/28</span>
                        </li>
                        <li className='flex justify-between items-center border-t-2 border-gray200 border-opacity-50 py-2'>
                            <p className='font-medium text-base lg:text-lg text-heading'>CVC:</p>

                            <span className='text-base lg:text-lg text-right text-gray200'>****</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile