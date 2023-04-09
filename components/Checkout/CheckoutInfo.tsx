import { LinkIcon, LockClosedIcon, PencilIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";

const CheckoutInfo = () => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [shipInfo, setShipInfo] = useState(false);
    const [shipInfoB, setShipInfoB] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState(false);
    const [adShipInfo, setAdShipInfo] = useState(false);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [aditionalstate, setStateAd] = useState('');
    const [aditionalcity, setCityAd] = useState('');
    const [aditionalzipcode, setZipcodeAd] = useState('');
    const [sameAddressFlag, setSameAddressFlag] = useState('0');
    const [adShipEdit, setAdShipEdit] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur', reValidateMode: "onChange" });
    const [cardType, setCardType] = useState("");


    const validateCardNumber = (value: any) => {
        let cardNumber = value.replace(/ /g, "");
        if (cardNumber.startsWith("4")) {

            setCardType("Visa");
        } else if (cardNumber.startsWith("51") || cardNumber.startsWith("52") || cardNumber.startsWith("53") || cardNumber.startsWith("54") || cardNumber.startsWith("55")) {
            setCardType("Mastercard");
        } else {
            setCardType("");
        }

        if ((cardNumber.length == 1)) {
            setCardType("0");
        }

        if (!cardNumber || (cardNumber.length < 16) || (cardNumber.length > 16)) {
            return false;
        }
        return true;
    };


    const shippingInfoSubmit = (data: any) => {
        console.log(data);
        data['zipcode'] = zipcode;
        data['state'] = state;
        data['city'] = city;
        data['addressFlag'] = sameAddressFlag;
        setFormData(data);
        if (isValid) {
            setShipInfo(!shipInfo);
            if (sameAddressFlag == '1') {
                setShipInfoB(false);
                setAdShipEdit(true);
                setPaymentInfo(true);
            } else {
                setShipInfoB(true);
                setAdShipEdit(false);
            }

        }
    }

    const adShippingInfoSubmit = (data: any) => {
        if (data) {
            data['zipcode'] = zipcode;
            data['state'] = state;
            data['city'] = city;
            data['addressFlag'] = sameAddressFlag;
            data['aditionalzipcode'] = aditionalzipcode;
            data['aditionalstate'] = aditionalstate;
            data['aditionalcity'] = aditionalcity;
            setAdShipInfo(true);
            setShipInfoB(false);
            setPaymentInfo(true);
            setAdShipEdit(true);
            // setBillingData(data);
            setFormData(data);
            console.log(formData)
        }
    }

    const getCityAndState = (e: any) => {
        var zipCode = e.target.value;
        setZipcode(zipCode);
        axios
            .get("https://ziptasticapi.com/" + zipCode)
            .then((responce) => {
                console.log(responce);
                if (responce.data.state) {
                    setState(responce.data.state);
                }
                if (responce.data.city) {
                    setCity(responce.data.city);
                }
            })
    }

    const getCityAndStateAditional = (e: any) => {
        var zipCodeAd = e.target.value;
        console.log(zipCodeAd);
        setZipcodeAd(zipCodeAd);
        axios
            .get("https://ziptasticapi.com/" + zipCodeAd)
            .then((responce) => {
                console.log(responce);
                if (responce.data.state) {
                    setStateAd(responce.data.state);
                }
                if (responce.data.city) {
                    setCityAd(responce.data.city);
                }
            })
    }

    const setBilllingAddress = (e: any) => {
        if (e.target.checked == true) {
            console.log(formData)
            setSameAddressFlag('1');
        } else {
            setSameAddressFlag('0');
        }
    }

    const paymentInfoSubmit = (data: any) => {
        console.log(data);
    }


    // Ship Information Edit
    const shipInfoEditHandler = () => {
        setShipInfoB(false);
        setShipInfo(false);
        setAdShipEdit(true);
        setPaymentInfo(false);
    }

    // Additional Ship Information Edit
    const adShipInfoEditHandler = () => {
        setShipInfo(true);
        setShipInfoB(true);
        setAdShipEdit(false);
        setPaymentInfo(false);
    }



    return (
        <div className="space-y-6">
            {/* Shipping information */}
            <div>
                <div className='bg-gray200 md:py-3 px-6 md:px-7 flex items-center justify-between h-20 md:h-[60px]'>
                    <p className='text-white text-lg md:text-xl'>1. Shipping Information</p>
                    {shipInfo &&
                        <button type='button' className='bg-white rounded-md text-base font-medium w-24 md:w-32 h-11 gap-1 flex items-center justify-center' onClick={shipInfoEditHandler}>
                            <PencilIcon className='w-5 h-5' />
                            <span>Edit</span>
                        </button>
                    }
                </div>
                <div className='bg-gray100 pt-6 px-4 md:px-7 pb-8'>
                    {!shipInfo &&
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(shippingInfoSubmit)}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="firstname" className="block text-sm text-gray200">
                                        First Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="firstname"
                                            type="text"
                                            {...register('firstname', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.firstname && <p className='text-orange text-xs mt-2'>First Name is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm text-gray200">
                                        Last Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="lastname"
                                            type="text"
                                            {...register('lastname', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.lastname && <p className='text-orange text-xs mt-2'>Last Name is required</p>}
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="birthday" className="block text-sm text-gray200">
                                        Birthday*
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="birthday"
                                            type="text"
                                            {...register('birthday', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.birthday && <p className='text-orange text-xs mt-2'>Birthday is required</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm text-gray200">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        type="tel"
                                        {...register('phone', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.phone && <p className='text-orange text-xs mt-2'>Phone is required</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm text-gray200">
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="address"
                                        type="text"
                                        {...register('address', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.address && <p className='text-orange text-xs mt-2'>Address is required</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="zipcode" className="block text-sm text-gray200">
                                    Zip Code
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="zipcode"
                                        name="zipcode"
                                        onChange={(e) => getCityAndState(e)}
                                        type="text"
                                        defaultValue={zipcode}
                                        // {...register('zipcode', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.zipcode && <p className='text-orange text-xs mt-2'>Zip Code is required</p>}

                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="state" className="block text-sm text-gray200">
                                        State
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="state"
                                            name="state"
                                            value={state}
                                            type="text"
                                            // {...register('zipcode', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.state && <p className='text-orange text-xs mt-2'>State is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm text-gray200">
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="city"
                                            name="city"
                                            value={city}
                                            type="text"
                                            // {...register('zipcode', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.city && <p className='text-orange text-xs mt-2'>City is required</p>}
                                    </div>
                                </div>

                            </div>
                            <div className="form-check mt-3">

                                <input type="checkbox" name="billingsame" id="billingsame" onChange={(e) => setBilllingAddress(e)} className='h-4 w-4 border border-[#a4a4a4] bg-[#f4f3f3] checked:bg-blue checked:border-blue  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                                <label className="form-check-label inline-block text-[#525252] text-sm" htmlFor="billingsame">
                                    Billing Same As Shipping
                                </label>
                            </div>

                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn !min-w-0 w-full capitalize"
                                >
                                    Save & Continue
                                </button>
                            </div>
                        </form>
                    }

                    {shipInfo &&
                        <div>
                            <h6 className='text-heading font-medium text-base leading-none mb-7'>{formData.firstname} {formData.lastname}</h6>
                            <p className='text-[#525252] text-sm'>{formData.phone}</p>
                            <p className='text-[#525252] text-sm'>{formData.address}</p>
                            <p className='text-[#525252] text-sm'>{formData.city}, {formData.state}, {formData.zipcode}</p>
                        </div>
                    }
                </div>
            </div>

            {/* 1b Billing Information */}
            <div>
                <div className='bg-gray200 md:py-3 px-6 md:px-7 flex items-center justify-between h-20 md:h-[60px]'>
                    <p className='text-white text-lg md:text-xl'>1b. Billing Information</p>
                    {adShipEdit &&
                        <button type='button' className='bg-white rounded-md text-base font-medium w-24 md:w-32 h-11 gap-1 flex items-center justify-center' onClick={adShipInfoEditHandler}>
                            <PencilIcon className='w-5 h-5' />
                            <span>Edit</span>
                        </button>
                    }
                    {!adShipEdit && !shipInfoB && <div><LockClosedIcon className='w-6 h-6 text-white' /></div>}
                </div>


                {shipInfoB &&
                    <div className='bg-gray100 pt-6 px-4 md:px-7 pb-8'>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(adShippingInfoSubmit)}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="aditionalfirstname" className="block text-sm text-gray200">
                                        First Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionalfirstname"
                                            type="text"
                                            {...register('aditionalfirstname', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalfirstname && <p className='text-orange text-xs mt-2'>First Name is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="aditionallastname" className="block text-sm text-gray200">
                                        Last Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionallastname"
                                            type="text"

                                            {...register('aditionallastname', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionallastname && <p className='text-orange text-xs mt-2'>Last Name is required</p>}
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="aditionalphone" className="block text-sm text-gray200">
                                    Phone
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="aditionalphone"
                                        type="tel"
                                        {...register('aditionalphone', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.aditionalphone && <p className='text-orange text-xs mt-2'>Phone is required</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="aditionaladdress" className="block text-sm text-gray200">
                                    Address
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="aditionaladdress"
                                        type="text"
                                        {...register('aditionaladdress', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.aditionaladdress && <p className='text-orange text-xs mt-2'>Address is required</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="aditionalzipcode" className="block text-sm text-gray200">
                                    Zip Code
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="aditionalzipcode"
                                        name="aditionalzipcode"
                                        type="text"
                                        onChange={(e) => getCityAndStateAditional(e)}
                                        defaultValue={aditionalzipcode}
                                        // {...register('aditionalzipcode', { required: true })}
                                        className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.aditionalzipcode && <p className='text-orange text-xs mt-2'>Zip Code is required</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="aditionalstate" className="block text-sm text-gray200">
                                        State
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionalstate"
                                            name="aditionalstate"
                                            value={aditionalstate}
                                            type="text"
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalstate && <p className='text-orange text-xs mt-2'>State is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="aditionalcity" className="block text-sm text-gray200">
                                        City
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionalcity"
                                            name="aditionalcity"
                                            value={aditionalcity}
                                            type="text"
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalcity && <p className='text-orange text-xs mt-2'>City is required</p>}
                                    </div>
                                </div>

                            </div>


                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn !min-w-0 w-full capitalize"
                                >
                                    Save & Continue
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>


            {/* 2. Payment Information */}
            <div>
                <div className='bg-gray200 md:py-3 px-6 md:px-7 flex items-center justify-between h-20 md:h-[60px]'>
                    <p className='text-white text-lg md:text-xl'>2. Payment Information</p>
                    {!paymentInfo && <div><LockClosedIcon className='w-6 h-6 text-white' /></div>}
                </div>
                {paymentInfo &&
                    <div className='bg-gray100 pt-6 px-4 md:px-7 pb-8'>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(paymentInfoSubmit)}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="cardnumber" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Card Number
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="cardnumber"
                                            type="text"
                                            {...register('cardnumber', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {cardType === "" && <p className='text-orange text-xs mt-2'>Invalid Card Number</p>}
                                        {cardType === "0" && <p className='text-orange text-xs mt-2'>Card number is required</p>}
                                        {/* {errors.cardnumber && <p className='text-orange text-xs mt-2'>{errors.cardnumber?.message}</p>} */}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="expiry" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        MM/YY
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="expiry"
                                            type="text"
                                            {...register('expiry', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors.expiry?.type === "required" && <p className='text-orange text-xs mt-2'>Date is required</p>}
                                        {errors.expiry?.type === "pattern" && (
                                            <p className='text-orange text-xs mt-2'>Invalid expiry date format</p>
                                        )}
                                        {errors.expiry?.type === "validate" && (
                                            <p className='text-orange text-xs mt-2'>Expiry date must be in the future</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="cvc" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        CVC
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="cvc"
                                            type="text"
                                            {...register('cvc', { required: true })}
                                            className="block w-full appearance-none rounded-lg border-2 border-gray200 px-3 py-3 sm:py-3 bg-[#FFFFFF80] text-dark placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors.cvc?.type === "required" && <p className='text-orange text-xs mt-2'>CVC number is required</p>}
                                        {errors.cvc?.type === "pattern" && (
                                            <p className='text-orange text-xs mt-2'>Invalid cvc</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn !min-h-0 w-full capitalize"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div >
    )
}

export default CheckoutInfo