import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

import { formatPrice } from "./";
import { Button } from "../../Components/Button";
import { CustomLink } from "../../Components/CustomLink";
import { Star, Rating } from "./ProductDetails.style";

export const DetailsAndDesc = ({
  categrory,
  name,
  rating,
  reviewCount,
  price,
}) => {
  return (
    <>
      <div className="text-[#A4A4BE] font-medium text-[12px] leading-[24px] flex items-center">
        <CustomLink redirectTo="/" text="Home" />
        <IoIosArrowForward size={14} className="mx-2" />
        <span>{categrory || "All Products"}</span>
      </div>
      <div className="flex justify-between items-start">
        <p className="font-poppins text-[28px] font-medium">{name}</p>
        <Button
          btnText={
            <>
              <IoShareSocialOutline size={24} className="mr-2" />
              Share
            </>
          }
          btnId="share-btn"
          btnClassName="share-btn"
        />
      </div>
      <div className="flex items-center my-3 leading-[20px]">
        <Rating>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={
                index + 1 <= Math.ceil(rating) ? "highlighted-star" : ""
              }
            />
          ))}
        </Rating>
        <span className="text-[12px] leading-[18px]] font-semibold ml-3">
          {rating}{" "}
          <span className="text-[#0088EA] ml-3 font-normal">
            {reviewCount} reviews
          </span>
        </span>
      </div>
      <div className="text-[18px] font-inter text-[#747474]">
        Inclusive of all taxes
      </div>
      <div className="text-[31px] font-inter font-bold text-[#000000]">
        ${formatPrice(price)}
      </div>
      <div className="font-inter text-[18px] leading-[23px] mt-3 mb-7">
        <span className="text-[#026080] mr-2 border-b border-[#026080]">
          7 bids
        </span>
        <span className="text-[#A3A3A3] font-semibold">
          Ends in 3d 21h | Thursday, 11:00 PM{" "}
        </span>
      </div>
      <div className="shipping-container p-5 flex gap-4">
        <TbTruckDelivery size={36} />
        <div className="subheading flex flex-col text-[#888282]">
          <span className="heading mb-5">
            Ships by <span className="text-[#026080]">Fri, Feb 23</span>
          </span>
          Items usually ship same day, but may ship up to 24 hours after the
          order is placed.
        </div>
      </div>
      <div className="shipping-container p-5 subheading text-[#242424] my-5">
        <div className="heading mb-5">Description</div>
        Black Rectangle Rimmed Eyeglasses from Titan Eye+. These are compatible
        with Blue filter, Single vision & Progressive Lenses. (TSR0046MFC3MBKTV)
      </div>
    </>
  );
};
