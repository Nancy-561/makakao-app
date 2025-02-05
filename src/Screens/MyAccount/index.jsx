import React, { useState } from "react";
import {
  FaBox,
  FaGavel,
  FaHeart,
  FaMapMarkerAlt,
  FaHeadset,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

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

export const MyAccount = () => {
  const [selectedNav, setSelectedNav] = useState("My Profile");

  const handleNavClick = (nav) => {
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
          {renderMenuItem("My Profile", <FaUser />)}
          {renderMenuItem("My Orders", <FaBox />)}
          {renderMenuItem("My Bids", <FaGavel />)}
          {renderMenuItem("Wishlist", <FaHeart />)}
          {renderMenuItem("My Address", <FaMapMarkerAlt />)}
          {renderMenuItem("Help Center", <FaHeadset />)}
          {renderMenuItem("Logout", <FaSignOutAlt />)}
        </Sidebar>
        <div className="flex-grow">
          {selectedNav === "My Profile" && <MyProfile />}
          {selectedNav === "My Orders" && <MyOrders />}
          {selectedNav === "My Bids" && <MyBids />}
          {selectedNav === "Wishlist" && <WishList />}
        </div>
      </StyledAccountContainer>
    </div>
  );
};
