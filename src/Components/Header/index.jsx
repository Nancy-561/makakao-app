import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

import { navTabs } from "../../Mocks/productMock";
import { HeaderWrapper, Nav, SearchBar } from "./Header.styles";

export const Header = ({ isLoggedIn, count }) => {
  return (
    <>
      <HeaderWrapper className="flex items-center justify-between gap-4 bg-white mb-2">
        <div className="flex items-center gap-4">
          <img
            src="/makakao-logo.png"
            alt="makakao-logo"
            className="h-[100px]"
          />
          <SearchBar className="bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="Search for products"
              className="border rounded px-2 py-1 w-full bg-[#F5F5F5] text-[#292D32]"
            />
            <FiSearch className="mx-2 h-[24px] w-[24px]" />
          </SearchBar>
        </div>
        <div className="flex items-center gap-4 px-8">
          <a href="#" className="flex items-center gap-1 sell-btn">
            <FiShoppingCart className="h-[24px] w-[24px]" /> Sell
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
              <Link
                to="/my-account"
                className="flex items-center gap-4 user-btn"
              >
                <IoPersonCircleOutline className="h-[36px] w-[36px]" /> James{" "}
                <IoIosArrowDown className="mr-3" />
              </Link>
            </>
          ) : (
            <Link to="/login" className="flex items-center gap-1 sell-btn">
              <GoPerson className="h-[24px] w-[24px] icon" /> Login/SignUp
            </Link>
          )}
        </div>
      </HeaderWrapper>
      <Nav>
        {navTabs.map(({ name, id }) => (
          <Link
            to={`/productListing?category=${id}`}
            key={id}
            className="font-poppins"
          >
            {name}
          </Link>
        ))}
      </Nav>
    </>
  );
};
