//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Claim {

    address public owner;
    uint256 public activeClaimCounter = 0;
    uint256 public inactiveClaimCounter = 0;
    uint256 private claimCounter = 0;

    mapping(uint256 => address) public delClaimOf;
    mapping(uint256 => address) public authorOf;
    mapping(address => uint256) public claimsOf;

    enum Deactivated { NO, YES }

    struct ClaimStruct {
        uint256 claimId;
        string title;
        string description;
        address author;
        Deactivated deleted;
        uint256 created;
        uint256 updated;
    }

    ClaimStruct[] activeClaims;
    ClaimStruct[] inactiveClaims;

    event Action (
        uint256 claimId,
        string actionType,
        Deactivated deleted,
        address indexed executor,
        uint256 created
    );

    modifier ownerOnly(){
        require(msg.sender == owner, "Owner reserved only");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createClaim(
        string memory title,
        string memory description
    ) external returns (bool) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");

        claimCounter++;
        authorOf[claimCounter] = msg.sender;
        claimsOf[msg.sender]++;
        activeClaimCounter++;

        activeClaims.push(
            ClaimStruct(
                claimCounter,
                title,
                description,
                msg.sender,
                Deactivated.NO,
                block.timestamp,
                block.timestamp
            )
        );

        emit Action (
            claimCounter,
            "CLAIM CREATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

        return true;
    }

    function updateClaim(
        uint256 claimId,
        string memory title,
        string memory description
    ) external returns (bool) {
        require(authorOf[claimId] == msg.sender, "Unauthorized entity");
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");

        for(uint i = 0; i < activeClaims.length; i++) {
            if(activeClaims[i].claimId == claimId) {
                activeClaims[i].title = title;
                activeClaims[i].description = description;
                activeClaims[i].updated = block.timestamp;
            }
        }

        emit Action (
            claimId,
            "CLAIM UPDATED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

        return true;
    }

    function showClaim(
        uint256 claimId
    ) external view returns (ClaimStruct memory) {
        ClaimStruct memory claim;
        for(uint i = 0; i < activeClaims.length; i++) {
            if(activeClaims[i].claimId == claimId) {
                claim = activeClaims[i];
            }
        }
        return claim;
    }

    function getClaims() external view returns (ClaimStruct[] memory) {
        return activeClaims;
    }

    function getDeletedClaim() ownerOnly external view returns (ClaimStruct[] memory) {
        return inactiveClaims;
    }

    function deleteClaim(uint256 claimId) external returns (bool) {
        require(authorOf[claimId] == msg.sender, "Unauthorized entity");

        for(uint i = 0; i < activeClaims.length; i++) {
            if(activeClaims[i].claimId == claimId) {
                activeClaims[i].deleted = Deactivated.YES;
                activeClaims[i].updated = block.timestamp;
                inactiveClaims.push(activeClaims[i]);
                delClaimOf[claimId] = authorOf[claimId];
                delete activeClaims[i];
                delete authorOf[claimId];
            }
        }

        claimsOf[msg.sender]--;
        inactiveClaimCounter++;
        activeClaimCounter--;

        emit Action (
            claimId,
            "CLAIM DELETED",
            Deactivated.YES,
            msg.sender,
            block.timestamp
        );

        return true;
    }
    
    function restorDeletedClaim(
        uint256 claimId, 
        address author
    ) ownerOnly external returns (bool) {
        require(delClaimOf[claimId] == author, "Unmatched Author");

        for(uint i = 0; i < inactiveClaims.length; i++) {
            if(inactiveClaims[i].claimId == claimId) {
                inactiveClaims[i].deleted = Deactivated.NO;
                inactiveClaims[i].updated = block.timestamp;

                activeClaims.push(inactiveClaims[i]);
                delete inactiveClaims[i];
                authorOf[claimId] = delClaimOf[claimId];
                delete delClaimOf[claimId];
            }
        }

        claimsOf[author]++;
        inactiveClaimCounter--;
        activeClaimCounter++;

        emit Action (
            claimId,
            "CLAIM RESTORED",
            Deactivated.NO,
            msg.sender,
            block.timestamp
        );

        return true;
    }
}