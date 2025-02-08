import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 500;
  width: 100%;
  color: #fff;
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;

  &.login-btn {
    background-color: #fff;
    color: #3d3d3d;
    border: 1px solid #ebebeb;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  &.action-btn {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    padding: 16px;
  }

  &.google-btn {
    color: #2d313e;
    background-color: #e1f0ff;
  }

  &.secondary-btn {
    background-color: #2d313e;
  }

  &.bg-navy-btn {
    background-color: #026080;
  }

  &.bg-black-btn {
    background-color: #000000;
  }

  &.bg-gray-btn {
    background-color: #363232;
  }

  &.try-on-btn {
    background: linear-gradient(96.02deg, #026080 4.2%, #FF9017 112.39%);
    width: max-content;
    border-radius: 12px;
    font-size: 19px;
    font-weight: 400;
    position: absolute;
    top: 24px;
    padding: 10px 32px;
  }

  &.share-btn {
    color: #FF9017;
    width: max-content;
    background: white;
    padding: 10px;
  }
`;
