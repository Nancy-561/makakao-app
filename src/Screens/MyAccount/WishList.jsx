import React from "react";
import { FaSearch} from "react-icons/fa";
import { WishListCard } from "../../Components/WishListCard";
import { Container, Header, Title, Actions,SearchBox, SearchInput} from "./MyAccount.styles";


export const WishList = () => {
    const WishListorders = [
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Escape Oval Sunglasses",
            category :"Sunglasses", 
            price : 2499.00, 
            discount: 23
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Escape Oval Sunglasses",
            category :"Sunglasses", 
            price : 2499.00, 
            discount: 23
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Escape Oval Sunglasses",
            category :"Sunglasses", 
            price : 2499.00, 
            discount: 23
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/029/282/385/small_2x/pixel-art-sweater-pixelated-sweater-clothes-sweater-autumn-icons-background-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-vector.jpg",
            title: "Escape Oval Sunglasses",
            category :"Sunglasses", 
            price : 2499.00, 
            discount: 23
        }
    ];

    return (
        <Container>
            <Header>
                <Title>WishList</Title>
                <Actions>
                    <SearchBox>
                        <FaSearch />
                        <SearchInput type="text" placeholder="Search for orders" />
                    </SearchBox>
                </Actions>
            </Header>

            <div className="flex flex-wrap gap-4 py-2">
                {WishListorders.map((WishListorder, index) => (
                    <WishListCard key={index} {...WishListorder} />
                ))}
            </div>
        </Container>
    );
};
