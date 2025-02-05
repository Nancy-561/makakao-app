import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export const ForgotPasswordEmail = ({email,updateShowOTP,updateEmail}) => {
    const handleOTP=(email)=>{
        if(email!==""){
            updateShowOTP()
        }
        else{
            console.log("Please enter email")
        }
        
    }

    return (
            <div className="flex flex-col gap-[20px]">
                <div className="text-left">
                    <div className="text-[21.06px] font-black ">Forgot Password</div>
                    <div>Please enter the email id</div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <Input inputId="Email" placeholder="Enter email id" text="Email" type="email" handleChange={updateEmail}/>
                    <Button btnText="Send OTP" btnId="signup-btn" btnClassName="secondary-btn" handleClick={()=>handleOTP(email)}/>
                    <div><a>Back to Login</a></div>

                </div>

            </div>
    );
}