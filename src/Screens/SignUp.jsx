import { AuthLayout } from "../Layout/AuthLayout";

export const SignUp = ({ children }) => {
  return (
    <AuthLayout>
      <div className="bg-[#F9F8F3] flex flex-col">
        <div className="bg-[#FFFFFF] pt-[10px] pb-[10px] rounded-[16px] w-[362px] m-auto">
          <div className="w-[90%] m-auto flex justify-around flex-col gap-[25px]">
            <div className="text-left">
              <div className="font-black text-[25.6px]">Create an account</div>
              <div className="font-semibold text-[14.4px]"><span className="text-[#A7A8BB]">Already have an account?</span> <a>Login</a></div>
            </div>
            <div className="text-left flex flex-col gap-[4px]">
              <div>
                <div>Name</div>
                <input type="text" id="name" className="bg-[#EEF1F5] rounded-[9.6px] w-[100%] h-[56px]" />
              </div>
              <div>
                <div>Email</div>
                <input type="email" id="email" className="bg-[#EEF1F5] rounded-[9.6px] w-[100%] h-[56px]" />
              </div>
              <div>
                <div>Password</div>
                <input type="password" id="password" className="bg-[#EEF1F5] rounded-[9.6px] w-[100%] h-[56px]" />
              </div>
              <div>
                <div>Confirm Password</div>
                <input type="password" id="confirm-password" className="bg-[#EEF1F5] rounded-[9.6px] w-[100%] h-[56px]" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="bg-black text-white rounded-[4.8px] pt-[5px] h-[30px] pb-[30px]"><button>Sign up</button></div>
              <div className="bg-[#E1F0FF] rounded-[4.8px] pt-[5px] h-[30px] pb-[30px]"><button >Sign in with Google</button></div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black flex gap-[10px]">
          <div>Terms</div>
          <div>Plans</div>
          <div>Contact Us</div>
        </div>
      </div>



    </AuthLayout>
  );
}
