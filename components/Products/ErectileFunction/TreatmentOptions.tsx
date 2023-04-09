import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'

const TreatmentOptions = () => {
    return (
        <section className='pt-[360px]'>
            <Wrapper>
                <div className='max-w-[930px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24'>
                    <div>
                        <Bar float="left" />
                        <h2 className='text-[32px] sm:text-[54px] font-bold leading-tight'>Treatment Options</h2>
                    </div>
                    <div className='pt-5'>
                        <p className='mb-2'>If you’re looking for an effective solution, we’ve leveraged the knowledge and experience of our medical advisory team’s urology experts to carefully select the erectile dysfunction treatments available on our platform. Give it a try today to explore whether one of these FDA-approved drugs can reignite your sexual experience.</p>
                        <Link href="#" className='text-green flex gap-4'>Explore all treatments <ArrowLongRightIcon className='w-6' /></Link>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default TreatmentOptions