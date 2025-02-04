import { AuthLayout } from "../Layout/AuthLayout";
import { Otp } from "../Components/Otp";

export const Verify = () => {
    return (
        <AuthLayout showTNC={true}>
            <div className="w-[90%] m-auto flex justify-around flex-col gap-[25px] p-[25px]">
                <div className="w-full ">
                    <img src="/makakao-logo.png" alt="makakao-logo" className="mx-auto" />
                </div>
                <div className="flex flex-col gap-[25px]">
                    <div>
                        <div className="text-[21.06px] font-black">Verify your email</div>
                        <div>Please enter 6 digit code we just sent to alexbrown@technovade.com</div>
                    </div>
                    <Otp />
                </div>
            </div>
        </AuthLayout>
    );
}