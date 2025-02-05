import styled from "styled-components";
import { FaLock } from "react-icons/fa";

export const StyledAccountContainer = styled.div`
  border-right: 1px solid lightgray; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
`

export const Sidebar = styled.div`
  min-width: 20%;
  background: #fff;
  padding: 20px;
  border-right: 2px solid lightgray; 
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
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
  text-align: left;
  padding: 0 15px;
`;

export const ProfileContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  max-width: 80%
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
  text-align: left;
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
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #ddd;
  background: black;
  color: white;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 14px;
  background: #f9f9f9;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding: 5px;
`;

export const TrackButton = styled.button`
  background: black;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  cursor: pointer;
  min-width: 20%;
`;

export const OrderInfo = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  padding: 10px 0px;
  text-align: left;
`;