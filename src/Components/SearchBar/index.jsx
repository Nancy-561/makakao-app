import React from "react";
import { FiSearch } from "react-icons/fi";

import { StyledSearchBar } from "./SearchBar.styles";

export const SearchBar = ({ SearchClassName = "bg-[#F5F5F5]" }) => {
  return (
    <StyledSearchBar className={SearchClassName}>
      <input
        type="text"
        placeholder="Search for products"
        className={`border rounded px-2 py-1 w-full ${SearchClassName} text-[#292D32]`}
      />
      <FiSearch className="mx-2 h-[24px] w-[24px]" />
    </StyledSearchBar>
  );
};
