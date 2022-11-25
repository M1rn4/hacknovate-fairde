# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# For the Hacknovate 4.0



Create the project:
```shell
npm init --yes
```

We need to add hardhat to the project:

```shell
npm install --save-dev hardhat
```

In the same directory where we installed Hardhat we need to run:

```shell
npx hardhat
```

We ned to select "yes" for all questions

Now, install dotenv tool:

```shell
npm install dotenv --save
```

We need to create the .env file with the follow parameters:

API_URl : Find this value from Alchemy App settings
PRIVATE_KEY : from metamask account (use dev account)
ALCHEMY_API_KEY  : Find this value from Alchemy App settings
CONTRACT_ADDRESS : After we deploy the contyract, we need to set the address of the deployed smart contract.

Edit /hardhat.config.js for deploty the smart contract

Create or edit /scripts/deploy.js

compile the code, we need to run:

```shell
npx hardhat compile
```

Deploy the code to the Polygon testnet (Mumbay)

```shell
npx hardhat run scripts/deploy.js --network mumbai
```

We will have a result dsimilar to this:

Claim deployed to: 0x326825c9077f9D475433a72c32B363E3d0A924f8


Create the tes program for Claim (scripts/test-claim.js)

Execute the test program:

npx hardhat run scripts/test-claim.js --network mumbai








