var someContract = artifacts.require("someContract.sol");
var BN = web3.utils.BN;
require("dotenv").config({ path: "../.env" });

module.exports = async function (deployer) {
	let addr = await web3.eth.getAccounts();
	await deployer.deploy(someContract);
};
