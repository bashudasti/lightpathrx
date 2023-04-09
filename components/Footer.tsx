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
              <a href="tel:" className='text-base text-white inline-flex gap-1.5'><PhoneIcon className='w-4' /> 1-800-250-8494</a>
              <a href="mailto:" className='text-base text-white inline-flex gap-1.5'><EnvelopeIcon className='w-4' /> info@lightpathrx.com</a>
              <a href="#" className='text-base text-white inline-flex gap-1.5'><MapPinIcon className='w-4' /> ABC street, XYZ City - 123234</a>
            </div>
          </div>
          <div className='col-span-12 md:col-span-7'>
            <div className='grid grid-cols-3'>
              <div className='hidden md:block'>
                <h5 className='text-white text-xl mb-3'>Popular</h5>
                <div className='space-y-2 flex flex-col items-baseline'>
                  <a href="/" className='text-white block'>Viagara</a>
                  <a href="/" className='text-white block'>Cialis</a>
                </div>
              </div>
              <div className='mt-11 md:mt-0'>
                <h5 className='text-white text-xl mb-3'>Informations</h5>
                <div className='space-y-2 flex flex-col items-baseline'>
                  <a href="/" className='text-white block'>About us</a>
                  <a href="/" className='text-white block'>How it Works</a>
                  <a href="/" className='text-white block'>Blog</a>
                  <a href="/" className='text-white block'>Contact us</a>
                </div>
              </div>
              <div className='hidden md:block'>
                <h5 className='text-white text-xl mb-3'>Connect</h5>
                <p className='text-white'>Customer Help Center</p>
                <a href="mailto:press@lightpath.com" className='text-white text-sm'>press@lightpath.com</a>
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