import React from 'react'
import EFBanner from './Banner'
import RemoteTreatment from './RemoteTreatment'
import AboutED from './AboutED'
import EDTreatments from './EDTreatments'
import TreatmentOptions from './TreatmentOptions'
import NeededPills from './NeededPills'
import PrivacynExpertise from './PrivacynExpertise'
import ProductFAQ from '../ProductFAQ'
import CallToActionProduct from './CallToActionProduct'
import Newsletter from '../../Newsletter'

const ErectileFunction = () => {
    const FAQData: object[] = [
        {
            question: "What is the main cause of ED?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What are the symptoms of ED?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "How do ED pills work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What is the safest drug for erectile dysfunction?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Which erectile dysfunction medicine is best?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What is the most effective pill for ED?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What are the side effects of erectile dysfunction medications?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Are ED drugs available over-the-counter?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Can you take Viagra or other PDE5s with a heart condition?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "What blood pressure medication does not cause erectile dysfunction?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "How can I improve my sexual health beyond meds for erectile dysfunction?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Can an enlarged prostate cause ED?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        },
        {
            question: "Can low testosterone cause ED?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, nulla sed convallis varius, nisi mauris iaculis urna, at porta justo nisl faucibus nisl. Vivamus auctor mauris at augue egestas suscipit."
        }
    ]
    return (
        <>
            <EFBanner />
            <RemoteTreatment />
            <AboutED />
            <EDTreatments />
            <TreatmentOptions />
            <NeededPills />
            <PrivacynExpertise />
            <ProductFAQ data={FAQData} />
            <CallToActionProduct />
            <Newsletter />
        </>
    )
}

export default ErectileFunction