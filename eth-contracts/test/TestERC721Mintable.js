var ERC721MintableComplete = artifacts.require('CapstoneERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const name = "RealEstetToken"
    const symbol = "RET"

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});

            // mint multiple tokens
            for(let i = 1; i < 6; i++){
                await this.contract.mint(account_two, i, {from: account_one})
            }
            
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply.call();
			
			assert.equal(totalSupply, 5, "Total supply should be  5");
        })

        it('should get token balance', async function () { 
            const tokenBalance = await this.contract.balanceOf.call(account_two);
			
			assert.equal(parseInt(tokenBalance, 10), 5, "The token balance should be 5")
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenURI = await this.contract.tokenURI.call(4);
			
			assert.equal(tokenURI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4', "Token uri is not correct")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_one, 1, {from: account_two});
			const newOwner = await this.contract.ownerOf.call(1);
			assert.equal(newOwner, account_one, "Token ownership was not transferred");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(name, symbol,{from: account_one});
        })


        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner.call()
            assert.equal(owner, account_one, 'Invalid contract owner')
        })

        it('should not be able to transfer the ownership if the caller is not the contract owner', async function () { 
            try{
            await this.contract.transferOwnership(account_two, {from: account_two});
            }catch{}
            assert.equal(await this.contract.getOwner.call(), account_one, "Anothorized caller changed the ownership");
        })

        it('should be able to transfer ownership to a new owner', async function () {
            await this.contract.transferOwnership(account_two, {from: account_one});
            assert.equal(await this.contract.getOwner.call(), account_two, "Could not transfer the ownership");
        });

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;

            try {
                await this.contract.mint(account_two, 1, {from: account_two});
            } catch {
                failed = true;
            }
    
            assert.equal(failed, true, "Should not be able to mint. Address is not the contract owner");
        })


    });
})