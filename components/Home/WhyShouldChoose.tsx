import Image from 'next/image'
import React from 'react'
import { Bar } from '../utilities/Bar'

const WhyShouldChoose = () => {
    return (
        <section className='bg-gray100 py-20 overflow-hidden'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='order-2 lg:order-1'>
                        <div className='relative max-w-[450px] ml-auto mr-auto lg:mr-0 lg:ml-0 '>
                            <Image src="/images/process.png" alt="process" width="450" height="477" />
                            <div className='absolute bottom-[-54px] -right-8 sm:-right-[85px]'>
                                <Image src="/images/should-choose.png" className='w-64 sm:w-auto' alt="choose" width="370" height="352" />
                            </div>
                        </div>
                        <ul className='space-y-3 lg:hidden mt-12'>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/tag.svg" alt="tag" width="32" height="32" />
                                Save up to 90% on medication costs.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/physcians.svg" alt="tag" width="32" height="32" />
                                Supervised treatments by US-licensed physicians.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/FDA-medication.svg" alt="tag" width="32" height="32" />
                                Genuine, FDA-approved medication.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/US-certification.svg" alt="tag" width="32" height="32" />
                                US-made medication.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/delivery.svg" alt="tag" width="32" height="32" />
                                Shipped directly from US-based pharmacies.
                            </li>
                        </ul>
                    </div>


                    <div className='order-1 lg:order-2'>
                        <Bar float="left" />
                        <h2 className='text-[32px] leading-tight font-bold'>
                            Why should you choose
                            <span className='text-green block text-[42px]'>Lightpath Rx?</span>
                        </h2>
                        <p className='mt-6 mb-[30px]'>Accessibility and speed make healthcare more convenient and affordable. Through our secure online platform, you can view all available treatments and place an order for your preferred medication. All treatments are supervised by US-licensed physicians, and all medications are dispensed by US-based pharmacies. Simple, secure, and affordable – just the way healthcare should be!</p>

                        <ul className='space-y-3 hidden lg:block'>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/tag.svg" alt="tag" width="32" height="32" />
                                Save up to 90% on medication costs.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/physcians.svg" alt="tag" width="32" height="32" />
                                Supervised treatments by US-licensed physicians.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/FDA-medication.svg" alt="tag" width="32" height="32" />
                                Genuine, FDA-approved medication.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/US-certification.svg" alt="tag" width="32" height="32" />
                                US-made medication.
                            </li>
                            <li className='gap-4 flex items-center'>
                                <Image src="/images/delivery.svg" alt="tag" width="32" height="32" />
                                Shipped directly from US-based pharmacies.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyShouldChoose