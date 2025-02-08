import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { X } from "lucide-react";

const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
`;

export const ProductBiddingModel = ({ setShowBidPopup }) => {
    const [bid, setBid] = useState(1.04);

    return (
        <Container>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-left">Place your bid</h2>
                <button className="p-1 rounded-[50%] bg-black text-white" onClick={setShowBidPopup}><X size={12}></X></button>
            </div>
            <p className="text-gray-600 text-left">
                <strong>$0.99</strong> + $49.99 shipping
            </p>
            <p className="text-sm text-gray-500 text-left mb-4">1 bid • 3d 20h left</p>
            <div className="mt-4 flex justify-between gap-4">
                <Button btnText="Bid $2" handleClick={(e) => setBid(2)} />
                <Button btnText="Bid $5" handleClick={(e) => setBid(5)} />
                <Button btnText="Bid $10" handleClick={(e) => setBid(10)} />
            </div>
            <div className="flex items-center my-2">
                <div className="flex-1 border-[1px] border-gray"></div>
                <div>or</div>
                <div className="flex-1 border-[1px] border-gray"></div>
            </div>
            <p className="text-left font-semibold">Your Max Bid</p>
            <div className="grid grid-cols-[1fr,auto] items-end">
                <Input
                    value={bid}
                    handleChange={(e) => setBid(parseFloat(e.target.value) || 1.04)}

                />
                <Button btnText="Bid" btnId="sign" btnClassName="bid-btn ml-4 mb-3" handleClick={setShowBidPopup} />
            </div>
            <p className="text-left text-xs">Enter $1.04 or more</p>

            <p className="text-xs mt-2 text-left">
                By selecting Bid, you are committing to buy this item if you are the
                winning bidder.
            </p>
        </Container>
    );
};
