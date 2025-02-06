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
  .footer-img-container {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    align-items: center;
    justify-content: center;

    img {
      height: 89px;
      object-fit: contain;
      width: -webkit-fill-available;
    }
  }
  .banner-content {
    color: #e7e7e3;
    font-size: 24px;
    line-height: 36px;
    position: absolute;
    top: 10%;
    left: 20px;
    text-align: left;
    max-width: 30%;
    font-weight: 400;

    button {
      border: 1px solid #a2b8cc;
      font-size: 14px;
      line-height: 49px;
      font-weight: 500;
      display: flex;
      align-items: center;
    }
  }
`;
