import React from 'react'
import StepCounter from './StepCounter'
import ProgressBar from './ProgressBar'

const StepHeader = () => {
    return (
        <>
            <p className='my-4 sm:my-[22px] text-center text-gray200 text-xs sm:text-base'>In order for us to ship your pills, <br /> you <span className='text-[#EB0033]'>MUST</span> first answer some questions about your health</p>
            <h4 className='text-lg sm:text-[22px] leading-tight text-center mb-4'>Please Complete Medical Profile</h4>
        </>
    )
}

export default StepHeader