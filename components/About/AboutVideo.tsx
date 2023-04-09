import React from 'react'
import { PlayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Wrapper from '../utilities/Wrapper'

const AboutVideo = () => {
    return (
        <div className='pt-8 sm:pt-0 sm:-mt-[332px] pb-8 md:pb-24'>
            <Wrapper>
                <div className='relative'>
                    <Image src="/images/video-thumbnail.png" alt="thumbnail" width="1170" height="664" className='mx-auto rounded-3xl' />
                    <button className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <PlayIcon className='w-12 sm:w-24 text-white' />
                    </button>
                </div>
            </Wrapper>
        </div>
    )
}

export default AboutVideo