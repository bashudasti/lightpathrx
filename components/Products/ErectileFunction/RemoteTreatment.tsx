import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'

const RemoteTreatment = () => {
    return (
        <section className='bg-gray100 py-20'>
            <Wrapper>
                <div className='max-w-[930px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24'>
                    <div>
                        <Bar float="left" />
                        <h2 className='text-[32px] sm:text-[54px] font-bold leading-tight'>Remote access ED treatment</h2>
                    </div>
                    <div className='pt-5'>
                        <p className='mb-2'>FDA-approved, effective ED pills are not available over the counter in the USA and are only available with a prescription. Our licensed providers can help you get the prescriptions you need - all from home.</p>
                        <Link href="#" className='text-green flex gap-4'>Explore all treatments <ArrowLongRightIcon className='w-6' /></Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default RemoteTreatment