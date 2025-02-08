import React, { useState, useRef } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

import { CarouselContainer, Track, CarouselIndicator } from "./Carousel.styles";

export const Carousel = ({
  images,
  height,
  width,
  unit,
  showImageIndicator,
  containerClass = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const indicatorWidth = Math.ceil(100 / images.length);
  let startX = 0;
  let isDragging = false;

  const handleScrollStart = (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
  };

  const handleScrollMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      isDragging = false;
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      isDragging = false;
    }
  };

  const handleScrollEnd = () => {
    isDragging = false;
  };

  return (
    <div className="flex flex-col">
      <CarouselContainer
        style={{ width: `${width}${unit}` }}
        className={containerClass}
        ref={containerRef}
        onMouseDown={handleScrollStart}
        onMouseMove={handleScrollMove}
        onMouseUp={handleScrollEnd}
        onMouseLeave={handleScrollEnd}
        onTouchStart={handleScrollStart}
        onTouchMove={handleScrollMove}
        onTouchEnd={handleScrollEnd}
      >
        <Track
          style={{ transform: `translateX(-${currentIndex * width}${unit})` }}
        >
          {images.map(({ url, type }, index) => (
            <div className="px-4 flex-shrink-0 w-[-webkit-fill-available]">
              {type === "img" ? (
                <img
                  src={url}
                  alt={`Slide-${index + 1}`}
                  style={{ height }}
                  className="rounded-[12px]"
                />
              ) : (
                <video
                  className="w-full h-full object-fill rounded-[12px] shadow-custom"
                  autoPlay
                  muted
                  loop
                >
                  <source src={url} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </Track>
      </CarouselContainer>
      <CarouselIndicator
        className={showImageIndicator ? "gap-3 py-3" : "gap-1 py-2 px-4"}
      >
        {images.map(({ url, type }, index) =>
          showImageIndicator ? (
            <div
              className="relative"
              style={{ width: `${indicatorWidth}%` }}
              onClick={() => setCurrentIndex(index)}
            >
              {type === "img" ? (
                <img
                  src={url}
                  alt={`Slide-${index + 1}`}
                  className={
                    currentIndex === index
                      ? "highlighted-border"
                      : "indicator-border"
                  }
                />
              ) : (
                <video className="object-fill" muted>
                  <source src={url} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              )}
              {type === "video" && (
                <IoPlayCircleSharp
                  size={24}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ffffff]"
                />
              )}
            </div>
          ) : (
            <div
              className={`${
                currentIndex === index ? "bg-[#D9D9D9]" : "bg-[#D9D9D94D]"
              } h-[3px]`}
              style={{ width: `${indicatorWidth}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
            />
          )
        )}
      </CarouselIndicator>
    </div>
  );
};
