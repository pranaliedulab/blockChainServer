pragma solidity ^0.5.16;

contract HashStorage {
    bytes32 public storedHash;
    function storeHash(bytes32 hash) public {
        storedHash = hash;
    }
    function getStoredHash() public view returns (bytes32) {
        return storedHash;
    }
 }

// contract HashStorage {
//    uint public x=10;
//    function set(uint _x)public{
//        x=_x;
   

//      function getVal() public view returns (uint) {
//        return x;
//     }
  
// }