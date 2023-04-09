import React from 'react'

const ProgressBar = ({ step, percentage }: any) => {
    return (
        <div className="overflow-hidden rounded-full bg-gray200 bg-opacity-20">
            <div className="h-2.5 rounded-full bg-green" style={{ width: `${percentage}%` }} />
        </div>
    )
}

export default ProgressBar