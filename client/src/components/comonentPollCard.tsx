import React, { useEffect, useState } from "react";
import Button from "./componentButton";
import Input from "./componentInput";

/*
ListingCard Component

This component creates the listing card used on the listings page.
*/

type props = {
    image: string;
};

const PollCard: React.FC<props> = (props) => {
    const { image } = props;

    const [buyerAddress, setBuyerAddress] = useState<string>("");
    const [pollResponse, setPollResponse] = useState<string>("");

    const applyVote = () => {

    }

    return (
        <>
                <div className="container mx-auto pl-10 lg:px-2 pb-10 bg-gray-200 rounded-lg">
                    <div className="pt-10 pb-10">
                        <h1 className="text-gray-900 text-3xl font-medium">
                            fdnsjkfdhnsjkfhjnsf
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        <div className="order-2 lg:order-none lg:col-span-2">
                            <img
                                className="rounded-xl bg-gray-100"
                                src={image}
                            />
                        </div>

                        <div className="order-1">
                            <div className="sticky top-32 p-6 rounded-xl border-2 w-full">
                                <Button
                                    modal
                                    onClick={setPollResponse}
                                    text="Vote this Image!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            
        </>


    );
};

export default PollCard;
