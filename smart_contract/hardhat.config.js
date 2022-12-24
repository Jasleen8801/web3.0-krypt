require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Go9ftHWK45ysTuYQaH9_gZXs2ov81MW6',
      accounts: [ 'eed2f764b35bc959f536f405e9af621011335f24359baccc65d90fac77d61069' ]
    }
  }
}
