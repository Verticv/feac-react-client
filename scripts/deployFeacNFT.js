const hre = require("hardhat");

async function main() {
  const FeacNFT = await hre.ethers.getContractFactory("FeacNFT");
  const feacNFT = await FeacNFT.deploy();

  await feacNFT.deployed();

  console.log("FeacNFT deployed to:", feacNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
