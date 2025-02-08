import React, { useState } from "react";
import { OrderSummary, PaymentForm } from "./Cart.styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export const Payment = ({ handlePrevStep }) => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [cvv, setCvv] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardHolderName, setCardHolderName] = useState("")
  const [expDate, setExpDate] = useState("")
  const items = [
    { name: "Escape Oval sunglasses", price: 1399 },
    { name: "Escape Oval sunglasses", price: 549 },
    { name: "Escape Oval sunglasses", price: 399 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const estimatedTax = 50;
  const estimatedShipping = 29;
  const total = subtotal + estimatedTax + estimatedShipping;

  const handleCvv = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "" || !isNaN(inputValue)) {
      setCvv(inputValue);
    }
  };

  const handleCC = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "" || !isNaN(inputValue)) {
      setCardNumber(inputValue);
    }
  };

  return (
    <div className="flex gap-[5%]">
      <OrderSummary className="w-full bg-white p-6 rounded-[10px]">
        <h2 className="text-xl font-semibold mb-4 text-left">Summary</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d160/3efe/4f92157c1bef7559a2bdc3ab3ad49133?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZKdkDjFPml3olgS99aF3fSZXl2t84fGdydoTRSNk7tJAEP1Cglhnv4rcxLxRaIRpPn4o7YEkShuShIa0kpcYgvmhr6lwPR7XI4qq6cYGN9POGQYcpfiCTqDAxVh1DfJfM6d~tBfNKOc8rXH3TUw1UjE44y6E5A433XhpQuDf~YDj-TqMgP27bNHSW0IPKJ9p6Yzta0i~8DII6OTJKdQnFPIc4JYy2Axp9efe0aYb7y74OHegg0zHDZmpRsndz0qmJrAtjdQAUdZKCI1fP8p-CewN54Myg2UnRmyZwG9CfMQtXuQ02q2~sxykjVd2Gqwrlo9jhdoNx8vpAaoM5Akyg__"
                  alt="sunglasses"
                  className="w-10 h-10"
                />
                <span>{item.name}</span>
              </div>
              <span className="font-semibold">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 text-left">
          <p className="text-sm text-gray-500">Address</p>
          <p className="text-gray-700">1131 Dusty Townline, Jacksonville, TX 40322</p>
        </div>

        <div className="mt-4 pt-4 text-left">
          <p className="text-sm text-gray-500">Shipment method</p>
          <p className="text-gray-700">Free</p>
        </div>

        <div className="mt-4 pt-4 text-right">
          <p className="pt-4 font-semibold flex justify-between"><span>Subtotal:</span><span>${subtotal}</span></p>
          <p className="pt-4 flex justify-between"><span>Estimated Tax:</span> <span className="font-semibold">${estimatedTax}</span></p>
          <p className="pt-4 flex justify-between"><span>Estimated shipping & Handling:</span> <span className="font-semibold">${estimatedShipping}</span></p>
          <p className="pt-4 font-semibold flex justify-between"><span>Total:</span><span>${total}</span></p>
        </div>
      </OrderSummary>
      <PaymentForm className="w-full">
        <h2 className="text-xl font-semibold mb-4 text-left">Payment</h2>

        <div className="flex gap-[10%] mb-4">
          {["Credit Card", "PayPal", "PayPal Credit"].map((method) => (
            <button
              key={method}
              className={`pb-2 ${paymentMethod === method ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
              onClick={() => setPaymentMethod(method)}
            >
              {method}
            </button>
          ))}
        </div>

        <div className="mt-[2rem]">
          <img
            src="/card.png"
            alt="Credit Card"
            className="mb-[2rem]" />
          <Input
            inputId="cardName"
            placeholder="Cardholder Name"
            inputClassName="white-bg-input"
            value={cardHolderName}
            handleChange={(e) => setCardHolderName(e.target.value)}
          />
          <Input
            inputId="cardNumber"
            placeholder="Card Number"
            inputClassName="white-bg-input"
            value={cardNumber}
            handleChange={handleCC}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              inputId="expDate"
              placeholder="Exp.Date"
              inputClassName="white-bg-input"
              value={expDate}
              handleChange={(e) => setExpDate(e.target.value)}
            />
            <Input
              inputId="cvv"
              maxLength={3}
              placeholder="CVV"
              inputClassName="white-bg-input"
              value={cvv}
              handleChange={handleCvv}
            />
          </div>
          <div className="flex items-center space-x-2 my-[3rem]">
            <input type="checkbox" id="sameAddress" className="accent-black" />
            <label htmlFor="sameAddress" className="text-sm">Same as billing address</label>
          </div>
          <div className="flex gap-4 justify-between my-[3rem]">
            <Button
              btnText="Back"
              btnId="back-btn"
              btnClassName="login-btn"
              handleClick={handlePrevStep}
            />
            <Button
              btnText="Pay"
              btnId="pay-btn"
              btnClassName="secondary-btn"
            />
          </div>
        </div>
      </PaymentForm>

    </div>
  );
};