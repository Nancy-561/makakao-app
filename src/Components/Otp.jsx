import { Button } from "./Button";
import React, { useState, useRef } from "react";

export const Otp = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

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

    // Move focus to previous input on backspace
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to previous input on backspace if current input is empty
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
      />
    </div>
  );
};
