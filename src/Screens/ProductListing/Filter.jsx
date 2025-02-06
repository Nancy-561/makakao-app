import React, { useState } from "react";
import { Range } from "react-range";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Input } from "../../Components/Input";
import { FilterWrapper } from "./ProductListing.styles";

export const Filter = () => {
  const min = 1000;
  const max = 5000;
  const [values, setValues] = useState([min, max]);
  const [showPriceFilter, setShowPriceFilter] = useState(true);

  const trackStyle = {
    background: `linear-gradient(
      to right,
      #e0e0e0 ${((values[0] - min) / (max - min)) * 100}%,
      #000 ${((values[0] - min) / (max - min)) * 100}%,
      #000 ${((values[1] - min) / (max - min)) * 100}%,
      #e0e0e0 ${((values[1] - min) / (max - min)) * 100}%
    )`,
  };

  return (
    <FilterWrapper className="flex flex-col gap-4">
      <h3 className="font-semibold font-poppins px-6 pt-6">Filters</h3>
      <div className="divider" />
      <div className="px-6">
        {/* Price Range Filter */}
        <div className="filter-section">
          <h3
            className="font-semibold font-poppins cursor-pointer flex items-center justify-between"
            onClick={() => setShowPriceFilter(!showPriceFilter)}
          >
            Price
            {showPriceFilter ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
          </h3>
          <div className="divider mt-3 mb-6" />
          {showPriceFilter && (
            <>
              <div className="price-range mb-3">
                <Input
                  type="number"
                  text="From"
                  value={values[0]}
                  labelClassName="from-label sf-pro-display"
                />
                <Input
                  type="number"
                  text="To"
                  value={values[1]}
                  labelClassName="to-label sf-pro-display"
                />
              </div>
              <Range
                step={1}
                min={1000}
                max={5000}
                values={values}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-2 bg-gray-300 rounded-full w-full relative"
                    style={trackStyle}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-5 w-5 bg-blue-500 rounded-full shadow-md bg-black"
                  />
                )}
              />
            </>
          )}
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <h3 className="font-semibold font-poppins pb-2">Categories</h3>
          <div className="checkbox-group">
            {[
              "Eyewear",
              "Watches",
              "Clothing",
              "Furniture",
              "Beauty",
              "Gifts",
            ].map((category) => (
              <label key={category} className="checkbox-label mb-3">
                <input
                  type="checkbox"
                  className="mr-2 h-[20px] w-[20px]"
                  value={category}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="filter-section">
          <h3 className="font-semibold font-poppins pb-2">Brand</h3>
          <div className="checkbox-group">
            {["Titan", "Ray-Ban", "Fossil"].map((brand) => (
              <label key={brand} className="checkbox-label mb-3">
                <input
                  type="checkbox"
                  className="mr-2 h-[20px] w-[20px]"
                  value={brand}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Discount Range Filter */}
        <div className="filter-section">
          <h3 className="font-semibold font-poppins pb-2">Discount</h3>
          <div className="checkbox-group">
            {["10% Off", "20% Off", "30% Off"].map((discount) => (
              <label key={discount} className="checkbox-label mb-3">
                <input
                  type="checkbox"
                  className="mr-2 h-[20px] w-[20px]"
                  value={discount}
                />
                {discount}
              </label>
            ))}
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
};
