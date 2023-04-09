import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import Image from 'next/image'

const PrivacynExpertise = () => {
    return (
        <section className='bg-lightblue bg-opacity-10 py-16 sm:pt-28 sm:pb-[135px]'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-[150px]'>
                    <div>
                        <Bar float="left" />
                        <h4 className='text-[26px] sm:text-[34px] leading-tight mb-6'>Privacy</h4>
                        <p>At our platform, your privacy is our topmost priority. We understand the importance of avoiding any uncomfortable in-person interactions. We ensure that your information is always kept safe and secure. Additionally, we ship our products in discreet packaging to maintain your privacy. Find a provider today to experience the utmost confidentiality.</p>
                    </div>
                    <Image src="/images/privacy.png" alt="privacy" width="571" height="413" className='rounded-3xl mx-auto lg:mx-0' />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-[150px] mt-14 sm:mt-[107px]'>
                    <Image src="/images/expertise.png" alt="privacy" width="571" height="413" className='rounded-3xl order-2 lg:order-1 mx-auto lg:mx-0' />
                    <div className='order-1 lg:order-2'>
                        <Bar float="left" />
                        <h4 className='text-[26px] sm:text-[34px] leading-tight mb-6'>Expertise</h4>
                        <p>Our providers are not just professionals, but experts in their field. We will pair you with a licensed medical provider who will assess your unique needs to determine the best solution for you. You can start by answering questions related to your health information, conditions, and sexual health. Your provider will utilize this information to work with you and determine the appropriate prescription. Find a provider today to receive personalized expert care.</p>
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default PrivacynExpertise