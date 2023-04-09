import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import Link from 'next/link'
import Image from 'next/image'

const EFBanner = () => {
    return (
        <section className='bg-lightgray pb-16 pt-0 xl:py-[138px] relative'>
            <Wrapper>
                <div className='flex xl:block flex-col-reverse'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-12'>
                        <div className='2xl:col-span-8'>
                            <h1 className='text-[26px] sm:text-[32px] leading-tight font-bold'>Order erectile dysfunction medication online and have it delivered straight to your door!</h1>
                            <ul className='mt-5 mb-12 space-y-3'>
                                <li className='flex text-gray items-center gap-4'>
                                    <Image src="/images/award.png" alt="ef" width="32" height="32" className='flex-grow-0 flex-shrink-0' />
                                    Get FDA-approved erectile dysfunction medication without breaking the bank!
                                </li>
                                <li className='flex text-gray items-center gap-4'>
                                    <Image src="/images/dollar.png" alt="ef" width="32" height="32" className='flex-grow-0 flex-shrink-0' />
                                    Our generics are up to 95% cheaper than the brand names.
                                </li>
                                <li className='flex text-gray items-center gap-4'>
                                    <Image src="/images/bookmark.png" alt="ef" width="32" height="32" className='flex-grow-0 flex-shrink-0' />
                                    You can order them 100% online for discreet delivery.
                                </li>
                                <li className='flex text-gray items-center gap-4'>
                                    <Image src="/images/clock.png" alt="ef" width="32" height="32" className='flex-grow-0 flex-shrink-0' />
                                    No more waiting weeks for an appointment.
                                </li>
                            </ul>
                            <Link href="" className='bg-primary text-white rounded-[3px] text-sm sm:text-lg py-4 px-11 gap-2 inline-flex items-center'>
                                Get Started
                                <Image src="/images/square-play.png" alt="" width="18" height="18" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/ef-banner.png" className='xl:absolute right-0 top-24 mx-auto xl:m-0' alt="banner" width="768" height="505" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default EFBanner