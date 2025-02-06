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
  }

  .blue-badge {
    background-color: #026080;
  }
`;
