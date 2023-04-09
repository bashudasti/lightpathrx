import React from 'react'
import ProductBanner from './Banner'
import WhyProduct from './WhyProduct'
import HowProductWork from './HowProductWork'
import Testimonial from '../../Testimonial'
import IntroductionTaking from './IntroductionTaking'
import GetOnline from './GetOnline'
import ProductFAQ from '../ProductFAQ'
import ExploreMoreProducts from '../ExploreMoreProducts'

const Tadalafil = () => {
    const FAQData: object[] = [
        {
            question: "What are the uses of tadalafil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "How long does tadalafil take to work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What is the duration of tadalafil’s effectiveness?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What are the ingredients of tadalafil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "How much tadalafil should be taken?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Is tadalafil the same as Cialis®?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Is tadalafil more potent than Viagra®?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Any Tadalafil side effects?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "How safe is Tadalafil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Does tadalafil have any interactions?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Is tadalafil a controlled substance?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Can you take tadalafil daily?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        }
    ]
    return (
        <>
            <ProductBanner />
            <WhyProduct />
            <HowProductWork />
            <Testimonial />
            <IntroductionTaking />
            <GetOnline />
            <ProductFAQ data={FAQData} />
            <ExploreMoreProducts />
        </>
    )
}

export default Tadalafil