import React from "react";

/*
ListingCard Component

This component creates the listing card used on the listings page.
*/

type props = {
    id: string;
    name: string;
    image: string;
    user_is_host: boolean;
    onClick(): void;
    minBid: any
};

const ListingCard: React.FC<props> = (props) => {
    const { name, image,  onClick,  minBid} = props;
    return (
        <div className="w-full cursor-pointer" onClick={onClick}>
            <div
                className="w-full h-64 mb-2 bg-gray-100 flex justify-end items-start p-2"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                }}
            >
            </div>
            <p className="text-gray-900 font-semibold">
                Min Bid : {minBid} ETH
                <span className="text-gray-600 font-light"></span>
            </p>
        </div>
    );
};

export default ListingCard;
