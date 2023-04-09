import React from 'react'
import Banner from './Banner'
import WhyShouldChoose from './WhyShouldChoose'
import AvailableTreatments from './AvailableTreatments'
import LeadWays from './LeadWays'
import HowItWorks from './HowItWorks'
import CallToAction from './CallToAction'
import Newsletter from '../Newsletter'

const Homepage = () => {
    return (
        <>
            <Banner />
            <WhyShouldChoose />
            <AvailableTreatments />
            <LeadWays />
            <HowItWorks />
            <CallToAction />
            <Newsletter />
        </>
    )
}

export default Homepage