import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { Carousel } from "../Carousel";
import { StyledCard } from "./ProductCard.styles";

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const {
    categrory,
    images,
    price,
    liveBidding,
    bidPrice,
    discount,
    name,
    secondaryCard = false,
    index,
  } = props;
  const btnText = liveBidding ? "Place Bid" : "Add to Cart";
  const filteredImages = images.filter(({ type }) => type === "img");

  const formatPrice = (value) => {
    if (isNaN(value)) return "0.00";
    return Number(value)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <StyledCard
      key={`${name}-${index}-${btnText}`}
      className={`py-4 shadow-md w-[253px]`}
      onClick={() => navigate("/product-details", { state: props })}
    >
      {discount > 0 && !liveBidding && (
        <span
          className={
            secondaryCard
              ? "discount-badge font-inter blue-badge"
              : "discount-badge font-inter"
          }
        >
          - {discount}%
        </span>
      )}
      <Carousel images={filteredImages} height="252px" width="253" unit="px" />
      <div className="card-bottom-container font-inter mt-3 px-4">
        <div>
          <p className="text-[#101010E5] font-medium mb-1">{name}</p>
          <p className="text-[#A5A5A5] mb-3">{categrory}</p>
          <p className="text-[#026080] font-semibold mb-3">
            $
            {liveBidding ? (
              <>
                {formatPrice(bidPrice)}
                <span className="text-[#5B6072] font-normal ml-2">
                  Last bid
                </span>
              </>
            ) : (
              formatPrice(price)
            )}
          </p>
        </div>
        <Button
          btnText={btnText}
          btnId={btnText}
          btnClassName={
            liveBidding || secondaryCard ? "bg-navy-btn" : "bg-black-btn"
          }
          handleClick={() => navigate("/product-details", { state: props })}
        />
      </div>
    </StyledCard>
  );
};
