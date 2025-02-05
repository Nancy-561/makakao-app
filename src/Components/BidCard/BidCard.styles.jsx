import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const OrderId = styled.p`
  font-size: 12px;
  color: gray;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const BidInfo = styled.div`
  border: 1px solid #007bff;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  max-width: 300px;
  width: 100%;
`;

export const BidAmount = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const BidsLink = styled.a`
  color: #007bff;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const TimeLeft = styled.p`
  font-size: 12px;
  color: gray;
`;