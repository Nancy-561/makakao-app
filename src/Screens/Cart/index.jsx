import { CartItemCard } from "../../Components/CartItemCard";
import { CartList, OrderSummaryContainer } from "./Cart.styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import React, { useState } from "react";
import { CartCheckout } from "./CartCheckout";

export const Cart = () => {
  const [checkoutSelected, setCheckoutSelected] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [bonusCardNumber, setBonusCardNumber] = useState("");
  const cartItems = [
    {
      id: 1,
      name: "Escape Oval Sunglasses",
      sku: "25139526913984",
      price: 1399,
      quantity: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
    },
    {
      id: 2,
      name: "Escape Oval Sunglasses",
      sku: "25139526913984",
      price: 1399,
      quantity: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
    },
    {
      id: 3,
      name: "Escape Oval Sunglasses",
      sku: "25139526913984",
      price: 1399,
      quantity: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
    },
  ];

  const handleCheckOut = () => {
    setCheckoutSelected(!checkoutSelected);
  };

  if (checkoutSelected === true) {
    return <CartCheckout handleCheckOut={handleCheckOut}/>;
  } else {
    return (
      <div className="font-poppins flex justify-center gap-[4rem] m-[2rem]">
        <CartList>
          <div className="text-[1.5rem] font-bold text-left">Shopping Cart</div>
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </CartList>
        <OrderSummaryContainer className="p-[2rem] border-2 border-[#EBEBEB]">
          <div className="text-left mb-[1.5rem] font-bold text-[1.25rem]">
            Order Summary
          </div>
          <Input
            inputId="discountCode"
            placeholder="Code"
            text="Discount code / Promo code"
            inputClassName="white-bg-input"
            value={discountCode}
            handleChange={(e)=>setDiscountCode(e.target.value)}

          />

          <div className="font-inter text-left text-[#4b5869]">
            Your bonus card number
          </div>
          <div className="card-number-div">
            <input
              type="text"
              placeholder="Enter Card Number"
              className="card-number-input"
              value={bonusCardNumber}
              onChange={(e)=>setBonusCardNumber(e.target.value)}
            />
            <button className="text-sm applybutton">Apply</button>
          </div>

          <div className="my-[2rem]">
            <div className="price-row">
              <span>Subtotal</span>
              <span>$2347</span>
            </div>

            <div className="price-row">
              <span>Estimated Tax</span>
              <span>$50</span>
            </div>

            <div className="price-row">
              <span>Estimated Shipping & Handling</span>
              <span>$29</span>
            </div>

            <div className="price-row font-bold">
              <span>Total</span>
              <span>$2426</span>
            </div>
          </div>

          <Button
            btnText="Checkout"
            btnId="checkout-btn"
            btnClassName="secondary-btn"
            handleClick={handleCheckOut}
          />
        </OrderSummaryContainer>
      </div>
    );
  }
};
