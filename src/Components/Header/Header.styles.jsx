import styled from "styled-components";

export const HeaderWrapper = styled.header`
  .sell-btn {
    border: 1px solid #0000001a;
    padding: 10px 31px 10px 31px;
    border-radius: 8px;
    color: #026080;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }

  .icon {
    border: 2px solid #026080;
    border-radius: 5px;
  }

  .cart-icon {
    border: 1px solid #0000001a;
    border-radius: 50%;
    padding: 9px;
  }

  .badge {
    position: absolute;
    box-shadow: 0px 0px 4px 0px #0000002b;
    width: 18px;
    height: 18px;
    top: -5px;
    right: -5px;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-btn {
    border: 1px solid #eeeeee;
    padding: 6px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #3f4254;
  color: white;
  box-shadow: 0px 10px 60px 0px #0000001a;
  padding: 14px;

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;

    &:hover {
      text-decoration: underline;
      border-radius: 5px;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 14px;

  input {
    border: none;
    outline: none;
  }
`;
