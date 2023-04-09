import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Link from 'next/link'
import Image from 'next/image'

const CallToActionProduct = () => {
  return (
    <section className='bg-[url("/images/call-to-action.jpg")] bg-no-repeat bg-center bg-cover h-[401px] sm:h-[655px] py-20'>
      <Wrapper>
        <div className='max-w-[480px]'>
          <Bar float='left' />
          <h5 className='text-white font-bold text-[28px] sm:text-[56px] leading-tight mb-[30px]'>Finally, an easier Way to feel better.</h5>
          <Link href="#" className='bg-primary text-white inline-flex items-center justify-center rounded-[3px] text-sm sm:text-lg gap-1.5 py-3.5 px-[46px]'>
            Get Started
            <Image src="/images/square-play.png" alt="play" width="18" height="18" />
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}

export default CallToActionProduct