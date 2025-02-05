import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { LoginForm } from "./LoginForm";
import { Button } from "../../Components/Button";
import { AuthLayout } from "../../Layout/AuthLayout";

export const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormUpdate = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const handleRedirect = () => {
    if (!showLogin) {
      navigate('/signup');
    } else {
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-between h-full px-8">
        <div className="w-full">
          <img src="/makakao-logo.png" alt="makakao-logo" className="mx-auto" />
          <h1 className="font-century-gothic text-3xl font-bold mb-4">
            {showLogin ? "Login" : "Create an Account"}
          </h1>
        </div>
        {showLogin && <LoginForm handleFormUpdate={handleFormUpdate} formData={formData} />}
        <div className="w-full">
          <div className="font-century-gothic text-lg font-bold leading-[24px] mb-3">
            Continue with
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mb-5">
            <Button
              btnText="Google"
              btnId="google-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText="Apple"
              btnId="apple-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText="Facebook"
              btnId="facebook-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText="Instagram"
              btnId="insta-btn"
              btnClassName="font-century-gothic login-btn"
            />
          </div>
          {!showLogin && (
            <div className="font-poppins font-semibold text-md leading-[24px] text-gray-500 mb-5">
              Terms
              <span className="font-century-gothic font-bold text-black mx-5">
                or
              </span>
              Contact Us
            </div>
          )}
          <Button
            btnText={showLogin ? "Login" : "Continue with Email"}
            btnId="login-btn"
            handleClick={handleRedirect}
          />
          <div className="font-inter text-lg leading-[21.78px] mt-4 text-gray-500 mb-8">
            {showLogin ? "Don’t have account? " : "Already have an account? "}
            <button onClick={handleClick} className="text-blue-500">
              {showLogin ? "Sign Up" : "Log in"}
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
