import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { Filter } from "./Filter";
import { SearchBar } from "../../Components/SearchBar";
import { Dropdown } from "../../Components/Dropdown";
import { ProductCard } from "../../Components/ProductCard";
import { AllAvailableProducts } from "../../Mocks/productMock";
import { StyledContainer } from "./ProductListing.styles";

const sortingOptions = [
  "Price: Low to High",
  "Price: High to Low",
  "Newest First",
  "Oldest First",
];

export const ProductListing = () => {
  const location = useLocation();
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);

  const { data, category } = location?.state || {};
  const availableProducts = data || AllAvailableProducts;
  const availableProductsLength = availableProducts?.length;

  return (
    <StyledContainer className="h-full">
      <Filter />
      <div className="p-6">
        <div className="text-[#A4A4BE] font-poppins font-medium text-[12px] leading-[24px] flex items-center">
          <a href="/">Home</a>
          <IoIosArrowForward size={14} className="mx-2" />
          <span>{category || "All Products"}</span>
        </div>
        <div className="my-3 flex justify-between">
          <div className="flex items-center gap-4 font-poppins opacity-70 text-[14px] leading-[21px]">
            <p>{availableProductsLength} Products found</p>
            <div className="flex items-center">
              <span className="mr-4">Sort:</span>
              <Dropdown
                options={sortingOptions}
                value={selectedSort}
                handleSelect={(val) => setSelectedSort(val)}
              />
            </div>
          </div>
          <SearchBar SearchClassName="bg-[#ffffff]" />
        </div>
        <div className="listing-container">
          {availableProducts.map((product, index) => (
            <ProductCard {...product} index={index} secondaryCard={true} />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};
