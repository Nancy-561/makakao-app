import React from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { OrderCard } from "../../Components/OrderCard";
import { Container, Header, Title, Actions, Dropdown, SearchBox, SearchInput, TrackButton, OrderInfo } from "./MyAccount.styles";
import { Button } from "../../Components/Button";


export const MyOrders = () => {
    const orders = [
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Black Rectangle Rimmed Eyeglasses for Women",
            orderId: "25139526913984",
            price: "600",
            quantity: 1,
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Black Rectangle Rimmed Eyeglasses for Women",
            orderId: "25139526913984",
            price: "600",
            quantity: 1,
        },
    ];

    return (
        <Container>
            <Header>
                <Title>My order</Title>
                <Actions>
                    <Dropdown>
                        <option>All orders</option>
                    </Dropdown>
                    <SearchBox>
                        <FaSearch />
                        <SearchInput type="text" placeholder="Search for orders" />
                    </SearchBox>

                </Actions>
            </Header>
            <div className="flex justify-between py-4">
                <OrderInfo>Order ID: <strong>FL09876567</strong> 06 Feb 2024</OrderInfo>
                <TrackButton>
                        Track order <FaChevronRight />
                    </TrackButton>
                {/* <Button btnText={"Track order"+ <FaChevronRight />} btnId="track-order" btnClassName="secondary-btn max-w-[30%] flex justify-around ml-[15px]" /> */}
            </div>

            <div className="py-4">
                {orders.map((order, index) => (
                    <OrderCard key={index} {...order} />
                ))}
            </div>
        </Container>
    );
};
