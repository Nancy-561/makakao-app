import { ChevronDown } from "lucide-react";
import styled from "styled-components";
import React, { useState } from "react";

const ShippingCard = styled.div``;

export const Shipping = () => {
  const [selected, setSelected] = useState("free");

  const options = [
    {
      id: "free",
      title: "Free",
      subtitle: "Regular shipment",
      date: "17 Oct, 2023",
    },
    {
      id: "express",
      title: "$8.50",
      subtitle: "Get your delivery as soon as possible",
      date: "1 Oct, 2023",
    },
    {
      id: "schedule",
      title: "Schedule",
      subtitle: "Pick a date when you want to get your delivery",
      date: "Select Date",
      icon: <ChevronDown size={16} />,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3 text-left">Shipment Method</h2>

      <div className="space-y-3">
        {options.map((option) => (
          <ShippingCard
            key={option.id}
            onClick={() => setSelected(option.id)}
            style={
              selected === option.id ? { color: "black" } : { color: "#A2A3B1" }
            }
            className="flex items-center justify-between p-4 border-[1px] border-[#D1D1D8] rounded-[11px] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipment"
                className="accent-black"
                checked={selected === option.id}
                readOnly
              />
              <div className="flex items-center gap-3">
                <p className="font-medium">{option.title}</p>
                <p className="text-sm">{option.subtitle}</p>
              </div>
            </div>
            <div className="text-sm font-medium flex items-center">
              {option.date} {option.icon}
            </div>
          </ShippingCard>
        ))}
      </div>
    </div>
  );
};
