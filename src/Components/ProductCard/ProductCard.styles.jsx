import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 10px;
  background-color: white;
  position: relative;

  .discount-badge {
    position: absolute;
    background-color: #000000;
    color: white;
    padding: 4px 8px;
    font-size: 11px;
    line-height: 14px;
    font-weight: 600;
    border-radius: 12px;
    top: 22px;
    left: 22px;
    z-index: 10;
  }

  .blue-badge {
    background-color: #026080;
  }

  .card-bottom-container {
    height: calc(100% - 282px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    line-height: 21px;
    text-align: left;
  }
`;
