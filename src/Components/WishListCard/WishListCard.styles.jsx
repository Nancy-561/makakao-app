import styled from "styled-components";
export const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  width: 200px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const DiscountBadge = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  background: black;
  color: white;
  font-size: 12px;
  padding: 3px 6px;
  border-radius: 5px;
`;

export const DeleteIcon = styled.span`
  position: absolute;
  top: 0px;
  right: 4px;
  font-size: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
  text-align: left;
`;

export const Category = styled.p`
  font-size: 12px;
  color: gray;
  text-align: left;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  text-align: left;
`;