import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';

export default async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );

  const deployedEscrow = await factory.deploy(arbiter, beneficiary, { value });
  console.log("Escrow deployed at address:", deployedEscrow.address);
  await deployedEscrow.deployed();
  return deployedEscrow;
}
