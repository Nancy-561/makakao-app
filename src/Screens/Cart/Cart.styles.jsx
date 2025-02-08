import styled from "styled-components";

export const CartList = styled.div`
`;

export const OrderSummaryContainer = styled.div`
.card-number-div{
  display: flex;
  align-items: center;
  background: white;
  border-radius: 6px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
  .card-number-input{
    flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  outline: none;
  }
.applybutton{
  background: white;
  color: black;
  padding: 0.4rem 2rem;
  border:2px solid black;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}
  .price-row{
    display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 0.95rem;
  }

`;

export const OrderSummary = styled.div`
`;

export const PaymentForm = styled.div`
`;