import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Doses = ({ prevStep, register, errors }: any) => {
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5 min-h-[calc(100vh_-_81px)]'>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className='bg-white rounded-3xl pt-8 px-4 sm:px-12 lg:px-[90px] pb-5 min-h-[695px] flex flex-col justify-between items-center'>
                    <div className='w-full'>
                        <div className='text-center pb-7'>
                            <h1 className='text-[22px]'>How many times you believe you will take the medication each month</h1>
                        </div>
                        <div className='max-w-lg mx-auto'>
                            <div className='grid grid-cols-3 gap-2 sm:gap-[18px]'>
                                <div>
                                    <input
                                        type="radio"
                                        value="eight-doses"
                                        id="eight-doses"
                                        className='absolute hidden peer'
                                        defaultChecked 
                                        {...register("dose", { required: true })}

                                    />
                                    <label
                                        htmlFor="eight-doses"
                                        className='rounded-lg border-2 text-heading text-base border-[#50b37540] w-full flex justify-center items-center py-2 sm:py-3 px-3 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                        8 doses
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="twelve-doses"
                                        id="twelve-doses"
                                        className='absolute hidden peer'
                                        {...register("dose", { required: true })}

                                    />
                                    <label
                                        htmlFor="twelve-doses"
                                        className='rounded-lg border-2 text-heading text-base border-[#50b37540] w-full flex justify-center items-center py-2 sm:py-3 px-3 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                        12 doses
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="sixteen-doses"
                                        id="sixteen-doses"
                                        className='absolute hidden peer'
                                        {...register("dose", { required: true })}

                                    />
                                    <label
                                        htmlFor="sixteen-doses"
                                        className='rounded-lg border-2 text-heading text-base border-[#50b37540] w-full flex justify-center items-center py-2 sm:py-3 px-3 cursor-pointer peer-checked:border-[#50B375] peer-checked:bg-[#EAF4EF] peer-checked:text-green'>
                                        16 doses
                                    </label>
                                </div>
                            </div>
                            <div className='rounded-lg border-2 border-[#8f8f8f40] px-4 md:px-14 py-4 text-center my-5'>
                                <h2 className='text-2xl font-bold'>Your Price</h2>
                                <Image src="/images/doses.png" alt="product" width="296" height="354" className='mx-auto' />

                                <p className='text-base text-heading font-bold'>You chose Generic Viagra at “Beginner” level 8 does a moonth</p>
                                <span className='inline-block bg-green rounded-xl text-white text-3xl px-7 py-1 mt-2.5 mb-4 font-bold'><sup>$</sup>79.95</span>
                                <p className='text-sm text-gray200'>A physician will determine if this dosage is right for you, recommended a more appropriate dosage.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-5 max-w-[450px] mx-auto mt-14'>
                            <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-gray200 bg-opacity-10 text-gray200 text-sm md:text-lg rounded-[3px] justify-center' type="button" onClick={prevStep}>
                                <ChevronLeftIcon className='w-6' />
                                <span>Back</span>
                            </button>
                            <button className='flex-auto flex items-center capitalize gap-2 md:gap-3 p-2 md:p-4 bg-primary text-white text-sm md:text-lg rounded-[3px] justify-center' type="submit">
                                <span>Proceed to Checkout</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="_6afb44c570b8cc0431fcfc8bc23bf29b" data-name="6afb44c570b8cc0431fcfc8bc23bf29b" transform="translate(-39.761 -39.761)">
                                        <rect id="Rectangle_92" data-name="Rectangle 92" width="20" height="20" transform="translate(39.761 39.761)" fill="none" />
                                        <path id="Path_164" data-name="Path 164" d="M12.721,8.832a2.928,2.928,0,1,1-5.856,0,.732.732,0,1,0-1.464,0,4.392,4.392,0,1,0,8.785,0,.732.732,0,1,0-1.464,0Z" transform="translate(39.968 39.302)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_165" data-name="Path 165" d="M340.764,778.343V789a.9.9,0,0,0,.895.9h5.694a.732.732,0,1,1,0,1.463h-5.694A2.358,2.358,0,0,1,339.3,789V777.611a.732.732,0,0,1,.732-.732h14.641a.732.732,0,0,1,.732.732V782.9a.732.732,0,0,1-1.464,0v-4.556Z" transform="translate(-297.592 -732.73)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_166" data-name="Path 166" d="M394.128,1168.089l-1.177-2.354a2.359,2.359,0,0,0-2.11-1.3h-9.377a2.359,2.359,0,0,0-2.11,1.3l-1.177,2.354a.732.732,0,0,0,1.31.655l1.177-2.354a.9.9,0,0,1,.8-.495h9.377a.9.9,0,0,1,.8.495l1.177,2.354a.732.732,0,0,0,1.31-.655Z" transform="translate(-336.392 -1123.535)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_167" data-name="Path 167" d="M42.832,1603.564h4.88a.732.732,0,0,0,0-1.464h-4.88a.732.732,0,0,0,0,1.464Z" transform="translate(10.182 -1547.378)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_168" data-name="Path 168" d="M1.768,3.174,3.69,5.094A.734.734,0,1,1,2.655,6.135L.215,3.695a.738.738,0,0,1,0-1.041L2.655.213A.734.734,0,1,1,3.69,1.255Z" transform="translate(58.627 58.629) rotate(180)" fill="#fff" fill-rule="evenodd" />
                                    </g>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doses