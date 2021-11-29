const NFTAuctionFactory = artifacts.require("NFTAuctionFactory");

module.exports = function (deployer) {
  deployer.deploy(NFTAuctionFactory);
};
