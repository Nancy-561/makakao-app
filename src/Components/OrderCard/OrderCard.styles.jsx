import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const Card = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  margin: auto;
  margin:15px 0px
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 15px;
`;

export const Info = styled.div`
  flex: 1;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const OrderId = styled.p`
  font-size: 12px;
  color: gray;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

export const Quantity = styled.p`
  font-size: 14px;
  color: gray;
`;

export const Rating = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

export const Star = styled(FaStar)`
  color: #ddd;
  cursor: pointer;

  &:hover,
  &:hover ~ & {
    color: gold;
  }
`;