import React, { useState } from 'react'
import DecideMedicine from './DecideMedicine'
import Strength from './Strength'
import Doses from './Doses'
import { useForm } from 'react-hook-form'

const CartPage = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({ mode: 'onChange' });
    const nextStep = () => {
        if (isValid) {
            setStep(step + 1);
        }
    }
    const prevStep = () => setStep(step - 1);

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <DecideMedicine
                        nextStep={nextStep}
                        register={register}
                        errors={errors}
                    />
                )}
                {step === 2 && (
                    <Strength
                        nextStep={nextStep}
                        prevStep={prevStep}
                        register={register}
                        errors={errors}
                    />
                )}
                {step === 3 && (
                    <Doses
                        prevStep={prevStep}
                        register={register}
                        errors={errors}
                    />
                )}
            </form>
        </>
    )
}

export default CartPage