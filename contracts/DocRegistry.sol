pragma solidity ^0.5.16;

contract DocRegistry {

  struct Doc {
      address sender;
      uint date;
      bytes32 hash;
  }

  mapping(bytes32 => Doc) registry;


  function storeHash(bytes32 _hash) external returns (bool) {
    registry[_hash].sender = msg.sender;
    registry[_hash].date = now;
    registry[_hash].hash = _hash;

    emit HashStored(msg.sender, _hash);

    return true;
  }

  event HashStored(address indexed _sender, bytes32 _hash);
}