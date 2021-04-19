// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SquareVerifier);
  await deployer.deploy(SolnSquareVerifier, "ERC721Token", "ERC721T", SquareVerifier.address);
};
