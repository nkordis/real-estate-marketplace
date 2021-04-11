var ERC721MintableComplete = artifacts.require('CapstoneERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const name = "RealEstetToken"
    const symbol = "RET"

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});

            // TODO: mint multiple tokens
        })

        it('should return total supply', async function () { 
            
        })

        it('should get token balance', async function () { 
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
        })

        it('should transfer token from one owner to another', async function () { 
            
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