import React, { Fragment, useState } from 'react'
import Wrapper from '../utilities/Wrapper'
import Membership from './Membership';
import { Tab } from '@headlessui/react'
import Orders from './Orders';
import Profile from './Profile';
import Case from './Case/Index';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const User = () => {
    const data = [
        {
            label: "Membership",
            value: "membership"
        },
        {
            label: "Orders",
            value: "orders"
        },
        {
            label: "Profile",
            value: "profile"
        },
        {
            label: "Case",
            value: "case"
        }
    ];
    return (
        <section className='bg-gray100 pt-6 sm:pt-8 pb-5'>
            <Wrapper>
                <div className='bg-white rounded-3xl pt-8 lg:pt-5 pb-11 lg:pb-14 px-4 lg:px-10'>
                    <Tab.Group>
                        <Tab.List className="bg-transparent text-heading lg:border-b-2 border-green overflow-x-auto sm:overflow-visible w-full rounded-none flex flex-nowrap gap-4 lg:gap-0 lg:block">
                            {data.map(({ label, value }) => (
                                <Tab as={Fragment} key={value}>
                                    {({ selected }) => (
                                        <button
                                            className={classNames(
                                                selected ? 'bg-green lg:bg-white text-white lg:text-green lg:border-x-2 lg:border-t-2 border-green lg:-bottom-[2px]' : 'bg-white  text-[#909090] lg:text-heading',
                                                'inline-flex items-center text-base py-2 lg:py-4 px-5 lg:px-8 border-2 border-gray200 rounded-[3px] lg:border-0 lg:rounded-none focus-visible:outline-0 relative'
                                            )}
                                            key={value}
                                        >
                                            {label}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-7">
                            <Tab.Panel><Membership /></Tab.Panel>
                            <Tab.Panel><Orders /></Tab.Panel>
                            <Tab.Panel><Profile /></Tab.Panel>
                            <Tab.Panel><Case /></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </Wrapper>
        </section>
    )
}

export default User