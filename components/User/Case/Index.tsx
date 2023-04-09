import React from 'react'
import SubmittedAnswers from './SubmittedAnswers'
import SubmittedFiles from './SubmittedFiles'
import SubmittedForPhysician from './SubmittedForPhysician'

const Case = () => {
    return (
        <div className='grid grid-cols-12 lg:grid-cols-12 gap-8'>
            <SubmittedAnswers />
            <div className='space-y-8 col-span-12 lg:col-span-5'>
                {/* <SubmittedFiles /> */}
                <SubmittedForPhysician />
            </div>
        </div>
    )
}

export default Case