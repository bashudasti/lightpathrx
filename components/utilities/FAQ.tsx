import React, { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { log } from 'console';


function Icon({ id, open }: { id: any, open: any }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${id === open ? "rotate-180" : ""} w-6 h-6 transition-transform`}>
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
        </svg>
    );
}

const FAQ = ({ data }: any) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <>
            {data?.map((item: any, index: any) => (
                <Accordion open={open === index} icon={<Icon id={index} open={open} />} key={index} className='border-b border-b-gray200 py-4'>
                    <AccordionHeader onClick={() => handleOpen(index)} className='py-0 border-0 text-[dark] text-base tracking-wide text-left'>
                        {item.question}
                    </AccordionHeader>
                    <AccordionBody className="pb-0">
                        <p>{item.answer}</p>
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    )
}

export default FAQ