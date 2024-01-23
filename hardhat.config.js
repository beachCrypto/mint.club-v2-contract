require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('solidity-coverage');

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
           // NOTE: PUSH0 opcode is not supported on some L2s
           // - Reference: https://hardhat.org/hardhat-runner/docs/config#default-evm-version
          evmVersion: 'paris',
          optimizer: {
            enabled: true,
            runs: 50000
          }
        }
      },
      {
        version: '0.4.18', // For WETH mock contract
      }
    ]
  },
  networks: {
    mainnet: {
      url: process.env.RPC_MAINNET,
      chainId: 1,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    optimisticEthereum: {
      url: process.env.RPC_OPTIMISM,
      chainId: 10,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: process.env.RPC_ARBITRUM,
      chainId: 42161,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    base: {
      url: process.env.RPC_BASE,
      chainId: 8453,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    polygon: {
      url: process.env.RPC_POLYGON,
      chainId: 137,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    bsc: {
      url: process.env.RPC_BSC,
      chainId: 56,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    avalanche: {
      url: process.env.RPC_AVALANCHE,
      chainId: 43114,
      accounts: [process.env.MAINNET_PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.RPC_SEPOLIA,
      chainId: 11155111,
      accounts: [process.env.TEST_PRIVATE_KEY]
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 15,
    coinmarketcap: null // process.env.COIN_MARKET_CAP_API
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    // network list: npx hardhat verify --list-networks
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISM_ETHERSCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      base: process.env.BASESCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      avalanche: 'snowtrace'
    }
  }
};
