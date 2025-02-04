import React, { useState } from "react";
import { Input } from "../../Components/Input";

export const LoginForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  console.log(Username, Password);

  return (
    <form className="w-full">
      <Input
        inputId="username"
        placeholder="info@gmail.com"
        text="Username"
        handleChange={(e) => setUsername(e?.target?.value)}
      />
      <Input
        inputId="password"
        placeholder="********"
        type="password"
        text="Password"
        handleChange={(e) => setPassword(e?.target?.value)}
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
