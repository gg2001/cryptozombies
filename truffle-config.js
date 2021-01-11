require('dotenv').config();
const fs = require('fs');

const HDWalletProvider = require("truffle-hdwallet-provider");

// Set your own mnemonic here
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = process.env.INFURA_KEY;

// Module exports to make this configuration available to Truffle itself
module.exports = {
  // Object with configuration for each network
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/" + infuraKey)
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infuraKey)
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }
  }
};