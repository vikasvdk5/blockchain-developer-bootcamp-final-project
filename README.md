# NFT Collectible with Auction functionality

This project is a SkyScrapper Access Pass NFT Collectible smart contract where you can mint NFTs as a representation of lifetime Access Pass for that SkyScrapper. Once the NFTs are minted, there is a capability to setup the Auction for those NFTs.

## UI Features
- Login with Metamask.
- List Your NFT tokens, all other NFT tokens & NFT tokens available for Auctions.
- SetupAuction for a given NFT from the "Your Tokens" list.


## SkyScrapper NFT Collectible SmartContract Features (All features are not implemented in UI)
- Mint, or Burn Non-Fungible Tokens(NFT).
- Approve - Assign spender approval for enabling TransferFrom functionality. To approve or remove spender approval for a given NFT token.
- setApprovalForAll - To set or unset an operator for any given token owner.

DEPLOYED in Ropsten @ `0xf65f5728082c640f781f48Eecb113fcF58A51421` 

## NFT Pass Auction SmartContract Features (All features are not implemented in UI)
- createNewAuction - To setup the base for auction by deploying a NFTAuction contract using the NFTAuctionFactory.
- startAuction - Start the auction of a given NFT Token at the given start Block number and for the given bidding duration with a specified minimum bid. Asset Owner only transition.
- bid - Bidding request for the auction of a given NFT Token.
- withdraw - Withdraw the bid of a given Auction.
- endAuction - Ending the Auction for the specified NFT Token.

DEPLOYED in Ropsten @ `0xb3CDAe7968c947162E2C22B7B91859C573c0f8aE` 

# Getting Started


## The Technology

- [Create React App](https://github.com/facebook/create-react-app) for the frontend.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [Ethereum](https://ethereum.org/en/) blockchain technology.
- [Openzepplin](https://openzeppelin.com/) for base contracts 


## Directory structure

- `client`: Project's React frontend.
- `contracts`: Smart contracts that are deployed in the Ropsten testnet.
- `migrations`: Migration files for deploying contracts in `contracts` directory.
- `test`: Tests for smart contracts.

## Steps to run the project

cd client (From Base directory)
- ***Download dependencies :*** \
`npm install`

- Note: May need to separately install the below components additionally: \
  `npm install -g tailwind` \
  `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

- ***Start Project : Development *** \
`npm start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.\
 You will also see any lint errors in the console.


- ***Build Project : Production *** 
`npm build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Metamask Wallet details for Minting NFT and setting up the Auction: (Please import this to Metamask)
Ropsten Metamask Account (Final deployed project) \
Public address - 0xE5288D8a86755A368208e83c91324eA468922122 \
Priv Key - 33f434da822756aaa2585d6a4e77494b6f2708d45a49b9573fa221f996e05a41 \

PS: Since any new address needs to be whitelisted for Minting, sharing the above Metamask details in TestNet for easy access. 
## Simple workflow

1. Enter the web site
2. Login with Metamask
3. Browse your NFTs and any Auctions listed
4. Click on "Create a token" (NFT)
5. Copy an image URL from Google Images for a SkyScrapper and paste the image URL and click "Mint!") (Smart contract call - Invoke safeMint in SkyScrappersNFT SmartContract)
6. Sign the transaction with the Metamask in Ropsten test network using the below provided Wallet Address which is the Owner of the SmartContract who has the access for Minting.
7. You will see the new NFT token under "Your Tokens" listing (Refresh if needed). (Smart contract call - Fetched from the SkyScrappersNFT SmartContract)
8. Now Click on the newly minted or any of your existing NFT tokens in the "Your Tokens" listing.
9. Enter the minimum Bid and click "Setup Auction". Sign with MetaMask. (SmartContract call to another contract "NFTAuctionFactory". This will internally deploy a separate Contract called "NFTAuction" which will be the specific smart contract to this Auction) 
10. You will see the NFT also under the "Auction Listing" with the minimum bid provided (smart contract call - Fetched from the NFTAuctionFactory ).
11. Click on this listing under "Auction Listing" and you will be taken to the Auction Page of that NFT where the Bidding text and buttons are provided (Bidding is not implemented currently and will be part of future scope along with endAuction functionality)



## Public Ethereum wallet for certification:
0x733F6e7D995d7f9054506FF98836eED5770B4289


