# CryptoZombies

CryptoZombies smart contracts setup in a truffle project.

## Installation

Make sure truffle is globally installed. You will also need an Ethereum mnemonic key funded with ETH and an Infura API key.

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

`truffle compile` compiles the contracts.

`truffle test` runs tests.

`truffle migrate --network rinkeby` deploys the contracts to Rinkeby testnet.