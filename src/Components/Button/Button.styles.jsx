import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || "#4285F4"};
  font-weight: 500;
  width: 100%;
  color: #fff;

  &.login-btn {
    background-color: #fff;
    color: #3D3D3D;
    border: 1px solid #EBEBEB;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`;
