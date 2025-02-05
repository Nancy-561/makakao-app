import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Card,ImageContainer,Image,DiscountBadge,DeleteIcon,Title,Category,Price } from "./WishListCard.styles";


export const WishListCard = ({ image = "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg"
    , title = "Escape Oval Sunglasses"
    , category = "Sunglasses", price = 2499.00, discount = 23 }) => {
    return (
        <Card>
            <ImageContainer>
                {discount && <DiscountBadge>-{discount}%</DiscountBadge>}
                <DeleteIcon>🗑</DeleteIcon>
                <Image src={image} alt={title} />
            </ImageContainer>
            <Title>{title}</Title>
            <Category>{category}</Category>
            <Price>${price}</Price>
            <Button
                btnText="Add to Cart"
                btnId="addCart-btn"
                btnClassName="secondary-btn"
            />
        </Card>
    );
};
