const formatListings = async (
    skyScraperContract: any,
    auctionFactoryContract: any,
    account: any,
    web3: any
) => {
    let contractResponse = new Array();
    const accounts = await web3.eth.getAccounts();
    await skyScraperContract.methods.getTokenMetaList().call({ from: accounts[0] }, function (err: any, res: any) {
        if (err) {
            console.log("An error occured", err)
            return
        }
        res.forEach((element: any) => {
            if (element.uri) {
                contractResponse.push({
                    id: element.tokenId,
                    image: element.uri,
                    isOwner: accounts[0] === element.owner,
                    isAuction: false
                })
            }
        });
    })
    // await auctionFactoryContract.methods.getAuctionDetailList().call({ from: accounts[0] }, function (err: any, res: any) {

    //     if (err) {
    //         console.log("An error occured", err)
    //         return
    //     }
    //     res.forEach((element: any) => {
    //         return (async () => {
    //             await skyScraperContract.methods.tokenURI(element.nftId).call({ from: accounts[0] }, function (err: any, response: any) {
    //                 contractResponse.push({
    //                     id: element,
    //                     isOwner: accounts[0] === element.owner,
    //                     image: response ? response : "https://www.miamioh.edu/_files/images/news/2019/06/auction-sign.jpg",
    //                 });
    //             });

    //         });
    //     });
    // });



    await auctionFactoryContract.methods.getAuctionDetailList().call({ from: accounts[0] }, function (err: any, res: any) {

        if (err) {
            console.log("An error occured", err)
            return
        }
        res.forEach((element: any) => {
            contractResponse.push({
                id: element.auctionId,
                isOwner: accounts[0] === element.owner,
                image: "https://www.miamioh.edu/_files/images/news/2019/06/auction-sign.jpg",
                minBid: element.startingBid,
                isAuction: true
            });

        });
    });

    return contractResponse;


}





export default formatListings;