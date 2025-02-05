import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

export const Otp = ({ length = 6, setIsLoggedIn, isSignInFlow }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleBtnClick = () => {
    if (isSignInFlow) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      navigate("/login?showLoginForm=true");
    }
  };

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      // Move focus to previous input on backspace if current input is empty
      const newOtp = [...otp];
      console.log(newOtp, index)
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex flex-col gap-[21.59px]">
      <div className="grid grid-cols-6 gap-1 w-full mb-5">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            className="bg-[#DCDCDC] h-[47px] rounded-[3.95px] text-center"
          />
        ))}
      </div>
      <Button
        btnText="Verify"
        btnId="verify-btn"
        btnClassName="secondary-btn"
        handleClick={handleBtnClick}
      />
    </div>
  );
};
