import styled from "styled-components";

export const StyledInput = styled.div`
  label {
    color: #3d3d3d;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
  }

  input {
    background-color: #eef1f5;

    &.white-bg-input {
      background-color: #ffffff;
    }
  }

  .from-label, .to-label {
    color: #A7A7A7;
    float: left;
    font-weight: 400;
  }

  .to-label {
    float: right;
  }
`;
