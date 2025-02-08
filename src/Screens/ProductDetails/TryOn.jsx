import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { Button } from "../../Components/Button";
import { Carousel } from "../../Components/Carousel";

export const TryOn = ({ images }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative img-container w-full h-[50vh]">
        <Carousel
          images={images}
          height="100%"
          width="100"
          unit="%"
          showImageIndicator={true}
          containerClass="product-carousel py-4"
        />
        <Button
          btnId="try-on-btn"
          btnText={
            <>
              <span className="relative">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d835/101c/621ba4bda2af9ffdbf00f583ec2a6241?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=laYTtQ4mDDPrnc6ojhd~NdcLzY6X2-gNDMEAS3JzNBBtQ-FOZZctpjfqjBSd2VtiWVR-PpAd3bTrWMdV6qRxTsoKaWsYojb3BdbRO8g-EWiXxAfWDD5Hdl-nnvbAa7Oh-2xTs6eIHI5bxTQm49qKGQiZtE01jN1LuSmZSO0HQvXZIJtmnajgJMEZYl8FHmuu1aiov7w8jI2Ofip9pOm4bbkrNW70Hbqce-h2lD0QWg~l2Npn6aXmopa87-1LR~KNzJatraPnYlBXI~89SXmPcNU-wXOZC9yZut6Qpw55oicRk7upffAAT2T-sBnc4Xdt3QQgukaEI8hgKwbGPY4mWg__"
                  alt="try-on-img"
                  className="absolute left-[-17px] h-[19px] w-[19px] top-[-4px]"
                />
                <FaCamera size={24} className="text-[#ffffff] mr-3" />
              </span>
              TRY-ON
            </>
          }
          btnClassName="left-1/2 -translate-x-1/2 try-on-btn"
        />
        <div className="absolute right-[24px] top-[24px] text-[#F6585C]">
          {wishlisted ? (
            <IoIosHeart size={36} onClick={() => setWishlisted(false)} />
          ) : (
            <IoIosHeartEmpty size={36} onClick={() => setWishlisted(true)} />
          )}
        </div>
      </div>
      <div className="flex items-center p-4 gap-4">
        <Button
          btnId="add-to-wishlist"
          btnText="Add to Wishlist"
          btnClassName="action-btn bg-gray-btn"
          handleClick={() => setWishlisted(true)}
        />
        <Button
          btnId="place-bid-btn"
          btnText="Place Bid"
          btnClassName="action-btn bg-navy-btn"
        />
      </div>
      <img
        src="/home-img.png"
        alt="home-img"
        className="w-full rounded-[12px] h-[50vh]"
      />
    </div>
  );
};
