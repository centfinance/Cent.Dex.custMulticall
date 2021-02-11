const custMulticall = artifacts.require('PoolState');

module.exports = function (deployer, network) {
    
    deployer.deploy(custMulticall);
};
