import Link from 'next/link'
import React, { useState } from 'react'
import { Bar } from './utilities/Bar'
import Wrapper from './utilities/Wrapper'
import { useForm } from 'react-hook-form';

type Inputs = {
    email: string,
    password: string,
    cpassword: string
};

const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Inputs>({ mode: 'onChange' });
    const [showError, setShowError] = useState(false);
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <section className='bg-gray100 pt-9 pb-28 md:pb-36'>
            <Wrapper>
                <span className='text-heading block mb-2'>Contact us</span>
                <Bar float='left' />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6'>
                    <div className='bg-white rounded-3xl pt-8 sm:pt-10 pb-[52px] px-5 lg:px-9'>
                        <h2 className='text-xl text-heading font-semibold mb-8 leading-none'>Send A Message</h2>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(onSubmit)} method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                    Email
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input type='email' className='input-control' placeholder='charlene@gmail.com' {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} />

                                    {errors.email && <p className='text-orange text-xs mt-2'>{errors.email.message}</p>}
                                    {showError && <p className='text-orange text-xs mt-2'>Email already exists.</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                    Message
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <textarea className='input-control' rows={8} placeholder='Type your message here...'></textarea>
                                </div>
                            </div>



                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn capitalize !min-w-0 w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:pl-12 mt-5 lg:mt-8'>
                        <h3 className='text-xl text-heading font-semibold mb-6 leading-none'>Give Us A Call</h3>
                        <div className='mb-6'>
                            <p>Monday - Friday: XAM - XAM (EST)</p>
                            <p>Saturday - Sunday: XAM - XPM (EST)</p>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-sm font-semibold text-blue'>Address:</h5>
                            <p>Light Path USA LLC
                                201 Sigma Drive Suite 300,
                                Summerville, SC, 29486</p>
                        </div>
                        <div className='mb-6 flex items-center gap-1'>
                            <h5 className='text-sm font-semibold text-blue'>Customer Service:</h5>
                            <Link href="tel:18002508494" className='text-sm text-text'> 1-800-250-8494</Link>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-sm font-semibold text-blue'>Email us anytime:</h5>
                            <Link href='mailto:info@lightpathrx.com' className='text-sm text-text'>info@lightpathrx.com</Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ContactUs