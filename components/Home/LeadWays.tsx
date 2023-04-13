import Image from 'next/image'
import React from 'react'
import { Bar } from '../utilities/Bar'

const LeadWays = () => {
    return (
        <section className='bg-opacity-10 bg-lightblue pt-16 pb-16 sm:pb-0 sm:pt-20'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='text-center'>
                    <Bar float="center" />
                    <h3 className='text-3xl sm:text-5xl font-bold mb-2'><span className='text-green'>LightpathRx</span> leads the way!</h3>
                    <p className='text-sm sm:text-base'>See how Lightpath Rx compares to other healthcare options:</p>
                </div>
                <div className='text-center overflow-x-auto'>
                    <Image src="/images/lead.png" alt="lead" width="1224" height="1081" className='hidden md:block' />
                    <Image src="/images/lead.png" alt="lead-mobile" width="1224" height="1081" className='md:hidden w-[535px] h-[461px] sm:w-[1178px] sm:h-[1053px] max-w-none' />
                </div>
            </div>
        </section>
    )
}

export default LeadWays