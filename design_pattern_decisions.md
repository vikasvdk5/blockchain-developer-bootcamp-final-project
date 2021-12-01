# The below design patterns are used in the Solidity contracts of this project:

## Access Control Design Patterns

- `Ownable` design pattern used in the `safeMint()`, `pause()` & `unpause()`. These functions do not need to be used by anyone else apart from the contract creator. 

## Inheritence and Interfaces

- The `SkyScrapperNFT` contract inherits from OpenZeppelin `Ownable.sol`

## Factory Design Pattern

- Individual `NFTAuction` contracts will be deployed by using the `NFTAuctionFactory` contract.
