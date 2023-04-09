import React from 'react'

const StepCounter = ({ step }: any) => {
    return (
        <div className='border-2 border-gray200 border-opacity-50 rounded-lg flex items-center'>
            <div className='flex gap-3 items-center py-2 px-5'>
                <span className={`${step === 1 ? "bg-green bg-opacity-20 text-green" : "bg-green text-white"} flex items-center justify-center text-2xl w-[38px] h-[38px] rounded-full`}>1</span>
                {step === 1 &&
                    <p className='text-green'>Questions</p>
                }
            </div>
            <span className='text-gray200 opacity-50'>|</span>
            <div className='flex gap-3 items-center py-2 px-5'>
                <span className={`${step === 1 ? "bg-dark bg-opacity-20 text-white" : "bg-green bg-opacity-20 text-green"} flex items-center justify-center text-2xl w-[38px] h-[38px] rounded-full flex-grow-0 flex-shrink-0`}>2</span>
                {step !== 1 &&
                    <p className='text-green text-sm sm:text-base'>Complet Health Questionnaire</p>
                }
            </div>
        </div>
    )
}

export default StepCounter