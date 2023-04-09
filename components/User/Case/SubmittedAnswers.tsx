import React from 'react'

const SubmittedAnswers = () => {
    const data = [
        {
            questions: "Please write down additional notes.",
            answer: "This is a Test Patient"
        },
        {
            questions: "Select any of the following medical issues that apply",
            answer: "Nothing Selected"
        },
        {
            questions: "List medication allergies",
            answer: "Test Patient"
        },
        {
            questions: "Please list all other medical problems",
            answer: "Test Patient"
        },
        {
            questions: "Do you have any heart/cardiac conditions? Arrhythmias?",
            answer: "NO"
        },
        {
            questions: "Please identify all ED medications or drugs you take?",
            answer: "Nothing Selected"
        },
        {
            questions: "Please Explain, your heart/cardiac conditions",
            answer: "Nothing Selected"
        },
        {
            questions: "Have you ever had a heart attack? Cardiac surgery?",
            answer: "Test Patient"
        },

    ]
    return (
        <div className="sm:pb-12 col-span-12 lg:col-span-7">
            <div className="sm:flex sm:items-center">
                <h2 className='text-[22px] font-medium text-heading'>Submitted Answers</h2>
            </div>
            <div className="mt-6 flex flex-col">
                <div className="inline-block w-full py-2 align-middle">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th scope="col" className="pb-3 px-[18px] font-medium text-left text-sm text-dark">
                                        Questions
                                    </th>
                                    <th scope="col" className="pb-3 px-[18px] font-medium text-left text-sm text-dark">
                                        Answer
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray200 bg-opacity-5'>
                                {data.map((data, dataIdx) => (
                                    <tr key={dataIdx} className={dataIdx % 2 === 0 ? "bg-opacity-20 bg-gray200" : undefined}>
                                        <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                            {data.questions}
                                        </td>
                                        <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">{data.answer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmittedAnswers