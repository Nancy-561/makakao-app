import React from "react";
import {Card,ProductInfo,Image,Details,Title,OrderId,Price,BidInfo,BidAmount,BidsLink,TimeLeft } from "./BidCard.styles";

export const BidCard = ({ image
    , title
    , orderId,
    price,
    currentBid,
    bidCount,
    userBid,
    timeLeft }) => {
    return (
        <Card>
            <ProductInfo>
                <Image src={image} alt={title} />
                <Details>
                    <Title>{title}</Title>
                    <OrderId>#{orderId}</OrderId>
                    <Price>${price}</Price>
                </Details>
            </ProductInfo>
            <BidInfo>
                <div className="flex justify-between">
                    <div>
                        <p>Current bid</p>
                        <BidAmount>${currentBid} <BidsLink>{bidCount} bids</BidsLink></BidAmount>
                    </div>
                    <div>
                        <p>Your bid</p>
                        <BidAmount>${userBid}</BidAmount>
                    </div>
                </div>
                <TimeLeft>⏳ Ends in {timeLeft}</TimeLeft>
            </BidInfo>
        </Card>
    );
};