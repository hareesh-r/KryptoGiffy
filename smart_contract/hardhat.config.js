// https://eth-goerli.g.alchemy.com/v2/VtC-eivdIEdvTqVIwcJPMouEaXyaujlB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity : '0.8.0',
  networks : {
    goerli : {
      url : 'https://eth-goerli.g.alchemy.com/v2/VtC-eivdIEdvTqVIwcJPMouEaXyaujlB',
      accounts : ['31c7c8d04df12c57277eada354f1a65d0386d08c6e6b9f3eebd040649f7bd40b']
    }
  }
}