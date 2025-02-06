import React from "react";
import { CartItemContainer } from "./CartItemCard.styles";
import { Minus, Plus, X } from "lucide-react";


export const CartItemCard = ({ item }) => {
    return (
        <CartItemContainer className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-[80px] h-[80px] rounded-[8px]" />
            <div className="text-left">
                <div className="text-[1rem] font-bold">{item.name}</div>
                <div className="text-[0.875rem]">#{item.sku}</div>
            </div>
            <div className="qty-container">
                <button className=".qty-button">
                    <Minus size={16} className="text-gray-600" />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className=".qty-button">
                    <Plus size={16} className="text-gray-600" />
                </button>
            </div>
            <span className="text-lg font-bold">${item.price}</span>
            <button>
                <X size={20} className="text-gray-600" />
            </button>
        </CartItemContainer>
    );
};
