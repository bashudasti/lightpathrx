import React, { useState } from 'react'
import Step1 from './Steps/Step1'
import { useForm } from 'react-hook-form'
import Step2 from './Steps/Step2';
import StepHeader from './StepHeader';
import ProgressBar from './ProgressBar';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import Step7 from './Steps/Step7';
import StepCounter from './StepCounter';

const Stepper = () => {
    const [step, setStep] = useState(1);
    const { watch, register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({ mode: 'onChange' });
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
        <section className='bg-gray100 pt-9 pb-5'>
            <div className="mx-auto max-w-[725px] px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-white rounded-3xl pt-8 sm:pt-10 pb-[52px] px-4 sm:px-[118px]'>
                        <StepCounter step={step} />
                        <StepHeader />
                        <ProgressBar step={step} percentage={(step / 7) * 100} />
                        {step === 1 && (
                            <Step1
                                isValid={isValid}
                                nextStep={nextStep}
                                register={register}
                                errors={errors}
                            />
                        )}

                        {step === 2 && (
                            <Step2
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}

                        {step === 3 && (
                            <Step3
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}

                        {step === 4 && (
                            <Step4
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}

                        {step === 5 && (
                            <Step5
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}


                        {step === 6 && (
                            <Step6
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}
                        {step === 7 && (
                            <Step7
                                isValid={isValid}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                register={register}
                                errors={errors}
                            />
                        )}

                    </div>

                </form>
            </div>
        </section>
    )
}

export default Stepper