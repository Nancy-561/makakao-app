import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

import { accountOptions } from "../../Screens/MyAccount";
import { SearchBar } from "../../Components/SearchBar";
import { navTabs } from "../../Mocks/productMock";
import { HeaderWrapper, Nav } from "./Header.styles";

export const Header = ({ isLoggedIn, count }) => {
  const navigate = useNavigate();
  const [showAccountOptions, setShowAccountOptions] = useState(false);

  return (
    <>
      <HeaderWrapper className="flex items-center justify-between p-2 md:p-0 bg-white">
        <div className="flex items-center gap-4">
          <img
            src="/makakao-logo.png"
            alt="makakao-logo"
            className="h-[100px] hidden md:block"
            onClick={() => navigate("/")}
          />
          <SearchBar />
        </div>
        <div className="flex items-center gap-1 md:gap-4 md:px-8 relative">
          <a href="#" className="flex items-center gap-1 sell-btn">
            <FiShoppingCart className="h-[24px] w-[24px]" />
            <span className="hidden md:block">Sell</span>
          </a>
          {isLoggedIn ? (
            <>
              <Link to="/cart" className="relative inline-block">
                <div className="cart-icon">
                  <FiShoppingBag className="h-[24px] w-[24px]" />
                </div>
                {count > 0 && (
                  <span className="badge bg-[#026080] text-white rounded-full font-inter">
                    {count}
                  </span>
                )}
              </Link>
              <div
                className="flex items-center gap-4 user-btn"
                onClick={() => setShowAccountOptions(!showAccountOptions)}
                onBlur={() => setShowAccountOptions(false)}
              >
                <IoPersonCircleOutline className="h-[36px] w-[36px]" />
                <span className="hidden md:block">James</span>
                {showAccountOptions ? (
                  <IoIosArrowUp className="mr-3 hidden md:block" />
                ) : (
                  <IoIosArrowDown className="mr-3 hidden md:block" />
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="flex items-center gap-1 sell-btn">
              <GoPerson className="h-[24px] w-[24px] icon" /> Login/SignUp
            </Link>
          )}
          {showAccountOptions && (
            <div className="account-options pt-5 pb-2 px-10 shadow-custom">
              {accountOptions.map(({ name }) => (
                <Link
                  to={name === "Help Center" ? "/help" : "/my-account"}
                  state={{ name }}
                  className="font-poppins text-[14px] mb-3"
                  onClick={() => setShowAccountOptions(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </HeaderWrapper>
      <Nav className="md:justify-center">
        {navTabs.map(({ name, id }) => (
          <Link
            to="/product-listing"
            state={{ category: id }}
            key={id}
            className="font-poppins inline-block whitespace-nowrap p-[14px]"
          >
            {name}
          </Link>
        ))}
      </Nav>
    </>
  );
};

// to="/my-account"
