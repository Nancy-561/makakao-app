import React from "react";
import { Card,Image,Info,Title,OrderId,Price,Quantity,Rating,Star } from "./OrderCard.styles";


export const OrderCard = ({ image
    , title
    , orderId,
    price,
    quantity }) => {
    return (

        <Card>
            <div className="flex ">
                <Image src={image} alt={title} />
                <Info>
                    <Title>{title}</Title>
                    <OrderId>#{orderId}</OrderId>
                    <Price>${price}</Price>
                </Info>
                <Quantity>Quantity: {quantity}</Quantity>
            </div>
            <div className="flex gap-2 mt-2">
                <p>Rate your Order</p>
                <Rating>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} />
                    ))}
                </Rating>
            </div>

        </Card>


    );
};
