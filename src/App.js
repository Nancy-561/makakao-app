import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainLayout } from "./Layout/MainLayout";
import {
  Login,
  SignUp,
  Verify,
  ForgotPassword,
  MyAccount,
  Home,
} from "./Screens";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(3);

  return (
    <Router>
      <div className="App bg-[#F5F5F5]">
        <Routes>
          <Route
            path="/"
            element={<MainLayout isLoggedIn={isLoggedIn} count={count} />}
          >
            <Route index element={<Home />} />
            <Route path="product-listing" element={<div>Product Listing</div>} />
            <Route path="product-details" element={<div>Product Details</div>} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="cart" element={<div>Cart</div>} />
          </Route>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={() => setIsLoggedIn(true)} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/verify"
            element={
              <Verify
                setIsLoggedIn={() => setIsLoggedIn(true)}
                isSignInFlow={true}
              />
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
