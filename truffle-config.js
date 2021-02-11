require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const web3 = new Web3();
const mnemonicPhrase = "";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    xdai: {
      provider: () =>
      new HDWalletProvider({
        mnemonic: {
          phrase: mnemonicPhrase
        },
        providerOrUrl: "https://dai.poa.network",
      }),
    gas: 12087782,
    gasPrice: 1000000000,
    network_id: 100,
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.12",
    },
  }
};
