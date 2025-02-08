import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 1fr;
  background-color: #ffffff;
  column-gap: 32px;

  .img-container {
    display: flex;
    justify-content: center;
  }

  .shipping-container {
    border: 1px solid #e6ecf7;
    border-radius: 10px;
  }

  .heading {
    font-size: 19px;
    line-height: 24px;
    font-size: 500;
    color: #000000;
  }

  .subheading {
    font-size: 15px;
    line-height: 19px;
  }

  .detail {
    font-size: 15px;
    line-height: 19px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #0000004d;

    span {
      font-weight: 400;
      color: #667280;
    }
  }

  .accordion-content {
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .new-product-card {
    border: 1px solid #dee2e7;
    background-color: #ffffff;
    border-radius: 6px;
    width: 159px;

    .new-product-info {
      border-top: 1px solid #dee2e7;

      .price-info {
        font-size: 13px;
        line-height: 15px;
        font-weight: 600;
        color: #1c1c1c;
      }

      .strike-price {
        font-size: 11px;
        line-height: 13px;
        font-weight: 400;
        color: #8b96a5;
        text-decoration: line-through;
      }
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 5px;
`;

export const Star = styled(FaStar)`
  color: #ddd;
  cursor: pointer;

  &.highlighted-star {
    color: gold;
  }
`;
