const ethers = require('ethers');
require('dotenv').config();
const Escrow = require('../app/src/artifacts/contracts/Escrow.sol/Escrow.json');
async function main() {
    const url = process.env.SEPOLIA_URL;

    const provider = new ethers.providers.JsonRpcProvider(url);
    let privateKey = process.env.PRIVATE_KEY;

    let wallet = new ethers.Wallet(privateKey, provider);
      const factory = new ethers.ContractFactory(
      Escrow.abi,
      Escrow.bytecode,
      wallet
      );
  
    const deployedEscrow = await factory.deploy(arbiter, beneficiary, { value });
    console.log("Escrow deployed at address:", deployedEscrow.address);
  await deployedEscrow.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});