pragma solidity >=0.4.21 <0.6.0;
import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract VerifierZ is Verifier {

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CapstoneERC721Token {

    VerifierZ public verifier;

// TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address addressSol;
    }

// TODO define an array of the above struct
 Solution[] private solutions;

// TODO define a mapping to store unique solutions submitted
 mapping (bytes32 => address) private uniqueSolutionsSubmitted;


// TODO Create an event to emit when a solution is added
event SolutionAdded(uint256 index, address verifierAddress);

    constructor (string memory name, string memory symbol, address verifierAddress)  CapstoneERC721Token(name, symbol) public
    {
        verifier = VerifierZ(verifierAddress);
    }


// TODO Create a function to add the solutions to the array and emit the event
function addSolution(uint256 index, address address_, bytes32 key) public {
        
        Solution memory solution = Solution ({
                                                index: index,
                                                addressSol: address_
                                            });

        solutions.push(solution);
        uniqueSolutionsSubmitted[key] = address_;
        emit SolutionAdded(index, address_);

    }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
function mintNFT(address to, uint256 index,  uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory inputs) public {
        
        // GenerateKey from solution inputs
        bytes32 solutionHash = keccak256(abi.encodePacked(a, b, c, inputs));
        
        require(verifier.verifyTx(a, b, c, inputs ), 'Solution is not correct');
        addSolution(index, to, solutionHash);

        super.mint(to, index);

    }

    function generateKey(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory inputs)  public pure returns(bytes32) {
        return keccak256(abi.encodePacked(a, b, c, inputs));
    }
  

}
























