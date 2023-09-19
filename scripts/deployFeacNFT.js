const hardhat = require("hardhat");

async function main() {
  const FeacNFT = await hardhat.ethers.getContractFactory("FeacNFT");
  const feacNFT = await FeacNFT.deploy();

  await feacNFT.waitForDeployment();

  console.log("FeacNFT deployed to:", feacNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
