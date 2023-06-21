// const Web3 = require('web3'); 
// const fetch = require('node-fetch'); 
// const web3 = new Web3('YOUR_INFURA_PROJECT_ID_OR_WEB3_PROVIDER'); 
// const contractAddress = 'YOUR_CONTRACT_ADDRESS';
// const contractABI = require('YOUR_CONTRACT_ABI'); 
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// async function callContract() {
//  try { 
//  const response = await fetch('YOUR_API_ENDPOINT');
//  const data = await response.json(); // Call the Solidity contract function using the Web3 library 
//  const result = await contract.methods.yourFunction(data).send({ from: 'YOUR_ACCOUNT_ADDRESS' });       
//  console.log(result); 
// } catch (error) { 
//    console.error(error); 
// } 
// } 
// callContract(); 



const Web3 = require('web3');
const crypto = require('crypto');
const fs = require('fs');
const web3 = new Web3('YOUR_INFURA_PROJECT_ID_OR_WEB3_PROVIDER');
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = require('YOUR_CONTRACT_ABI');
const contract = new web3.eth.Contract(contractABI, contractAddress);
const moment = require('moment');

async function generateAndStoreHash() {
  try {
    // Read the PDF file into a buffer
    const buffer = fs.readFileSync('YOUR_PDF_FILE_PATH');
    // Compute the hash of the buffer
    const hash = crypto.createHash('sha256').update(buffer).digest('hex');

    // Call the Solidity contract function to store the hash
    const result = await contract.methods.storeHash(hash).send({ from: 'YOUR_ACCOUNT_ADDRESS', gas: '1000000' });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
generateAndStoreHash();
