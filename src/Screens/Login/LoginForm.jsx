import React from "react";
import { Input } from "../../Components/Input";

export const LoginForm = ({handleFormUpdate, formData}) => {
  return (
    <form className="w-full">
      <Input
        inputId="username"
        placeholder="info@gmail.com"
        text="Username"
        handleChange={handleFormUpdate}
        inputClassName="white-bg-input"
        value={formData.username}
      />
      <Input
        inputId="password"
        placeholder="********"
        type="password"
        text="Password"
        handleChange={handleFormUpdate}
        inputClassName="white-bg-input"
        value={formData.password}
      />
      <div className="mb-4 text-right">
        <a
          className="font-inter text-lg leading-[21.78px] text-blue-500"
          href="/forgot-password"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};
