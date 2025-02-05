import React from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { BidCard } from "../../Components/BidCard";
import { Container, Header, Title, Actions, Dropdown, SearchBox, SearchInput} from "./MyAccount.styles";


export const MyBids = () => {
    const bids = [
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Black Rectangle Rimmed Eyeglasses for Women",
            orderId: "25139526913984",
            price: "600",
            quantity: 1,
            currentBid :"1500",
            bidCount : 7,
            userBid : "1789",
            timeLeft : "1d 2h"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Black Rectangle Rimmed Eyeglasses for Women",
            orderId: "25139526913984",
            price: "600",
            quantity: 1,
            currentBid :"1600",
            bidCount : 7,
            userBid : "899",
            timeLeft : "2d 2h"
        },
    ];

    return (
        <Container>
            <Header>
                <Title>My order</Title>
                <Actions>
                    <Dropdown>
                        <option>In Progress</option>
                    </Dropdown>
                    <SearchBox>
                        <FaSearch />
                        <SearchInput type="text" placeholder="Search for orders" />
                    </SearchBox>

                </Actions>
            </Header>

            <div className="py-4">
                {bids.map((bid, index) => (
                    <BidCard key={index} {...bid} />
                ))}
            </div>
        </Container>
    );
};
