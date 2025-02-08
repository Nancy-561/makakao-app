import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { TryOn } from "./TryOn";
import { ProductInfo } from "./ProductInfo";
import { DetailsAndDesc } from "./DetailsAndDesc";
import { Button } from "../../Components/Button";
import { StyledContainer, Rating, Star } from "./ProductDetails.style";
import { ProductBiddingModel } from "../ProductBiddingModel";

export const formatPrice = (value) => {
  if (isNaN(value)) return "0.00";
  return Number(value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const ProductDetails = () => {
  const location = useLocation();
  const [showTryOn, setShowTryOn] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [showBidPopup, setShowBidPopup] = useState(false);

  const data = location.state;
  const { price, rating, reviewCount, name } = data;

  return (
    <StyledContainer className="p-6 font-poppins">
      <TryOn
        {...data}
        setShowTryOn={() => setShowTryOn(!showTryOn)}
        showTryOn={showTryOn}
        setWishlisted={(val) => setWishlisted(val)}
        wishlisted={wishlisted}
        setShowBidPopup={() => setShowBidPopup(true)}
      />
      <div className="text-left overflow-hidden">
        <DetailsAndDesc {...data} />
        <ProductInfo {...data} />
        {showTryOn ? (
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
              handleClick={() => setShowBidPopup(true)}
            />
          </div>
        ) : (
          <div className="shipping-container p-5 mt-5 bg-[#F6F6F6]">
            <div className="heading flex justify-between items-center cursor-pointer">
              <div className="subheading font-medium flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3579/cbd8/ebd2ce18563c01c8b4d77762fb6204e4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BR7pqXtEaWU-iOR8DU0VzYVjs1soCRy8WII-DHRMiIZA5aib5wTbg6jyu9TdlZuEjpervWWZBuz4UMV-a~dMEnbiOvsC8tCp-681lg8jJJvqDIpdrBfKrixtUaJ75KTG9ZoC33aVmemqabUbeNd~2RbY9ZAzcGdJv8sE~rhm5F~rwuO-bf5Gyv5X9TSdYaTfGN-MvybeQ04DUkkzSIb~0Avkppq10n7AaxwZsz8j5xc1QUROlm3jlfvKGtHcJGp5E3esh0WpTh5TzAvXuKy1V9rKuBEzpG2hUa5aNYTydD62PDXJcO-32Adp3VyMgQn4EE87qXqWT7qCL8KOokpduQ__"
                  alt="new-img"
                  className="mr-3 h-[40px] w-[45px]"
                />
                Checkout some new related products
              </div>
              <IoIosArrowForward size={24} />
            </div>
            <div className="flex gap-4 overflow-scroll mt-3">
              {[...Array(8)].map((_, index) => (
                <div className="new-product-card font-inter flex-shrink-0">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/fddd/e678/6503d847a818175bab19d30538dafd4b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KIBDinYmoS2AjBPFixZtpEr7ENNOnNqUtIb8sFqYJdmE4xfhp90bl7jAM-E9G5pHOF8sSE8W1LEEQ2KGV6ArZ~UFr~Xrvh-UDaqgx9Ags6jYHdaAxd4qGN4QCCKUics~7HAnOq2KUm6CN6Uj84GijWyorFy6h6JwGWz04ZRfz0jt7yMPgxq1FZ-2ki0IXPTnGsOjOyWoLcBszuji53qeQP9DA0aeVNaVNAOMxxTgosu8uuU9BN0HHp6XK170o77~k24W~td6lJRMhxEx4AZ2m6oQpc52XZPmLCVUxqPTc5r~tq425BJpU435aq1kwVxQAScKqhr--RM2gNFTWJPlMg__"
                    alt={`new-img${index}`}
                    className="h-[60px] m-4 w-[-webkit-fill-available]"
                  />
                  <div className="new-product-info px-4 py-2">
                    <span className="price-info">
                      ${formatPrice(price)}{" "}
                      <span className="strike-price">
                        ${formatPrice(2 * price)}
                      </span>
                    </span>
                    <div className="flex items-center my-2 text-[10px]">
                      <Rating className="mr-2">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={
                              index + 1 <= Math.ceil(rating)
                                ? "highlighted-star"
                                : ""
                            }
                          />
                        ))}
                      </Rating>
                      {`(${reviewCount})`}
                    </div>
                    <div className="text-[10px] leading-[15px] text-[#606060] font-medium">
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {showBidPopup && (
        <div className="bid-popup" onClick={() => setShowBidPopup(false)}>
          <div className="content-container left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-custom"  onClick={e=>e.stopPropagation()}>
            <ProductBiddingModel setShowBidPopup={() => setShowBidPopup(false)}  />
          </div>
        </div>
      )}
    </StyledContainer>
  );
};
