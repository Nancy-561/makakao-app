import styled from "styled-components";
import { FaLock } from "react-icons/fa";

export const Sidebar = styled.div`
  width: 250px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 500;
  color: gray;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f3f4f6;
  }
    .black{
        color: black;
    }
    .gray{
        color: gray;
    } 
`;

export const MenuTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-bottom: 10px;
`;

export const ProfileContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  max-width: 70%
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

 export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const LockIcon = styled(FaLock)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: #fff;
  border-radius: 50%;
  padding: 3px;
  color: #555;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;


export const Select = styled.select`
  background: #f3f4f6;
  padding: 10px;
  border-radius: 8px;
  border: none;
  width: 100%;
`;


export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  max-width: 90%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Dropdown = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: black;
  color: white;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  background: #f9f9f9;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  margin-left: 5px;
`;

export const TrackButton = styled.button`
  background: black;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const OrderInfo = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 10px 0px;
  text-align: left;
`;