import React from "react";
import { FaCamera } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { formatPrice } from "./";
import { Button } from "../../Components/Button";
import { Carousel } from "../../Components/Carousel";

export const TryOn = ({
  images,
  showTryOn,
  setShowTryOn,
  price,
  name,
  wishlisted,
  setWishlisted,
  setShowBidPopup
}) => {
  return showTryOn ? (
    <div className="relative overflow-hidden">
      <img
        src="/try-on.png"
        alt="tryOn-img"
        className="w-[-webkit-fill-available]"
      />
      <RiCloseCircleFill
        size={38}
        className="absolute top-[24px] left-[24px]"
        onClick={setShowTryOn}
      />
      <div className="absolute bottom-[100px]">
        <div className="flex gap-4 overflow-scroll text-left">
          {[...Array(8)].map((_, index) => (
            <div className="new-product-card font-inter flex-shrink-0 relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/fddd/e678/6503d847a818175bab19d30538dafd4b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KIBDinYmoS2AjBPFixZtpEr7ENNOnNqUtIb8sFqYJdmE4xfhp90bl7jAM-E9G5pHOF8sSE8W1LEEQ2KGV6ArZ~UFr~Xrvh-UDaqgx9Ags6jYHdaAxd4qGN4QCCKUics~7HAnOq2KUm6CN6Uj84GijWyorFy6h6JwGWz04ZRfz0jt7yMPgxq1FZ-2ki0IXPTnGsOjOyWoLcBszuji53qeQP9DA0aeVNaVNAOMxxTgosu8uuU9BN0HHp6XK170o77~k24W~td6lJRMhxEx4AZ2m6oQpc52XZPmLCVUxqPTc5r~tq425BJpU435aq1kwVxQAScKqhr--RM2gNFTWJPlMg__"
                alt={`new-img${index}`}
                className="h-[60px] my-4 mx-2 w-[-webkit-fill-available]"
              />
              <div className="absolute right-[6px] top-[6px] text-[#F6585C]">
                <IoIosHeart size={20} />
              </div>
              <div className="new-product-info px-2 py-2">
                <div className="text-[10px] leading-[15px] text-[#606060] font-medium">
                  {name}
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <Button
                    btnId="try-now-btn"
                    btnText="Try now"
                    btnClassName="try-now-btn px-2"
                  />
                  <span className="price-info">${formatPrice(price)} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
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
          handleClick={setShowTryOn}
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
          handleClick={setShowBidPopup}
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
