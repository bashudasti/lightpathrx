import React from 'react'
import ProductInfo from './ProductInfo'
import CheckoutInfo from './CheckoutInfo'
import Wrapper from '../utilities/Wrapper'

const Checkout = () => {
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5'>
            <Wrapper>
                <div className='bg-white rounded-3xl pt-16 px-4 lg:pl-20 sm:pr-10 pb-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div>
                            <ProductInfo />
                        </div>
                        <div>
                            <CheckoutInfo />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Checkout