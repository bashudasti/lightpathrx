import React from 'react'

const InputLabel = ({ htmlFor, name }: any) => {
    return (
        <label htmlFor={htmlFor} className='capitalize text-[13px] text-heading mb-2'>{name}</label>
    )
}

export default InputLabel