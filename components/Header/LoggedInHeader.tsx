import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
    { name: "Home", href: '/', current: true },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'FAQs', href: '/', current: false },
    { name: 'Account', href: '/account', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const LoggedInNav = () => {
    const router = useRouter();
    return (
        <Disclosure as="header" className={`bg-white py-2 sm:py-2.5 z-10 relative ${router.asPath !== "/" && router.asPath !== "/erectile-function" ? "shadow-2" : null}`}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`lg:flex ${router.asPath !== "/signup" && router.asPath !== "/questions" ? "justify-between" : "justify-center"} `}>
                            <div className="flex justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <Image src="/images/Logo.png" alt="logo" width="199" height="61" className="block w-32 sm:w-auto" />
                                    </Link>
                                </div>



                                {router.asPath !== "/signup" && router.asPath !== "/questions" &&
                                    <div className="flex items-center lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="18" viewBox="0 0 29.5 23">
                                                    <g id="Menu" transform="translate(-302.632 -34.5)">
                                                        <line id="Line_37" data-name="Line 37" x2="13.5" transform="translate(317.132 36)" fill="none" stroke="#272b2d" stroke-linecap="round" stroke-width="3" />
                                                        <line id="Line_38" data-name="Line 38" x2="20.5" transform="translate(310.132 46)" fill="none" stroke="#272b2d" stroke-linecap="round" stroke-width="3" />
                                                        <line id="Line_39" data-name="Line 39" x2="26.5" transform="translate(304.132 56)" fill="none" stroke="#272b2d" stroke-linecap="round" stroke-width="3" />
                                                    </g>
                                                </svg>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                }

                            </div>


                            {router.asPath !== "/signup" && router.asPath !== "/questions" &&
                                <div className="hidden lg:flex items-center">
                                    <div className="hidden lg:mr-6 lg:flex lg:space-x-14">

                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.asPath === item.href ? 'font-medium text-green' : 'text-gray hover:text-green',
                                                    'inline-flex items-center text-base'
                                                )}
                                                aria-current={router.asPath === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="flex-shrink-0 flex">
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center rounded border-2 border-primary px-9 py-1.5 text-lg font-medium text-primary hover:bg-primary hover:text-white">
                                            Logout (joepetchonka@gmail.com)
                                        </button>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>



                    {router.asPath !== "/signup" && router.asPath !== "/questions" &&
                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            router.asPath === item.href ? 'font-medium text-green border-l-4 border-green' : 'text-gray font-medium',
                                            'block py-2 px-4 sm:px-5 text-base'
                                        )}
                                        aria-current={router.asPath === item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-green pb-3 pt-4">
                                <div className="flex-shrink-0 flex lg:hidden px-4 sm:px-6">
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center rounded border-2 border-primary px-6 py-1 text-lg font-medium text-primary">
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center rounded ml-2.5 bg-primary px-2 py-1.5 text-white"
                                    >
                                        <ShoppingCartIcon className="h-7 w-[26px]" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    }
                </>
            )}
        </Disclosure>
    )
}

export default LoggedInNav