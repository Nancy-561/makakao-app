import { AuthLayout } from "../../Layout/AuthLayout";
import { ForgotPasswordEmail } from "./ForgotPasswordEmail";
import { ForgotPasswordOtp } from "./ForgotPasswordOtp";
import React, { useState } from "react";

export const ForgotPassword = () => {
    const [showOTP, setShowOTP] = useState(false)
    const [email,setEmail] = useState("")
    const updateShowOTP=()=>{setShowOTP(!showOTP)}
    const updateEmail=(e)=>{setEmail(e.target.value)}
    return (
        <AuthLayout showTNC={true}>
            <div className="w-[90%] m-auto flex justify-around flex-col gap-[25px] p-[25px]">
                <div className="w-full ">
                    <img src="/makakao-logo.png" alt="makakao-logo" className="mx-auto" />
                </div>
                {showOTP?<ForgotPasswordOtp email={email} updateShowOTP={updateShowOTP}/>: <ForgotPasswordEmail email={email} updateShowOTP={updateShowOTP} updateEmail={updateEmail}/>}
            </div>
        </AuthLayout>
    );
}