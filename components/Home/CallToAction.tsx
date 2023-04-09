import React from 'react'
import Wrapper from '../utilities/Wrapper'
import { Bar } from '../utilities/Bar'

const CallToAction = () => {
    return (
        <section>
            <Wrapper>
                <div className='rounded-3xl px-6 sm:px-10 lg:px-[120px] pt-6 sm:pt-10 pb-24 lg:py-[70px] bg-[url("/images/call-to-action.png")] bg-no-repeat bg-center bg-cover'>
                    <Bar float='left' />
                    <h4 className='text-white capitalize text-3xl sm:text-[56px] font-bold leading-tight'>Healthcare Made Easy</h4>
                    <p className='mt-3 mb-5 sm:mb-12 text-white text-sm sm:text-2xl max-w-[214px] sm:max-w-lg'>See our available treatments and medication and start your online healthcare today!</p>
                    <a href='#' className='theme-btn !min-w-[243px]'>
                        GET STARTED NOW
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="caret-square-right-regular" d="M7.071,44.974V37.026a.483.483,0,0,1,.824-.342l3.95,3.974a.478.478,0,0,1,0,.679L7.9,45.311a.481.481,0,0,1-.824-.338ZM18,33.929V48.071A1.929,1.929,0,0,1,16.071,50H1.929A1.929,1.929,0,0,1,0,48.071V33.929A1.929,1.929,0,0,1,1.929,32H16.071A1.929,1.929,0,0,1,18,33.929Zm-1.929,13.9V34.17a.242.242,0,0,0-.241-.241H2.17a.242.242,0,0,0-.241.241V47.83a.242.242,0,0,0,.241.241H15.83A.242.242,0,0,0,16.071,47.83Z" transform="translate(0 -32)" fill="#fff" />
                        </svg>
                    </a>
                </div>
            </Wrapper>
        </section>
    )
}

export default CallToAction