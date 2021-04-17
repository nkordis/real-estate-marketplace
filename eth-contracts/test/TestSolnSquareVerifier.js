const Verifier = artifacts.require('Verifier')
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
const proofZokrates = require('../../zokrates/code/square/proof.json');

contract('TestSolnSquareVerifier', accounts => {
    
    const owner = accounts[0]
    const account_two = accounts[1]
    const name = "ERC721Token"
    const symbol = "ERC721T"
    let tokenId = 1

    beforeEach(async function() {

        this.verifier = await Verifier.new({from: owner})
        this.contract = await SolnSquareVerifier.new(name, symbol, this.verifier.address, {from: owner})
    })
    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Should add a new solution', async function (){

        // Generate a solution key
        let key = await this.contract.generateKey.call(proofZokrates.proof.a,  proofZokrates.proof.b,  proofZokrates.proof.c, proofZokrates.inputs)
        let tx = await this.contract.addSolution(tokenId, owner, key)
        assert.equal(tx.logs[0].event, "SolutionAdded", 'Solution could not be added')

    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Should mint a new ERC721 token', async function (){

        let totalSupplyBefore = (await this.contract.totalSupply.call()).toNumber()
        await this.contract.mintNFT(account_two, tokenId, proofZokrates.proof.a,  proofZokrates.proof.b,  proofZokrates.proof.c, proofZokrates.inputs, {from: owner})
        let totalSupplyAfter = (await this.contract.totalSupply.call()).toNumber()
        let tokenBalance = (await this.contract.balanceOf.call(account_two)).toNumber()
        let tokenURI = await this.contract.tokenURI.call(tokenId)

        assert.equal(totalSupplyAfter, totalSupplyBefore + 1, ' Incorrect total supply')
        assert.equal(tokenBalance,  1, 'Incorrect balance')
        assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Token URI is invalid")

    })

})
