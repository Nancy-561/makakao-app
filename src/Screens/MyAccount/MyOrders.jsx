import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { OrderCard } from "../../Components/OrderCard";
import {
  Container,
  Header,
  Title,
  Actions,
  Dropdown,
  SearchBox,
  SearchInput,
  TrackButton,
  OrderInfo,
} from "./MyAccount.styles";

export const MyOrders = () => {
  const orders = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
      title: "Black Rectangle Rimmed Eyeglasses for Women",
      orderId: "25139526913984",
      price: "600",
      quantity: 1,
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
      title: "Black Rectangle Rimmed Eyeglasses for Women",
      orderId: "25139526913984",
      price: "600",
      quantity: 1,
    },
  ];

  return (
    <Container className="w-full">
      <Header>
        <Title>My order</Title>
        <Actions>
          <Dropdown>
            <option>All orders</option>
          </Dropdown>
          <SearchBox>
            <SearchInput type="text" placeholder="Search for orders" />
            <FiSearch size={24} />
          </SearchBox>
        </Actions>
      </Header>
      <div className="flex justify-between py-4">
        <OrderInfo>
          <strong>Order ID: FL09876567</strong>{" "}
          <span className="text-[#A5A5A5]">06 Feb 2024</span>
        </OrderInfo>
        <TrackButton>
          Track order <FaChevronRight />
        </TrackButton>
      </div>
      <div className="py-4">
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    </Container>
  );
};
