import React, { useEffect, useState } from "react";
import claimRentTransition from "../functions/claimRentTransition";
import ContextContainer from "../functions/contextContainer";
import deleteListingTransition from "../functions/deleteListingTransition";
import updateListingTransition from "../functions/updateListingTransition";
import setApproveTransition from "../functions/setApproveTransition";
import Button from "./componentButton";
import Input from "./componentInput";
import Modal from "./componentModal";
import { useWeb3React } from "@web3-react/core"
import { NFTAUCTIONFACTORY_ABI, NFTCOSMOS_ABI, NFTCOSMOS_ADDRESS ,NFTAUCTIONFACTORY_ADDRESS} from "../config";
import Web3 from 'web3'
import setupAuctionTransition from "../functions/setupAuctionTransition";

/*
ManageListingModal Component

This component presents a modal that can be used by a host user to manage their listing.
Uses Input and Button components.
deleteListing, updateListing and claimRent functions are called as required.
*/

type props = {
    modalListing: any;
    showManageListing: boolean;
    setShowManageListing(visible: boolean): void;
};

const ManageListingModal: React.FC<props> = (props) => {
    const { showManageListing, setShowManageListing, modalListing } = props;
    const { id, accumulated_rent } = modalListing;
    const [minBid, setMinBid] = useState<string | undefined>(undefined);
    const [price, setPrice] = useState<string | undefined>(undefined);
    const [image, setImage] = useState<string | undefined>(undefined);
    const [web3, setWeb3] = useState<any | undefined>(undefined);
    const [contract, setContract] = useState<any | undefined>(undefined);
    const [buyerAddress, setBuyerAddress] = useState<string | undefined>(undefined);
    let {
        library,
        active,
        account } = useWeb3React();

    useEffect(() => {
        setPrice(modalListing.price);
        setImage(modalListing.image);
        const web3 = new Web3(library);
        setWeb3(web3);
        let contract = new library.eth.Contract(NFTCOSMOS_ABI as any, NFTCOSMOS_ADDRESS, account);
        setContract(contract);
    }, [showManageListing]);


    const updateListing = () => {
        if (
            !id ||
            !price ||
            !image
        )
            return;

        updateListingTransition(
            contract,
            web3,
            id,
            price,
            image,
        );
    };

    const deleteListing = () => {
        deleteListingTransition(contract, web3, id);
        setShowManageListing(false);
    };

    const setupAuction = () => {
        const web3 = new Web3(library);
        let contract = new library.eth.Contract(NFTAUCTIONFACTORY_ABI as any, NFTAUCTIONFACTORY_ADDRESS, account);
        setupAuctionTransition(contract, web3, id, minBid);
        setShowManageListing(false);
    };

    const setApprover = () => {
        setApproveTransition(contract, web3, id, buyerAddress);
        setShowManageListing(false);
    };


    return (
        <Modal
            title="Manage"
            visible={showManageListing}
            setVisible={setShowManageListing}
            buttonText={"Update Listing"}
            onClick={updateListing}
        >
            


            <Input
                name="Image URL"
                value={image}
                type="text"
                setValue={setImage}
                disabled
            />
            <div className="flex grid md:grid-rows-1">
                <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase py-4">
                    Auction
                </h4>
                <Input
                name="Minimum Bid"
                value={minBid}
                type="string"
                setValue={setMinBid}
                />
                <div className="flex grid md:grid-cols-3 gap-7">
                    <Button
                        text={"Setup Auction"}
                        onClick={setupAuction}
                        auction
                        padding
                        modal
                    />
                    <Button
                        text={"Start Auction"}
                        onClick={deleteListing}
                        auction
                        padding
                        modal
                    />
                    <Button
                        text={"End Auction"}
                        onClick={deleteListing}
                        auction
                        padding
                        modal
                    />
                </div>
            </div>

            <>
                {/* <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase py-4">
                    Delete Listing
                </h4>
                <Button
                    text={"Delete Listing"}
                    onClick={deleteListing}
                    alert
                    padding
                    modal
                /> */}
            </>


        </Modal>
    );
};

export default ManageListingModal;
