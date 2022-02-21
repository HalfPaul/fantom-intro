require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    ftmTestnet: {
      url: `https://rpc.testnet.fantom.network/`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  },
};
