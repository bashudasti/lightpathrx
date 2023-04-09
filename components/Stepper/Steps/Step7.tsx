import React, { useState } from 'react'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


const Step7 = ({ register, errors, prevStep, isValid }: any) => {
    const [note, setNote] = useState<string | boolean>(false);
    return (
        <>
            <p className='text-heading mx-auto mt-7 text-center mb-4 text-[15px] leading-tight'>Are you experiencing fatigue or a lack of energy?</p>
            <div className='max-w-[290px] mx-auto flex gap-6'>
                <div className='relative w-full'>
                    <input
                        type="radio"
                        value="yes"
                        id="yes"
                        className='sr-only peer'
                        {...register("lackofenergy", {
                            required: true,
                            onChange: (e: any) => { setNote(e.target.value) }
                        })}
                    />
                    <label htmlFor="yes" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green text-[15px] capitalize'>
                        Yes
                    </label>
                    <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                    <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-4 hidden peer-checked:block' />
                </div>
                <div className='relative w-full'>
                    <input
                        type="radio"
                        value="no"
                        id="no"
                        className='sr-only peer'
                        {...register("lackofenergy", {
                            required: true,
                            onChange: (e: any) => { setNote(e.target.value) }
                        })}
                    />
                    <label htmlFor="no" className='rounded-lg border-2 text-heading border-[#50b37540] w-full flex justify-between items-center py-3 pr-3 pl-11 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green text-[15px] capitalize'>
                        No
                    </label>
                    <span className='w-4 h-4 rounded-full bg-green bg-opacity-40 block absolute left-3 top-[18px] peer-checked:hidden'></span>
                    <CheckCircleIcon className='w-5 h-5 text-green absolute left-3 top-4 hidden peer-checked:block' />
                </div>
            </div>
            {note === "yes" &&
                <div className='mt-8 sm:mt-12'>
                    <label htmlFor="note" className='text-sm text-heading mb-2'>Please write down additional notes.</label>
                    <textarea name="note" id="note" placeholder='Test text here...' className='input-control'></textarea>

                    <div className='flex flex-col-reverse sm:flex-row my-4 gap-4 sm:gap-6'>
                        <div className='flex-grow flex-shrink'>
                            <p className='text-dark text-[15px] leading-tight'>Please include any additional information you would like the doctor to know</p>
                            <span className='text-[13px] leading-tight text-gray200'>*supported file types: *.jpg, *.png, *.jpeg</span>
                        </div>
                        <div className='relative flex-grow-0 flex-shrink-0'>
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-[3px] bg-white text-green focus-within:outline-none border border-green text-[15px] py-3 px-7 text-center block sminline-block"
                            >
                                <span>Upload File</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            id="termsncondition"
                            name="termsncondition"
                            type="checkbox"
                            className="h-4 w-4 rounded border-2 border-green text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="termsncondition" className="ml-2 block text-sm text-gray200 cursor-pointer">
                            I agree to the <Link href="#" className='text-green'>Terms and Conditions</Link>, <Link href="#" className='text-green'>Privacy Policy</Link>, and <Link href="#" className='text-green'>Telehealth Consent</Link>.
                        </label>
                    </div>
                </div>
            }

            <div className='flex gap-5 mt-5'>
                <button type="button" className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center' onClick={prevStep}>
                    <ChevronLeftIcon className='w-6' />
                    <span>Previous</span>
                </button>
                <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center disabled:bg-[#cccccc]' disabled={!isValid} type="submit">
                    <span>Submit</span>
                    <HandThumbUpIcon className='w-6' />
                </button>
            </div>
        </>
    )
}

export default Step7