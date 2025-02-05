import { Otp } from "../../Components/Otp";

export const ForgotPasswordOtp = ({email,updateShowOTP}) => {

    return (

        <div className="flex flex-col gap-[25px]">
            <div className="text-left">
                <div className="text-[21.06px] font-semibold">Forgot Password</div>
                <div>Please enter 6 digit code we just sent to 
                    <span className="px-2 font-semibold">{email}</span> 
                    <button className="underline text-[#026080]" onClick={updateShowOTP}>Edit</button>
                </div>
            </div>
            <Otp />
        </div>
    );
}