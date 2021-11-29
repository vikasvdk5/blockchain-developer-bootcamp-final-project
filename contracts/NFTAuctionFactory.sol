// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

// import "./SkyScrapperNFT.sol";

contract NFTAuctionFactory {

  // index of created auctions
  address[] public auctions;


  struct AuctionDetails {
    address nftAddr;
    uint nftId;
    uint auctionId;
    uint startingBid;
  }

  AuctionDetails[] public auctionDetailList;

  // useful to know the row count in contracts index
  function getTotalAuctionsCount() public view returns(uint contractCount)
  {
    return auctions.length;
  }

function getAuctionAddress(uint id) public view returns(address contractAddress)
  {
    return auctions[id];
  }

  // deploy the Auction new contract
  function createNewAuction(address _nft, uint _nftId, uint _startingBid) public returns (address newContract)
  {
    NFTAuction auction = new NFTAuction(_nft, _nftId, msg.sender, _startingBid);
    auctions.push(address(auction)); 

    AuctionDetails memory auctionDetails;
    auctionDetails.nftAddr = _nft;
    auctionDetails.nftId = _nftId;
    auctionDetails.startingBid = _startingBid;

    auctionDetailList.push(auctionDetails);
    
    return address(auction);
  }

  function getAuctionDetailList() public view returns (AuctionDetails[] memory) {
    return auctionDetailList;
  }
}

interface IERC721 {
    function transfer(address, uint) external;
    function transferFrom(address, address, uint) external;
}

contract NFTAuction {

  event StartAuction();
  event Bid(address indexed sender, uint amount);
  event Withdraw(address indexed bidder, uint amount);
  event EndAuction(address winner, uint amount);

  IERC721 public nft;
  uint public nftId;

  address payable public seller;
  uint public endAt;
  bool public started;
  bool public ended;

  address public highestBidder;
  uint public highestBid;
  mapping(address => uint) public bids;

  constructor(address _nft, uint _nftId, address owner, uint _startingBid) {
    nft = IERC721(_nft);
    nftId = _nftId;

    seller = payable(owner);
    highestBid = _startingBid;

  }

  function startAuction() external {
        require(!started, "started");
    // require(msg.sender == seller, "not seller");

    nft.transferFrom(msg.sender, address(this), nftId);
    started = true;
    endAt = block.timestamp + 7 days;

    emit StartAuction();
  }

  function bid() external payable {
    require(started, "not started");
    require(block.timestamp < endAt, "ended");
    require(msg.value > highestBid, "bid is low");

    if (highestBidder != address(0)) {
        bids[highestBidder] += highestBid;
    }

    highestBidder = payable(msg.sender);
    highestBid = msg.value;

    emit Bid(msg.sender, msg.value);
  }

  function withdraw() external {
    uint bal = bids[msg.sender];
    bids[msg.sender] = 0;
    payable(msg.sender).transfer(bal);

    emit Withdraw(msg.sender, bal);
  }

  function endAuction() external {
    require(started, "not started");
    require(block.timestamp >= endAt, "not ended");
    require(!ended, "already ended");

    ended = true;
    if (highestBidder != address(0)) {
        // payable(address(nft)).transfer(highestBidder, nftId);
        seller.transfer(highestBid);
    } else {
        nft.transfer(seller, nftId);
    }

    emit EndAuction(highestBidder, highestBid);
  }

}