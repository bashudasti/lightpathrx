import React from 'react'

export const Bar = (props: { float: string }) => {
    return (
        <span className={`bg-green h-1.5 w-20 ${props.float === "center" ? "ml-auto mr-auto" : ""} block rounded-lg mb-3`}></span>
    )
}