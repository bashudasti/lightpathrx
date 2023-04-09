import { log } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleProduct = ({ data }: any) => {
    
    return (
        <div>
            <div className='bg-gray400 rounded-3xl h-80 w-full flex items-center justify-center'>
                <Image src={data.image} alt="product" width={data.imageWidth} height={data.imageHeight} className='relative -top-6' />
            </div>
            <h6 className='text-2xl mt-9'>{data.title}</h6>
            <span className='text-gray200 text-sm block'>{data.perUser}</span>
            {data.description &&
                <p className='text-sm mt-5 mb-6'>{data.description}</p>
            }
            <div className='mt-4 flex gap-4'>
                <Link href="/" className='theme-btn !min-w-0 flex-auto !px-4 sm:!px-6 !text-sm sm:!text-lg'>Get Started</Link>
                <Link href="/" className='theme-btn !min-w-0 outline-btn flex-auto !px-4 sm:!px-6 !text-sm sm:!text-lg'>Learn More</Link>
            </div>
        </div>
    )
}

export default SingleProduct