import React, { useState } from "react";

import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { AuthLayout } from "../Layout/AuthLayout";

export const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleFormUpdate = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <AuthLayout showTNC={true}>
      <div className="text-left">
        <div className="text-[25.6px]">Create an account</div>
        <div className="font-semibold text-[14.4px]">
          <span className="text-[#A7A8BB]">Already have an account?</span>{" "}
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="my-6">
        <Input
          inputId="Name"
          text="Name"
          handleChange={handleFormUpdate}
          value={formData.Name}
        />
        <Input
          inputId="Email"
          text="Email"
          type="email"
          handleChange={handleFormUpdate}
          value={formData.Email}
        />
        <Input
          inputId="Password"
          text="Password"
          type="password"
          handleChange={handleFormUpdate}
          value={formData.Password}
        />
        <Input
          inputId="confirm-password"
          text="Confirm Password"
          handleChange={handleFormUpdate}
          value={formData["confirm-password"]}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Button
          btnText="Sign up"
          btnId="signup-btn"
          btnClassName="secondary-btn"
          handleClick={() => console.log(formData)}
        />
        <Button
          btnText="Sign in with Google"
          btnId="google-signin-btn"
          btnClassName="google-btn"
        />
      </div>
    </AuthLayout>
  );
};
