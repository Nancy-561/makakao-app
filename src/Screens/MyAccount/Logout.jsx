import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../Components/Button";

export const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center">
      <form className="bg-white p-8 w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Are you sure you want to logout?
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-center">
          <a href="/" className="bg-[#4285f4] rounded-[18px] text-[#ffffff] p-[10px]">
            Logout
          </a>
          <Button
            handleClick={() => navigate("/")}
            btnText="Cancel"
            btnId="Cancel"
            btnClassName="cancel-btn"
          />
        </div>
      </form>
    </div>
  );
};