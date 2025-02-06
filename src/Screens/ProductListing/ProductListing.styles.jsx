import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  text-align: left;

  .listing-container {
    display: flex;
    row-gap: 16px;
    column-gap: 32px;
    flex-wrap: wrap;
  }
`;

export const FilterWrapper = styled.div`
  box-shadow: 0px 10px 60px 0px #0000001a;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;

  .divider {
    border: 1px solid #dee2e7;
  }

  .filter-section {
    margin-bottom: 1.5rem;

    .divider {
      border: none;
      border-bottom: 0.5px solid #b5b5b5;
    }
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #242424;
  }

  .price-range {
    display: flex;
    gap: 16px;
  }
`;
