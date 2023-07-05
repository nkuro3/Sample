require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      chainId: 5,
      url: `https://goerli.blockpi.network/v1/rpc/public`,
      accounts: [
        process.env.DEV_ACCOUNT_PRIVATE_KEY ||
          "0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY || "",
    },
  },
};
