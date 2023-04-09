import React, { useState } from 'react'
import { Bar } from './utilities/Bar'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Inputs = {
    email: string,
    password: string,
    cpassword: string
};

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Inputs>({ mode: 'onChange' });
    const [showError, setShowError] = useState(false);
    const router = useRouter();
    const onSubmit = (data: any) => {
        console.log(data);
        if (data && isValid) {
            router.push('questions');
        }
    };
    return (
        <section className='bg-gray100 pt-9 pb-5'>
            <div className="mx-auto max-w-[725px] px-4 sm:px-6 lg:px-8">
                <div className='bg-white rounded-3xl pt-8 sm:pt-10 pb-[52px] px-4 sm:px-[118px]'>
                    <Bar float="center" />
                    <h1 className='text-2xl sm:text-[32px] leading-tight text-center mb-3'>Welcome to LightPathRx</h1>
                    <p className='text-center text-gray200 text-xs sm:text-sm'>No waiting rooms. No expensive doctors visits. <br />Prescription treatments sent to your door, discreetly. <br /> This is the future of tele-medicine.</p>
                    <form method='POST' className='space-y-3 my-6' onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' className='input-control' placeholder='Email' {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })} />

                        {errors.email && <p className='text-orange text-xs mt-2'>{errors.email.message}</p>}
                        {showError && <p className='text-orange text-xs mt-2'>Email already exists.</p>}

                        <input type='password' className='input-control' placeholder='Create Password'
                            {...register("password", {
                                required: 'Password is required',
                            })} />
                        {errors.password && <p className='text-orange text-xs mt-2'>{errors.password.message}</p>}
                        <input type='password' className='input-control' placeholder='Repeat Password'
                            {...register("cpassword", {
                                required: true,
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })}
                        />
                        {errors.cpassword && <p className='text-orange text-xs mt-2'>{errors.cpassword.message}</p>}
                        <div className="flex items-center !mt-5 !mb-2">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-2 border-green text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray200 cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className='theme-btn !min-w-0 w-full !capitalize'>Sign Up</button>
                    </form>

                    <a href='#' className='border border-gray200 rounded-[3px] flex items-center justify-center text-base sm:text-lg text-dark gap-4 p-2.5'>
                        <svg id="d56a83daff855ba754852b04aa0f3926" xmlns="http://www.w3.org/2000/svg" width="31.36" height="32" viewBox="0 0 31.36 32">
                            <path id="Path_148" data-name="Path 148" d="M145.91,110.032a13.711,13.711,0,0,0-.338-3.271H130.55V112.7h8.818a7.819,7.819,0,0,1-3.271,5.191l-.03.2,4.75,3.68.329.033a15.644,15.644,0,0,0,4.764-11.769" transform="translate(-114.55 -93.677)" fill="#4285f4" />
                            <path id="Path_149" data-name="Path 149" d="M28.218,169.206a15.25,15.25,0,0,0,10.6-3.876l-5.049-3.911a9.47,9.47,0,0,1-5.547,1.6,9.632,9.632,0,0,1-9.1-6.649l-.188.016-4.939,3.822-.065.18a15.988,15.988,0,0,0,14.293,8.818" transform="translate(-12.218 -137.206)" fill="#34a853" />
                            <path id="Path_150" data-name="Path 150" d="M6.9,81.737a9.85,9.85,0,0,1-.533-3.164,10.351,10.351,0,0,1,.515-3.164L6.871,75.2l-5-3.884-.164.078a15.966,15.966,0,0,0,0,14.364L6.9,81.737" transform="translate(0 -62.572)" fill="#fbbc05" />
                            <path id="Path_151" data-name="Path 151" d="M28.218,6.187A8.868,8.868,0,0,1,34.4,8.569L38.92,4.16A15.372,15.372,0,0,0,28.218,0,15.988,15.988,0,0,0,13.925,8.818L19.1,12.836a9.672,9.672,0,0,1,9.12-6.649" transform="translate(-12.218)" fill="#eb4335" />
                        </svg>
                        Continue with Google
                    </a>
                </div>
                <p className='text-center mt-8 text-gray200 text-sm capitalize'>Already Have An Account? <Link href="#" className='text-green'>Sign In</Link></p>
            </div>
        </section>
    )
}

export default Signup