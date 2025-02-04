import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 500;
  width: 100%;
  color: #fff;
  background-color: #4285f4;

  &.login-btn {
    background-color: #fff;
    color: #3d3d3d;
    border: 1px solid #ebebeb;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  &.google-btn {
    color: #2d313e;
    background-color: #e1f0ff;
  }

  &.secondary-btn {
    background-color: #2d313e;
  }
`;
