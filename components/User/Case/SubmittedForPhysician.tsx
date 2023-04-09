import Image from 'next/image'
import React from 'react'

const SubmittedForPhysician = () => {
  return (
    <div className="sm:py-6 sm:px-4">
      <div className="sm:flex sm:items-center mb-7">
        <h2 className='text-[22px] font-medium text-heading'>Submit Files for Physician Review</h2>
      </div>
      <Image src="/images/case-dummy.png" alt="case" width="403" height="387" />
    </div>
  )
}

export default SubmittedForPhysician