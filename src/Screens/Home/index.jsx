import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { ProductCard } from "../../Components/ProductCard";
import { AvailableProductCategories, LastBidProducts, PopularProducts } from "../../Mocks/productMock";
import { StyledHome } from "./Home.styles";

export const Home = () => {
  const renderHeading = (
    text1,
    text2,
    headingClass = "",
    redirectTo = "/product-listing"
  ) => {
    return (
      <div className="heading-container">
        <div className={`heading font-poppins text-2xl pb-3 ${headingClass}`}>
          {text1} <span>{text2}</span>
        </div>
        <Link
          to={redirectTo}
          className="text-[#222222] font-hk-grotesk view-all"
        >
          View All
          <IoIosArrowForward className="ml-3" />
        </Link>
      </div>
    );
  };

  return (
    <StyledHome>
      <div className="px-5 bg-white pt-6 mb-4">
        <div className="flex gap-4 rounded-[12px]">
          <img
            src="/home-img.png"
            alt="home-img"
            className="w-3/5 rounded-[12px] h-[60vh]"
          />
          <div className="w-2/5 images-container">
            <img
              src="/top.png"
              alt="top-img"
              className="rounded-[12px] w-full"
            />
            <img
              src="/police.png"
              alt="police-logo"
              className="rounded-[12px] w-full"
            />
          </div>
        </div>
        <div className="py-6">
          {renderHeading("Shop From", "Top Categories")}
          <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
            {AvailableProductCategories.map(({ imageUrl, name, count }) => {
              if (count) {
                return (
                  <div key={name} className="flex-shrink-0">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="rounded-[12px] h-[132px] w-[132px] object-cover"
                    />
                    <div className="font-poppins mt-5 category-name">
                      {name}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <div className="px-5 py-6">
        {renderHeading("LIVE ON GOING", "BIDS", "invert-color")}
        <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
          {LastBidProducts.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
      <div className="px-5 py-6">
        {renderHeading("POPULAR", "PRODUCTS", "secondary-heading")}
        <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
          {PopularProducts.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </StyledHome>
  );
};
