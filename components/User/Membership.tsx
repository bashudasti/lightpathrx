import Image from 'next/image'
import React from 'react'

const Membership = () => {
    const statusList = [
        {
            label: "Order Status:",
            value: "Confirmed"
        },
        {
            label: "ID Verification:",
            value: "Verification Sucess"
        },
        {
            label: "Medical Status:	",
            value: "Completed"
        },
        {
            label: "Created:",
            value: "02-23-2023, 18:04:58"
        },
        {
            label: "Subscription Status:",
            value: "Stopped"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            <div className='border-2 border-gray200 border-opacity-40 text-center pt-7 pb-9 px-7 sm:px-12 rounded-lg'>
                <h3 className='text-heading text-[22px]'>Treatment</h3>
                <div>
                    <Image src="/images/Cialis.png" className='mx-auto' alt="treatment" width="348" height="348" />
                </div>
                <p className='text-sm text-gray200'>60mg Sildenafil - 12 Doses - 3x per week</p>
                <a href="#" className='theme-btn mt-6 md:mt-7 w-full !capitalize !min-w-0'>Switch Plan</a>
            </div>
            <div className='border-2 border-gray200 border-opacity-40 text-center pt-7 pb-9 px-6 rounded-lg h-full'>
                <h3 className='text-heading text-[22px]'>Status</h3>
                <div className='bg-green text-lg text-white inline-block rounded-lg py-3 px-14 mt-6'>Pending</div>

                <ul className='mt-[78px]'>
                    {statusList.map((item, index) => (
                        <li className='flex justify-between items-center border-b-2 border-gray200 border-opacity-50 py-3 first-of-type:border-t-2' key={index}>
                            <p className='text-sm md:text-lg text-heading text-left'>{item.label}</p>
                            <span className='text-sm md:text-lg text-right w-36 md:w-48 text-gray200'>{item.value}</span>
                        </li>
                    ))}

                </ul>

            </div>
        </div>
    )
}

export default Membership