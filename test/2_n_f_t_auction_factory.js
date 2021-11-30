const NFTAuctionFactory = artifacts.require("NFTAuctionFactory");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NFTAuctionFactory", function (accounts) {
  it("should assert true for deployment", async function () {
    await NFTAuctionFactory.deployed();
    return assert.isTrue(true);
  });

    // auctions array is checked for length zero just post deployment
  it("has an initial auctions list length of zero", async () => {
    // Get the contract that is deployed
    const afInstance = await NFTAuctionFactory.deployed();

    // Verify that the value of the auctions array is Zero.
    const auctionsCount = await afInstance.getTotalAuctionsCount.call();
    assert.equal(auctionsCount, 0, `Initial length should be zero`);
  });

  it("creating an auction for a NFT sets the minimum bid to provided starting bid value", async () => {
    const nftAddress = accounts[1];
    const nftId = 0;
    const minBid = 5; // 5 ETH
    
    // Get the contract that is deployed
    const afInstance = await NFTAuctionFactory.deployed();

    await afInstance.createNewAuction(nftAddress, nftId, minBid);

    const auctionDetailList = await afInstance.getAuctionDetailList.call();
    // console.log(auctionDetailList);
    assert.equal(auctionDetailList[0].startingBid, minBid, `startingBid is not set when the NFT Auction is created`);
  });


});
