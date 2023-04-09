import React from 'react'
import Wrapper from './utilities/Wrapper'
import { Bar } from './utilities/Bar'
import { useRouter } from 'next/router'

const Newsletter = () => {
    const router = useRouter();
    console.log(router.asPath);

    return (
        <section className={`${router.asPath === "/erectile-function" ? "pt-0 -mt-[121px]" : "pt-24"} pb-20`}>
            <Wrapper>
                <div className='max-w-[930px] ml-auto mr-auto text-center'>
                    {router.asPath !== "/erectile-function" &&
                        <>
                            <Bar float='center' />
                            <h4 className='text-xl sm:text-[28px] font-bold leading-tight'>If your treatment is approved, your order will be shipped out directly from a US-based pharmacy the following business day!</h4>
                        </>
                    }
                    <div className={`${router.asPath === "/erectile-function" ? "mt-0" : "mt-16 sm:mt-24"} bg-lightblue rounded-3xl px-[18px] sm:px-36 pt-9 pb-12`}>
                        <h5 className='text-white capitalize text-3xl sm:text-[45px] leading-tight'>Get Our Newsletter</h5>
                        <p className='text-white text-base sm:text-lg mb-[18px]'>To join the worldwide community</p>
                        <form className='sm:flex gap-6'>
                            <input type='email' className='bg-white py-4 px-6 sm:px-[30px] flex-grow flex-shrink focus-within:outline-0 placeholder:text-[#31353B] placeholder:opacity-20 w-full' placeholder='Type your Email Address' />
                            <button type='submit' className='text-white border-p rounded-[3px] border-2 border-white text-lg py-2.5 px-10 hidden sm:inline-block'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Newsletter