import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Recommendation = () => {
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5 min-h-[calc(100vh_-_81px)]'>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className='bg-white rounded-3xl pt-8 px-4 sm:px-12 lg:px-[90px] pb-5'>
                    <div className='text-center pb-12'>
                        <h1 className='text-[22px] mb-[10px]'>Recommended Pill for ED Treatment</h1>
                        <p className='text-gray200'>A starting dosage of 60mg is the most common for men who are new to ED medication. Based on the information you provided, a physician will determine if this dosage is right for you, or recommend a more appropriate dosage.</p>
                    </div>
                    <div className='border-2 border-[#8f8f8f61] rounded-xl p-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            <div className='bg-gray100 pt-6 pb-2 px-6 sm:px-8 rounded-3xl'>
                                <span className='bg-[#F8B84E] rounded-[10px] py-[3px] px-3 text-dark text-[10px]'>Recommended for you</span>
                                <h2 className='mt-7 mb-5 sm:mb-10 text-[22px]'>Generic Viagra®</h2>
                                <div className='mb-6 sm:mb-16'>
                                    <Image src="/images/recommend.png" className='mx-auto' width="237" height="137" alt="Recommend" />
                                </div>
                                <p className='text-gray200 text-sm'>Sildenafil</p>
                            </div>
                            <div className='pt-5 sm:pt-9'>
                                <Image src="/images/graph.png" alt="graph" width="354" height="124" />
                                <ul className='space-y-2 pt-6 sm:pt-14 mb-8'>
                                    <li className='text-dark relative pl-7 before:bg-green before:w-2.5 before:h-2.5 before:rounded-full before:shadow-[0px 3px 6px #50B37573] before:absolute before:left-0 before:top-2'>Sildenafil is the same active ingredient as Viagra®</li>
                                    <li className='text-dark relative pl-7 before:bg-green before:w-2.5 before:h-2.5 before:rounded-full before:shadow-[0px 3px 6px #50B37573] before:absolute before:left-0 before:top-2'>The most popular ED treatment for men</li>
                                </ul>
                                <Link href="/cart" className='theme-btn !min-w-0 block w-full'>Continue</Link>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 text-center'>
                        <p>Prefer a different medication? <Link href='/tadalafil' className='text-green'>See all options</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendation