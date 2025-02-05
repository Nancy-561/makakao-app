import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaApple, FaFacebook } from "react-icons/fa";

import { LoginForm } from "./LoginForm";
import { Button } from "../../Components/Button";
import { AuthLayout } from "../../Layout/AuthLayout";

export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("showLoginForm") === "true") {
      setShowLogin(true);
    }
  }, [location?.search]);

  const handleFormUpdate = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const handleRedirect = () => {
    if (!showLogin) {
      navigate("/signup");
    } else {
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-between h-full px-8">
        <div className="w-full">
          <img
            src="/makakao-logo.png"
            alt="makakao-logo"
            className={showLogin ? "mx-auto" : "mx-auto mb-4"}
          />
          <h1 className="font-century-gothic text-3xl font-bold mb-4">
            {showLogin ? "Login" : "Create an Account"}
          </h1>
        </div>
        {showLogin && (
          <LoginForm handleFormUpdate={handleFormUpdate} formData={formData} />
        )}
        <div className="w-full">
          <div className="font-century-gothic text-lg font-bold leading-[24px] mb-3">
            Continue with
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mb-5">
            <Button
              btnText={
                <>
                  <img src="/google.png" alt="google-logo" className="mr-4" />
                  Google
                </>
              }
              btnId="google-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText={
                <>
                  <FaApple size={31} className="text-[#000000] mr-4" />
                  Apple
                </>
              }
              btnId="apple-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText={
                <>
                  <FaFacebook size={31} className="text-[#4460A0] mr-4" />
                  Facebook
                </>
              }
              btnId="facebook-btn"
              btnClassName="font-century-gothic login-btn"
            />
            <Button
              btnText={
                <>
                  <img src="/insta.png" alt="insta-logo" className="mr-4" />
                  Instagram
                </>
              }
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
          <div className="font-inter text-lg leading-[21.78px] mt-4 text-gray-500 mb-4">
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
