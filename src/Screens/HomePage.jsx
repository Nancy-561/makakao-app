import React from "react";
import { CategoryCard } from "../Components/Category";

const categories = [
  { name: "Clothing", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Eyewear", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Watches", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Jewelry", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Accessories", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Furniture", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Beauty", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
  { name: "Gifts", image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg" },
];



export const Home= () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="flex justify-between items-center px-6">
        <h2 className="text-lg font-semibold">
          Shop From <span className="text-blue-500">Top Categories</span>
        </h2>
        <a className="text-sm text-black-500 cursor-pointer hover:underline">View All &gt;</a>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 px-6 mt-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} name={category.name} />
        ))}
      </div>
    </div>
  );
};