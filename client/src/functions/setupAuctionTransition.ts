import getCallParameters from "./getCallParameters";
import toast from "react-hot-toast";
import transitionMessageAlert from "./transitionMessageAlert";
import { decodeZilPayError } from "./decodeMessage";
import { NFTCOSMOS_ADDRESS } from "../config";

/* Calls claim_rent transition */

const setupAuctionTransition = async (
    contract: any,
    web3: any,
    id: any,
    minBid: any,
) => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log(NFTCOSMOS_ADDRESS);
        contract.methods.createNewAuction(NFTCOSMOS_ADDRESS, id, minBid).send({from : accounts[0]}, function (err:any, res:any) {
            if (err) {
                toast.error(err.message)
              return
            }
            toast.success("Auction creation submitted!");
          })
        
    } catch (error:any) {
        toast.error(error.message);
    }
};

export default setupAuctionTransition;
