import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaGavel,
  FaHeart,
  FaMapMarkerAlt,
  FaHeadset,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

import { Logout } from "./Logout";
import { MyProfile } from "./MyProfile";
import { MyOrders } from "./MyOrders";
import { MyBids } from "./MyBids";
import { WishList } from "./WishList";
import {
  MenuTitle,
  MenuItem,
  Sidebar,
  StyledAccountContainer,
} from "./MyAccount.styles";
import { Address } from "../../Components/Address";

export const accountOptions = [
  { name: "My Profile", icon: <FaUser /> },
  { name: "My Orders", icon: <FaBox /> },
  { name: "My Bids", icon: <FaGavel /> },
  { name: "Wishlist", icon: <FaHeart /> },
  { name: "My Address", icon: <FaMapMarkerAlt /> },
  { name: "Help Center", icon: <FaHeadset /> },
  { name: "Logout", icon: <FaSignOutAlt /> },
];

export const MyAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedNav, setSelectedNav] = useState("My Profile");

  const { name } = location.state;

  useEffect(() => {
    setSelectedNav(name);
  }, [name]);

  const handleNavClick = (nav) => {
    if (nav === "Help Center") {
      navigate("/help");
    }
    setSelectedNav(nav);
  };

  const renderMenuItem = (text, Icon) => {
    return (
      <MenuItem
        style={selectedNav === text ? { color: "black" } : { color: "gray" }}
        onClick={() => handleNavClick(text)}
      >
        {Icon} {text}
      </MenuItem>
    );
  };

  return (
    <div className="px-[10%] py-8 bg-white">
      <StyledAccountContainer>
        <Sidebar>
          <MenuTitle>YOUR INFO</MenuTitle>
          {accountOptions.map(({ name, icon }) => renderMenuItem(name, icon))}
        </Sidebar>
        <div className="flex-grow">
          {selectedNav === "My Profile" && <MyProfile />}
          {selectedNav === "My Orders" && <MyOrders />}
          {selectedNav === "My Bids" && <MyBids />}
          {selectedNav === "Wishlist" && <WishList />}
          {selectedNav === "My Address" && (
            <div className="p-5">
              <Address />
            </div>
          )}
          {selectedNav === "Logout" && <Logout/>}
        </div>
      </StyledAccountContainer>
    </div>
  );
};
