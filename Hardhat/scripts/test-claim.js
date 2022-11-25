const hre = require("hardhat");
const ContractJson = require("../artifacts/contracts/Claim.sol/Claim.json");


// The ABI is the interface to the contract. It is used to call the contract's functions.
const abi = ContractJson.abi;

async function main() {

    const alchemy = new hre.ethers.providers.AlchemyProvider(
        'maticmum',
        process.env.ALCHEMY_API_KEY
    );

    const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, alchemy);

    // Get the deployed contract. We need booth the specific CONTRACT_ADDRESS and the ABI.
    const Claim = new hre.ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        abi,
        userWallet
    );

    const setTx1 = await Claim.createClaim("Claim 1", "This is the first Claim");
    await setTx1.wait();
    console.log("Claim: " + await Claim.getClaims());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

