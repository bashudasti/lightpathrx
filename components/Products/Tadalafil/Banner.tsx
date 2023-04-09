import React, { useState } from 'react'
import Wrapper from '../../utilities/Wrapper'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }: { id: any, open: any }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${id === open ? "rotate-180" : ""} w-6 h-6 transition-transform`}>
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
        </svg>
    );
}

const ProductBanner = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    const productFeatureAccordion: object[] = [
        {
            question: "Introducing Tadalafil",
            answer: `<ul class='space-y-3 text-dark text-sm'>
            <li class='flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" width="17.475" height="17.48" viewBox="0 0 17.475 17.48">
            <path id="_9be2df2ebb8eb1e9673e81278bae0615" data-name="9be2df2ebb8eb1e9673e81278bae0615" d="M8.97.264a2.4,2.4,0,0,0-1.655.7l-.891.891H4.235A2.4,2.4,0,0,0,1.845,4.243V6.431l-.885.893a2.4,2.4,0,0,0,0,3.373l.885.891v2.189a2.4,2.4,0,0,0,2.389,2.389H6.424l.891.885a2.4,2.4,0,0,0,3.373,0l.893-.885h2.187a2.4,2.4,0,0,0,2.389-2.389V11.588l.891-.891a2.4,2.4,0,0,0,0-3.373l-.891-.893V4.243a2.4,2.4,0,0,0-2.389-2.389H11.581L10.688.963A2.381,2.381,0,0,0,8.97.264Zm.024,1.59a.787.787,0,0,1,.569.234l1.126,1.121a.8.8,0,0,0,.564.234h2.516a.788.788,0,0,1,.8.8V6.76a.8.8,0,0,0,.236.564l1.121,1.126a.779.779,0,0,1,0,1.121L14.8,10.7a.8.8,0,0,0-.236.564v2.516a.788.788,0,0,1-.8.8H11.252a.8.8,0,0,0-.564.23L9.563,15.93a.779.779,0,0,1-1.121,0L7.315,14.8a.8.8,0,0,0-.564-.23H4.235a.788.788,0,0,1-.8-.8V11.26a.8.8,0,0,0-.23-.564L2.082,9.569a.779.779,0,0,1,0-1.121L3.207,7.323a.8.8,0,0,0,.23-.564V4.242a.788.788,0,0,1,.8-.8H6.751a.8.8,0,0,0,.563-.234L8.442,2.089a.8.8,0,0,1,.551-.234ZM11.37,5.82a.8.8,0,0,0-.547.241L6.053,10.832A.8.8,0,1,0,7.18,11.959L11.95,7.188a.795.795,0,0,0-.58-1.367Zm-4.752.01a.795.795,0,1,0,.795.795A.795.795,0,0,0,6.618,5.83ZM11.387,10.6a.795.795,0,1,0,.795.795A.795.795,0,0,0,11.387,10.6Z" transform="translate(-0.267 -0.264)" fill="#012a47"/>
          </svg>An equally effective and more affordable alternative to Cialis®.</li>
            <li class='flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" width="16.098" height="17.887" viewBox="0 0 16.098 17.887">
            <g id="Layer_2" data-name="Layer 2" transform="translate(-3 -2)">
              <g id="calendar" transform="translate(3 2)">
                <path id="Path_39" data-name="Path 39" d="M16.415,3.789h-.894V2.894a.894.894,0,0,0-1.789,0v.894H8.366V2.894a.894.894,0,1,0-1.789,0v.894H5.683A2.683,2.683,0,0,0,3,6.472V17.2a2.683,2.683,0,0,0,2.683,2.683H16.415A2.683,2.683,0,0,0,19.1,17.2V6.472a2.683,2.683,0,0,0-2.683-2.683ZM5.683,5.577h.894v.894a.894.894,0,1,0,1.789,0V5.577h5.366v.894a.894.894,0,1,0,1.789,0V5.577h.894a.894.894,0,0,1,.894.894v3.577H4.789V6.472A.894.894,0,0,1,5.683,5.577ZM16.415,18.1H5.683a.894.894,0,0,1-.894-.894V11.838H17.309V17.2A.894.894,0,0,1,16.415,18.1Z" transform="translate(-3 -2)" fill="#002a47"/>
                <path id="Path_40" data-name="Path 40" d="M15.472,15H12.128a.894.894,0,0,0,0,1.789h3.344a.894.894,0,1,0,0-1.789Z" transform="translate(-3.845 -3.374)" fill="#002a47"/>
                <path id="Path_41" data-name="Path 41" d="M12.441,15h-.547a.894.894,0,0,0,0,1.789h.547a.894.894,0,1,0,0-1.789Z" transform="translate(-7.317 -3.374)" fill="#002a47"/>
              </g>
            </g>
          </svg>
          Can be taken on an as-needed basis or once daily.</li>
            <li class='flex gap-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.097" height="17.357" viewBox="0 0 20.097 17.357">
            <path id="_65eb9eeb2654c423bf71c6fe55b716ce" data-name="65eb9eeb2654c423bf71c6fe55b716ce" d="M1,11.635V16.2a.914.914,0,0,0,.914.914h.914a2.741,2.741,0,1,0,5.481,0h5.481a2.741,2.741,0,1,0,5.481,0h.914A.914.914,0,0,0,21.1,16.2V5.241A2.741,2.741,0,0,0,18.357,2.5H10.135A2.741,2.741,0,0,0,7.395,5.241V7.068H5.568a2.741,2.741,0,0,0-2.192,1.1L1.183,11.087a.557.557,0,0,0-.064.128l-.055.1A.914.914,0,0,0,1,11.635Zm14.616,5.481a.914.914,0,1,1,.914.914A.914.914,0,0,1,15.616,17.116ZM9.222,5.241a.914.914,0,0,1,.914-.914h8.222a.914.914,0,0,1,.914.914V15.289h-.713a2.741,2.741,0,0,0-4.056,0H9.222ZM7.395,10.722H3.741l1.1-1.462a.914.914,0,0,1,.731-.365H7.395ZM4.654,17.116a.914.914,0,1,1,.914.914A.914.914,0,0,1,4.654,17.116ZM2.827,12.549H7.395v2.54a2.741,2.741,0,0,0-3.855.2H2.827Z" transform="translate(-1 -2.5)" fill="#002a47"/>
            </svg>
          Free shipping when prescribed.</li>
        </ul>`
        },
        {
            question: "Instructions on How to Take Tadalafil",
            answer: `<p>We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.</p>`
        },
        {
            question: "Possible Side Effects",
            answer: `<ul class='space-y-3 text-gray200 text-sm'>
            <li>* Only available if prescribed after an online consultation with a healthcare provider.</li>
            <li>* This page has been medically reviewed by (Peter J. Stahl, MD.)</li>
            <li>* Actual price to customer will depend on product and subscription plan purchase</li>
        </ul>`
        }
    ]

    return (
        <section className='bg-gray100 lg:pt-[60px] pb-6 relative'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-11 lg:gap-[74px]'>
                    <div className='lg:col-span-7'>
                        <div className='bg-gray300 rounded-b-3xl lg:rounded-r-3xl relative lg:before:bg-gray300 lg:before:absolute lg:before:w-2/4 lg:before:h-full lg:before:-left-2/4 lg:before:top-0 pl-10 sm:px-20 md:px-0 pt-14 sm:pt-28 lg:pt-32'>
                            <Image src="/images/tadalafil.png" alt="Product" width="601" height="586" className='relative z-10 mx-auto lg:ml-0 lg:mr-auto' />
                        </div>
                    </div>
                    <div className='lg:col-span-5 xl:pl-14'>
                        <span className='bg-[#4EB070] text-white rounded-[10px] text-[10px] leading-none inline-block py-1 px-3.5'>Most preferred</span>
                        <h1 className='text-2xl sm:text-[34px] leading-tight'>Longer-lasting ED Treatment with Tadalafil</h1>
                        <span className='text-dark opacity-70 text-xs block mb-2.5'>Generic for Cialis®</span>
                        <div className='flex items-center gap-1.5'>
                            <div className='flex gap-1'>
                                <StarIcon className='w-3.5 text-[#F8B84E]' />
                                <StarIcon className='w-3.5 text-[#F8B84E]' />
                                <StarIcon className='w-3.5 text-[#F8B84E]' />
                                <StarIcon className='w-3.5 text-[#F8B84E]' />
                                <StarIcon className='w-3.5 text-[#F8B84E]' />
                            </div>
                            <a href='#' className='underline text-xs text-gray200'>1263 reviews</a>
                        </div>
                        <p className='text-sm sm:text-base mt-5 mb-6'>Tadalafil is a generic medication for erectile dysfunction that contains the same active ingredient as Cialis® at only 10% of the cost. FDA approved and clinically proven to help men with ED achieve and maintain erections, Tadalafil offers a simpler solution for longer-lasting effects. Don’t wait, start your ED treatment with Tadalafil today.</p>
                        <Link href="/" className='theme-btn !min-w-full mb-7'>Take the first step today.</Link>
                        {productFeatureAccordion.map((item: any, index: any) => (
                            <Accordion open={open === index} icon={<Icon id={index} open={open} />} key={index} className='border-t border-t-[#BABBBC] py-4'>
                                <AccordionHeader onClick={() => handleOpen(index)} className='py-0 border-0 text-[dark] text-base tracking-wide'>
                                    {item.question}
                                </AccordionHeader>
                                <AccordionBody className="pb-0">
                                    <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                                </AccordionBody>
                            </Accordion>
                        ))}

                    </div>
                </div>


            </Wrapper>
        </section>
    )
}

export default ProductBanner