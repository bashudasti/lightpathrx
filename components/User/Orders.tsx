import React from 'react'

const Orders = () => {
    const dataLabel = [
        {
            label: "Transaction Number"
        },
        {
            label: "Product Name & qty"
        },
        {
            label: "CC Type"
        },
        {
            label: "Amount"
        },
        {
            label: "Status"
        },
        {
            label: "Shipping"
        },
        {
            label: "Tracking Number"
        },
        {
            label: "Created At"
        }
    ]
    const data = [
        {
            transactionNumber: "43513371640",
            productName: "Sildenafil 60 mg, 12 days supply x1",
            ccType: "master",
            amount: "$72.00",
            status: "Confirmed",
            shipping: "Cancelled",
            trackingNumber: "Not Set",
            createdAT: "2022-07-11, 12:38:47"
        },
        {
            transactionNumber: "43513371640",
            productName: "Sildenafil 60 mg, 12 days supply x1",
            ccType: "master",
            amount: "$72.00",
            status: "Confirmed",
            shipping: "Cancelled",
            trackingNumber: "Not Set",
            createdAT: "2022-07-11, 12:38:47"
        },
        {
            transactionNumber: "43513371640",
            productName: "Sildenafil 60 mg, 12 days supply x1",
            ccType: "master",
            amount: "$72.00",
            status: "Confirmed",
            shipping: "Cancelled",
            trackingNumber: "Not Set",
            createdAT: "2022-07-11, 12:38:47"
        }
    ]
    return (
        <div className="overflow-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        {dataLabel.map((item, index) => (
                            <th scope="col" key={index} className="pb-3 px-[18px] font-medium text-left text-sm text-dark">
                                {item.label}
                            </th>
                        ))}

                    </tr>
                </thead>
                <tbody className='bg-gray200 bg-opacity-5'>
                    {data.map((list, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-opacity-20 bg-gray200" : undefined}>
                            <td className='whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left'>
                                {list.transactionNumber}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.productName}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.ccType}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.amount}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.status}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.shipping}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.trackingNumber}
                            </td>
                            <td className="whitespace-nowrap px-[18px] py-3 text-sm text-dark text-left">
                                {list.createdAT}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Orders