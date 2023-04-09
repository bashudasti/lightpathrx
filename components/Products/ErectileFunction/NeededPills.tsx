import React from 'react'
import Wrapper from '../../utilities/Wrapper'
import { Bar } from '../../utilities/Bar'
import SingleProduct from '../SingleProduct'

const NeededPills = () => {
    const neededProducts: object[] = [
        {
            title: "Generic for Viagra",
            perUser: "from $3 per user",
            description: "At just $3 per use, the generic version of Viagra® (Sildenafil Citrate) is the most commonly used ED treatment on our platform. It contains the same active ingredient as Viagra®, but costs 95% less than the brand name medication.",
            image: "/images/needed-pill1.png",
            imageWidth: "360",
            imageHeight: "371"
        },
        {
            title: "Generic for Cialis",
            perUser: "from $139 per user",
            description: "For just $82 per month, the generic version of Cialis® (Tadalafil) offers an unbranded and cost-effective alternative that can be taken as-needed. As-needed tadalafil lasts for 24-36 hours, enabling longer-lasting erections.",
            image: "/images/needed-pill2.png",
            imageWidth: "360",
            imageHeight: "371"

        }
    ]

    const dailyProducts: object[] = [
        {
            title: "Generic for Cialis",
            perUser: "from $3 per user",
            description: "The generic version of Cialis® (Tadalafil) is available for just $82 per month and contains the same active ingredient as Cialis®. This daily ED pill is a cost-effective alternative, ideal if you want to be ready for sexual activity 24/7 without the need for planning ahead.",
            image: "/images/daily-ed.png",
            imageWidth: "360",
            imageHeight: "371"
        },
    ]
    return (
        <section className='pt-24 pb-32'>
            <Wrapper>
                <div className='max-w-xl mb-24'>
                    <Bar float="left" />
                    <h4 className='text-[26px] sm:text-[42px] leading-tight font-bold mb-2'>As Needed ED Pills</h4>
                    <p>Millions of men use as-needed ED pills, which are taken prior to sexual activity. They are particularly useful if you can anticipate when you will engage in sexual activity, or if you prefer not to take a pill every day.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-28 lg:gap-11'>
                    {neededProducts.map((item, index) => (
                        <SingleProduct data={item} key={index} />
                    ))}

                </div>


                <div className='max-w-xl mb-24 mt-14 sm:mt-48'>
                    <Bar float="left" />
                    <h4 className='text-[26px] sm:text-[42px] leading-tight font-bold mb-2'>Daily ED pills</h4>
                    <p>Are you someone who lives in the moment? Daily ED pills allow you to be prepared for sexual activity at any time, as they are taken every day. With no need to carry pills or plan ahead, you can be ready to go whenever the opportunity arises.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-11'>
                    {dailyProducts.map((item, index) => (
                        <SingleProduct data={item} key={index} />
                    ))}

                </div>
            </Wrapper>
        </section>
    )
}

export default NeededPills