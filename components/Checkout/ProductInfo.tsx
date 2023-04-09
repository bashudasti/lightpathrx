import React from 'react'
import Image from 'next/image'

const ProductInfo = () => {
    return (
        <>
            <div className='relative z-0'>
                <Image src="/images/Cialis.png" className='mx-auto' alt="Product" width="348" height="348" />
            </div>
            <div>
                <h1 className='text-heading text-xl leading-none'>2.5mg Generic Viagra 1-Month Supply</h1>
                <ul className='py-5'>
                    <li className='flex items-center gap-2'>
                        <span className='text-green'>✓</span>
                        <span className='text-gray200 text-sm'> XX doses - Xx per week</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-green'>✓</span>
                        <span className='text-gray200 text-sm'>Discount shipping to your</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-green'>✓</span>
                        <span className='text-gray200 text-sm'>   FREE online physician consultation.</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-green'>✓</span>
                        <span className='text-gray200 text-sm'> Monthly refills</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-green'>✓</span>
                        <span className='text-gray200 text-sm'> 24/7 support</span>
                    </li>
                </ul>
                <div className='flex items-center justify-between py-3 border-b border-t border-gray200'>
                    <p className='text-heading font-medium text-base leading-none'>Price</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between py-3 border-b border-gray200'>
                    <p className='text-heading font-medium text-base leading-none'>Shipping</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between py-3 border-b border-gray200'>
                    <p className='text-heading font-medium text-base leading-none'>Service Charge including Tax</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between py-3'>
                    <p className='text-heading font-semibold text-lg leading-none'>Grand Total</p>
                    <p className='text-heading font-semibold text-lg leading-none'>$00.00</p>
                </div>
            </div>
            <ul className='pb-5 pt-3 space-y-2'>
                <li className='flex items-center gap-2'>
                    <span className='text-green'>✓</span>
                    <span className='text-gray200 text-sm'> Lorem ipsum dolor sit amet</span>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-green'>✓</span>
                    <span className='text-gray200 text-sm'> Lorem ipsum dolor sit amet</span>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-green'>✓</span>
                    <span className='text-gray200 text-sm'> Lorem ipsum dolor sit amet</span>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-green'>✓</span>
                    <span className='text-gray200 text-sm'> Lorem ipsum dolor sit amet</span>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-green'>✓</span>
                    <span className='text-gray200 text-sm'> Lorem ipsum dolor sit amet</span>
                </li>
            </ul>
            <p className='text-gray200 text-xs'>Valid US Government issued ID verification required after checkout.</p>
        </>
    )
}

export default ProductInfo