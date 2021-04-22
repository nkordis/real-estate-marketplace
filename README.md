# Real Estate Marketplace

In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property.

Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

## Token

Name: ERC721Token<br>
Symbol: ERC721T<br>
Token Address: [0x43adb4abd0307cdf84b583de9290d42dd75b5e21](https://rinkeby.etherscan.io/token/0x43adb4abd0307cdf84b583de9290d42dd75b5e21)

## OpenSea

Initial Owner: [0x468c76d35fda0Af918b119caa874Ef6955436f20](https://rinkeby.opensea.io/accounts/0x468c76d35fda0Af918b119caa874Ef6955436f20)<br>
Buyer: [0x442778d63284B04Ec3fDB14c3BA13e25646b90f9](https://rinkeby.opensea.io/accounts/0x442778d63284B04Ec3fDB14c3BA13e25646b90f9)

Transactions hashes: 
* [0x0add1e2510300b2332cbd820181f18110c5092b73ee80cf104e3d63def82c0f1](https://rinkeby.etherscan.io/tx/0x64621effc00f79beb8274131c0c5109f976de764abcf6b55525f4643f67fac51)
* [0xa80b566e9a1e1358c6fa7048ded036aa30db56f5b8c21fe0db50712d7e4307aa](https://rinkeby.etherscan.io/tx/0xa80b566e9a1e1358c6fa7048ded036aa30db56f5b8c21fe0db50712d7e4307aa)
* [0xdf53f4168ecbc1d615d611ab5bcce96103876989661b4620ce1f3f69c34b4a24](https://rinkeby.etherscan.io/tx/0xdf53f4168ecbc1d615d611ab5bcce96103876989661b4620ce1f3f69c34b4a24)
* [0x6d66d6bd154f0f8185f38b40ebddc969f7a5aa13ff49e30ea2c9c8d79e2d0fdf](https://rinkeby.etherscan.io/tx/0x6d66d6bd154f0f8185f38b40ebddc969f7a5aa13ff49e30ea2c9c8d79e2d0fdf)
* [0x368a2e6c9b0b02a0fd29f0ee41e7beff73f630486748c65dfb7f6eaf3c34bf3c](https://rinkeby.etherscan.io/tx/0x368a2e6c9b0b02a0fd29f0ee41e7beff73f630486748c65dfb7f6eaf3c34bf3c)



## Contracts

[SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0x43adb4abd0307cdf84b583de9290d42dd75b5e21)<br>
[Verifier Contract](https://rinkeby.etherscan.io/address/0x4dABD6845DcD50D7B8f6ba09E235780F0AF83910)

## How to test

#### Install dependencies
```
npm install
```
#### Compile the contracts
```
cd eth-contracts
```
Create the .infurakey file (and set the infura key if you will deploy it to Rinkeby test network after the tests).<br>
Create the .secret file (and set the seed phrase if you will deploy it to Rinkeby test network after the tests).

```
truffle compile
```

#### Start Ganache on port 8545
#### Run the tests
```
truffle test
```
#### Deploy the contracts to Rinkeby test network

```
truffle migrate --network rinkeby
```

Contract artifacts including ABI can be found in `eth-contracts/build/contracts`

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
