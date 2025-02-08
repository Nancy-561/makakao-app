import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProductInfo = ({ productInfo, manufacture, imported }) => {
  const contentRef = useRef(null);
  const [showProductInfo, setShowProductInfo] = useState(false);

  return (
    <div className="shipping-container p-5">
      <div
        className="heading flex justify-between items-center cursor-pointer"
        onClick={() => setShowProductInfo(!showProductInfo)}
      >
        Product Information
        {showProductInfo ? (
          <IoIosArrowUp size={24} />
        ) : (
          <IoIosArrowDown size={24} />
        )}
      </div>
      <div
        className="accordion-content"
        style={{
          maxHeight: showProductInfo
            ? `${contentRef.current.scrollHeight}px`
            : "0px",
        }}
        ref={contentRef}
      >
        <div className="pt-5">
          {Object.keys(productInfo).map((key) => (
            <div className="detail py-3">
              {key} <span>{productInfo[key]}</span>
            </div>
          ))}
          <div className="subheading font-medium flex flex-col text-[#242424] mt-3">
            Manufactured by:
            <span className="font-normal">{manufacture}</span>
          </div>
          <div className="subheading font-medium flex flex-col text-[#242424]">
            Imported by:
            <span className="font-normal">{imported}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
