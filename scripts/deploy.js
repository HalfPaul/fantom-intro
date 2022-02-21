const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("SimpleToken");
  const token = await Token.deploy();

  console.log("Token deployed to: https://testnet.ftmscan.com/address/" + token.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
