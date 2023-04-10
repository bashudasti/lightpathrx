import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-heading pt-8 md:pt-16'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-12 pb-12 md:pb-16'>
          <div className='col-span-12 md:col-span-5'>
            <Link href="/" className='inline-block'>
              <Image src="/images/logo-white.png" alt="logo" width="265" height="80" className='w-[235px] sm:w-auto' />
            </Link>
            <div className='space-y-6 mt-12 md:mt-16 flex flex-col items-baseline'>
              <Link href="tel:18002508494" className='text-base text-white inline-flex gap-1.5'><PhoneIcon className='w-4' /> 1-800-250-8494</Link>
              <Link href="mailto:info@lightpathrx.com" className='text-base text-white inline-flex gap-1.5'><EnvelopeIcon className='w-4' /> info@lightpathrx.com</Link>
              <Link href="#" className='text-base text-white inline-flex items-start gap-1.5'><MapPinIcon className='w-4' /> Light Path USA LLC <br />
                201 Sigma Drive Suite 300, <br />
                Summerville, SC, 29486</Link>
            </div>
          </div>
          <div className='col-span-12 md:col-span-7'>
            <div className='grid grid-cols-3'>
              <div className='hidden md:block'>
                <h5 className='text-white text-xl mb-3'>Popular</h5>
                <div className='space-y-2 flex flex-col items-baseline'>
                  <Link href="/" className='text-white block'>Viagara</Link>
                  <Link href="/" className='text-white block'>Cialis</Link>
                </div>
              </div>
              <div className='mt-11 md:mt-0'>
                <h5 className='text-white text-xl mb-3'>Informations</h5>
                <div className='space-y-2 flex flex-col items-baseline'>
                  <Link href="/" className='text-white block'>About us</Link>
                  <Link href="/" className='text-white block'>How it Works</Link>
                  <Link href="/" className='text-white block'>Blog</Link>
                  <Link href="/" className='text-white block'>Contact us</Link>
                </div>
              </div>
              <div className='hidden md:block'>
                <h5 className='text-white text-xl mb-3'>Connect</h5>
                <p className='text-white'>Customer Help Center</p>
                <Link href="mailto:press@lightpath.com" className='text-white text-sm'>press@lightpath.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl md:px-8">
        <div className='bg-lightblue px-7 py-6 md:p-9 md:mt-9'>
          <p className='text-[#002147]'>Copyright © 2023 | LightPathRx</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer