const SkyScrapperNFT = artifacts.require("SkyScrapperNFT");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SkyScrapperNFT", function (accounts) {
  it("should assert true for deployment", async function () {
    await SkyScrapperNFT.deployed();
    return assert.isTrue(true);
  });

  // nftMetaList array is checked for length zero just post deployment
  it("has an initial length of zero", async () => {
    // Get the contract that is deployed
    const nftInstance = await SkyScrapperNFT.deployed();

    // Verify that the value of the NFTList is Zero.
    const nftMetaList = await nftInstance.getTokenMetaList.call();
    assert.equal(nftMetaList.length, 0, `Initial length should be zero`);
  });

  it("starts to Mint with ID Zero", async () => {
    const setToAddress = accounts[0];
    const setUri = "http://testNftMeta.com/1";
    
    // Get the contract that is deployed
    const nftInstance = await SkyScrapperNFT.deployed();

    // Verify that the value of the NFTList is Zero.
    await nftInstance.safeMint(setToAddress, setUri);

    const nftMetaList = await nftInstance.getTokenMetaList.call();
    // console.log(nftMetaList[0]);
    assert.equal(nftMetaList[0].tokenId, 0, `First minted tokenId should be zero`);
  });

  
  it("minting the NFT sets the tokenURI to the URI provided", async () => {
    const setToAddress = accounts[0];
    const setUri = "http://testNftMeta.com/2";
    
    // Get the contract that is deployed
    const nftInstance = await SkyScrapperNFT.deployed();

    // Verify that the value of the NFTList is Zero.
    await nftInstance.safeMint(setToAddress, setUri);

    const nftMetaList = await nftInstance.getTokenMetaList.call();
    // console.log(nftMetaList[1]);
    assert.equal(nftMetaList[1].uri, setUri, `tokenURI is not set after the NFT is minted`);
  });

  it("minting the NFT increments the tokenId by 1 with each successful Mint", async () => {
    const setToAddress = accounts[0];
    const setUri = "http://testNftMeta.com/3";
    
    // Get the contract that is deployed
    const nftInstance = await SkyScrapperNFT.deployed();

    // Verify that the value of the NFTList is Zero.
    await nftInstance.safeMint(setToAddress, setUri);

    const nftMetaList = await nftInstance.getTokenMetaList.call();
    // console.log(nftMetaList[2]);
    assert.equal(nftMetaList[2].tokenId, 2, `the 3rd NFT token has to have a tokenId of 2`);
  });
});
