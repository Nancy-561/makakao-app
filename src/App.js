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
  ProductListing,
  ProductDetails,
} from "./Screens";
import "./App.css";
import { Cart } from "./Screens/Cart";
import { Shipping } from "./Screens/Cart/Shipping";

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
            <Route path="product-listing" element={<ProductListing />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="cart-shipping" element={<Shipping/>} />
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
