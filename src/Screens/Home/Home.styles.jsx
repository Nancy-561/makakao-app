import styled from "styled-components";

export const StyledHome = styled.div`
  .images-container {
    display: grid;
    gap: 16px;
    grid-template-rows: calc(40vh - 16px) 20vh;

    img {
      height: 100%;
    }
  }
  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ededed;
  }
  .heading {
    font-weight: 400;
    border-bottom: 3px solid #026080;
    color: #666666;
    span {
      color: #026080;
    }
  }
  .invert-color {
    border-bottom: 3px solid #666666;
    color: #026080;
    span {
      color: #666666;
    }
  }
  .secondary-heading {
    border-bottom: 3px solid #000000;
    color: #000000;
    span {
      color: #666666;
    }
  }
  .view-all {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  .category-name {
    color: #000000;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 400;
  }
`;
