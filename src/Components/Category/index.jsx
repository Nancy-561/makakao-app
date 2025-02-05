import React from "react";

export const CategoryCard = ({ image,name}) => {
    return (
      <div className="flex flex-col items-center cursor-pointer">
        <img src={image} alt={name} className="w-20 h-20 rounded-lg shadow-md" />
        <p className="mt-2 text-sm font-medium">{name}</p>
      </div>
    );
  };