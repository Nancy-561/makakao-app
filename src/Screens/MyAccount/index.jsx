import React, { useState } from "react";
import { FaBox, FaGavel, FaHeart, FaMapMarkerAlt, FaHeadset, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MyProfile } from "./MyProfile";
import { MyOrders } from "./MyOrders";
import { MyBids } from "./MyBids";
import { Wishlist } from "./WishList";

import { MenuTitle, MenuItem, Sidebar } from "./MyAccount.styles";


export const MyAccount = () => {
    const [showProfile, setShowProfile] = useState(true)
    const [showOrder, setShowOrder] = useState(false)
    const [showBids, setShowBids] = useState(false)
    const [showWishlist, setShowWishList] = useState(false)
    const [showAddress, setShowAddress] = useState(false)
    const [showHelpCenter, setShowHelpCenter] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
        const handleClickProfile = () => {
        setShowProfile(true)
        setShowOrder(false)
        setShowBids(false)
        setShowWishList(false)
        setShowAddress(false)
        setShowHelpCenter(false)
        setShowLogout(false)
    }
        const handleClickOrder = () => {
        setShowProfile(false)
        setShowOrder(true)
        setShowBids(false)
        setShowWishList(false)
        setShowAddress(false)
        setShowHelpCenter(false)
        setShowLogout(false)
    }
    const handleClickBids = () => {
        setShowProfile(false)
        setShowOrder(false)
        setShowBids(true)
        setShowWishList(false)
        setShowAddress(false)
        setShowHelpCenter(false)
        setShowLogout(false)
    }
    const handleClickWishlist = () => {
        setShowProfile(false)
        setShowOrder(false)
        setShowBids(false)
        setShowWishList(true)
        setShowAddress(false)
        setShowHelpCenter(false)
        setShowLogout(false)
    }
    const handleClickAddress = () => {
        setShowProfile(false)
        setShowOrder(false)
        setShowBids(false)
        setShowWishList(false)
        setShowAddress(true)
        setShowHelpCenter(false)
        setShowLogout(false)
    }
    const handleClickHelpCenter = () => {
        setShowProfile(false)
        setShowOrder(false)
        setShowBids(false)
        setShowWishList(false)
        setShowAddress(false)
        setShowHelpCenter(true)
        setShowLogout(false)
    }
    const handleClickLogout = () => {
        setShowProfile(false)
        setShowOrder(false)
        setShowBids(false)
        setShowWishList(false)
        setShowAddress(false)
        setShowHelpCenter(false)
        setShowLogout(true)
    }
    return (
            <div className="w-full h-[100vh] flex flex-col justify-center">
                <div className="w-[90%] m-auto flex h-[80vh]">
                    <Sidebar>
                        <MenuTitle>YOUR INFO</MenuTitle>
                        <MenuItem style={showProfile?{color:"black"}:{color:"gray"}} onClick={handleClickProfile}>
                            <FaUser /> My Profile
                        </MenuItem>
                        <MenuItem style={showOrder?{color:"black"}:{color:"gray"}} onClick={handleClickOrder}>
                            <FaBox /> My Orders
                        </MenuItem>
                        <MenuItem style={showBids?{color:"black"}:{color:"gray"}} onClick={handleClickBids}>
                            <FaGavel /> My Bids
                        </MenuItem>
                        <MenuItem style={showWishlist?{color:"black"}:{color:"gray"}} onClick={handleClickWishlist}>
                            <FaHeart /> Wishlist
                        </MenuItem>
                        <MenuItem style={showAddress?{color:"black"}:{color:"gray"}} onClick={handleClickAddress}>
                            <FaMapMarkerAlt /> My Address
                        </MenuItem>
                        <MenuItem style={showHelpCenter?{color:"black"}:{color:"gray"}} onClick={handleClickHelpCenter}>
                            <FaHeadset /> Help Center
                        </MenuItem>
                        <MenuItem style={showLogout?{color:"black"}:{color:"gray"}} onClick={handleClickLogout}>
                            <FaSignOutAlt /> Logout
                        </MenuItem>
                    </Sidebar>

                    <div className="border-2 border-gray-300 w-[80%] bg-white">
                        {showProfile && <MyProfile />}
                        {showOrder && <MyOrders />}
                        {showBids && <MyBids />}
                        {showWishlist && <Wishlist />}
                    </div>
                </div>
            </div>

    );
};


