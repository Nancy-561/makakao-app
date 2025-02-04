import { Button } from "./Button";

export const Otp = () => {
    return (
        <div className="flex flex-col gap-[21.59px]">
            <div className="grid grid-cols-6 gap-1 w-full mb-5">
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
                <input type="text" className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center" />
            </div>
            <div>
                <Button
                    btnText="Verify"
                    btnId="verify-btn"
                    btnClassName="secondary-btn"
                />
            </div>
        </div>

    );
};