import React, { useState } from "react";
import { FaLocationDot,FaRegCreditCard  } from "react-icons/fa6";
import { ShoppingCart } from 'lucide-react';
import { Button } from "../../Components/Button";
import { Address } from "../../Components/Address";
import { Payment } from "./Payment";
import { Shipping } from "./Shipping";


export const CartCheckout = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const nextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const renderEachStep = (currentStep, stepNumber, stepName, Icon) => {
        return (
            <div
                style={currentStep === stepNumber - 1 ? { color: "black" } : { color: "gray" }}
                className="flex items-center"
            >
                <div>{Icon}</div>
                <div className="text-left text-sm mx-[0.5rem]">
                    <div>Step {stepNumber}</div>
                    <div>{stepName}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="mx-[12rem] my-[2rem]">
            <div className="flex items-center justify-between">
                {renderEachStep(currentStep, 1, "Address", <FaLocationDot />)}
                <div className="border-2 border-dashed border-gray min-w-[10rem]"></div>
                {renderEachStep(currentStep, 2, "Shipping", <ShoppingCart />)}
                <div className="border-2 border-dashed border-gray min-w-[10rem]"></div>
                {renderEachStep(currentStep, 3, "Payment", <FaRegCreditCard />)}
            </div>

          <div className="flex-grow mt-[1rem]">
            {currentStep === 0 && <Address />}
            {currentStep === 1 && <Shipping />}
            {currentStep === 2 && <Payment />}
          </div>

            <div className="flex gap-4 justify-end">
                <Button
                    btnText="Back"
                    btnId="back-btn"
                    btnClassName="secondary-btn max-w-[15%]"
                    handleClick={prevStep}
                />
                <Button
                    btnText="Next"
                    btnId="next-btn"
                    btnClassName="secondary-btn max-w-[15%]"
                    handleClick={nextStep}
                />
            </div>
        </div>

    );
};