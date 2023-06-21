// const DocRegistry = artifacts.require("DocRegistry");

// module.exports = function(deployer) {
//   deployer.deploy(DocRegistry);
// };


const HashStorage = artifacts.require("HashStorage");

module.exports = function(deployer) {
  deployer.deploy(HashStorage);
};