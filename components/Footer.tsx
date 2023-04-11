import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-heading pt-8 md:pt-12'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className='text-white text-center text-sm mb-8 max-w-4xl mx-auto'>
          The telehealth process for obtaining prescription medications for erectile dysfunction involves an online consultation with a licensed doctor or healthcare provider, who will then issue a prescription when necessary. The price of each treatment plan will vary depending on the specific treatment plan selected. It is important to note that Light Path USA LLC is not directly associated or affiliated with any of the prescription drug manufacturers mentioned, and the trademarks and logos remain the property of their respective owners. Additionally, Light Path USA LLC does not provide any advice, endorsements, or recommendations regarding any treatments, prescription drug, medication, pharmacy, or other information. It is recommended to consult with a healthcare professional before making any changes to a medication or prescription. Users should be aware that Light Path USA LLC is not an insurance provider or a Medicaid/Medicare prescription drug plan, and they will be fully responsible for paying the price presented during the checkout process.
        </p>
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
            <div className='grid grid-cols-1 md:grid-cols-3'>
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
                  <Link href="/about-us" className='text-white block'>About us</Link>
                  <Link href="/#how-it-work" className='text-white block'>How it Works</Link>
                  <Link href="/terms-and-conditions" className='text-white block'>Terms And Conditions</Link>
                  <Link href="/privacy-policy" className='text-white block'>Privacy Policy</Link>
                  <Link href="/consent-to-telehealth" className='text-white block'>Consent To Telehealth</Link>

                </div>
              </div>
              <div className='hidden md:block'>
                <h5 className='text-white text-xl mb-3'>Connect</h5>
                <p className='text-white'>Customer Help Center</p>
                <Link href="mailto:info@lightpathrx.com" className='text-white text-sm'>info@lightpathrx.com</Link>
                <Link href="/contact-us" className='text-white block mt-3'>Contact us</Link>
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