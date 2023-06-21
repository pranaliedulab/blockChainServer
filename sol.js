const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
const contractAddress = "0xc853a2D471aF65420b91Bee446d10ca1Ed4A035a";
const contractABI = [
    {
      constant: true,
      inputs: [],
      name: 'storedHash',
      outputs: [Array],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xb0da5195'
    },
    {
      constant: false,
      inputs: [Array],
      name: 'storeHash',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x7fe88885'
    },
    {
      constant: true,
      inputs: [],
      name: 'getStoredHash',
      outputs: [Array],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xe7db7a75'
    }
  ];

  const accounts =web3.eth.getAccounts();
  console.log("Acc", accounts);
const contract = new web3.eth.Contract(contractABI, contractAddress);
const hash = "0x644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938";
contract.methods.storeHash(hash).send({ from: "0x2f85Ae0901C953106Ba92B594eA292e8eaC04869", gas: 1000000 }); 
console.log("Hash@@@@@",hash);