# NFT Collectible with Auction functionality

This project is a NFT Collectible smart contract where you can mint, burn NFTs. Once the NFTs are minted, there is a capability to Auction those NFTs.


## NFT Collectible SmartContract Features
- Mint, or Burn Non-Fungible Tokens(NFT).
- Approve - Assign spender approval for enabling TransferFrom functionality. To approve or remove spender approval for a given NFT token.
- setApprovalForAll - To set or unset an operator for any given token owner.


## Auction SmartContract Features
- setupAuction - To setup the base for auction by deploying a NFTAuction contract using the NFTAuctionFactory.
- startAuction - Start the auction of a given NFT Token at the given start Block number and for the given bidding duration with a specified minimum bid. Asset Owner only transition.
- Bid - Bidding request for the auction of a given NFT Token.
- AuctionEnd - Ending the Auction for the specified NFT Token.

## UI Features
- Login with Metamask.
- List Your NFT tokens, all other NFT tokens & NFT tokens available for Auctions.
- Mint NFT Tokens.
- SetupAuction for a given NFT from the "Your Tokens" list.


## Getting Started

### Prerequisites
 - Node.js >= v14
 - Truffle and Ganache
 - Yarn
 - git checkout master

## Contracts
  - Run yarn install in project root to install Truffle build and smart contract dependencies
  - Run local testnet in port 7545 with an Ethereum client, e.g. Ganache
  - truffle migrate --network development
  - truffle console --network development
  - Run tests in Truffle console: test
  - development network id is 1337, remember to change it in Metamask as well!

## Frontend
  - cd client
  - yarn install
  - yarn start
  - Open http://localhost:3000

