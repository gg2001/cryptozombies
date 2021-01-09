# CryptoZombies in a Truffle project

The contracts from the [CryptoZombies](https://cryptozombies.io/) tutorial setup in a [Truffle](https://www.trufflesuite.com/truffle) project. I've updated some of the contracts to the latest Solidity syntax.

## Installation

Make sure [Truffle](https://www.trufflesuite.com/truffle) is globally installed (`npm install truffle -g`). You will also need an Ethereum mnemonic key funded with some ETH and an [Infura](https://infura.io/) API key.

Put the Infura API key in `.env` like this:

```
INFURA_KEY=YOUR_INFURA_KEY
```

And put your Ethereum mnemonic key in `.secret` like this:

```
YOUR_ETHEREUM_KEY
```

Then run:

```
yarn
```

To install all the Node modules.

## Usage

`truffle compile` compiles the contracts.

`truffle test` runs tests.

`truffle migrate --network rinkeby` deploys the contracts to Rinkeby testnet.