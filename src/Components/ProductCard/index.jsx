import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { StyledCard } from "./ProductCard.styles";

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const {
    categrory,
    imageUrl,
    price,
    liveBidding,
    bidPrice,
    discount,
    name,
    secondaryCard = false,
    index,
  } = props;
  const btnText = liveBidding ? "Place Bid" : "Add to Cart";

  const formatPrice = (value) => {
    if (isNaN(value)) return "0.00";
    return Number(value)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <StyledCard
      key={`${name}-${index}-${btnText}`}
      className={`flex-shrink-0 p-4 shadow-md`}
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
      <img
        src={imageUrl}
        alt={categrory}
        className="rounded-[12px] h-[252px] w-[221px] object-cover"
      />
      <div className="text-left text-[15px] leading-[21px] font-inter my-3">
        <p className="text-[#101010E5] font-medium mb-1">{name}</p>
        <p className="text-[#A5A5A5] mb-3">{categrory}</p>
        <p className="text-[#026080] font-semibold">
          $
          {liveBidding ? (
            <>
              {formatPrice(bidPrice)}{" "}
              <span className="text-[#5B6072] font-normal ml-2">Last bid</span>
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
    </StyledCard>
  );
};
