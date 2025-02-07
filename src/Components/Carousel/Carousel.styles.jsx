import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  cursor: grab;
  height: -webkit-fill-available;

  &.product-carousel {
    border: 1px solid #0000001a;
    border-radius: 12px;

    img {
      width: -webkit-fill-available;
    }
  }
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
`;

export const CarouselIndicator = styled.div`
  display: flex;
  align-items: center;

  .indicator-border {
    border: 2px solid #f0f0f0;
  }

  .highlighted-border {
    border: 2px solid #ff9017;
  }

  img,
  video {
    height: 50px;
    border-radius: 2px;
    width: -webkit-fill-available;
  }
`;
