// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloBase {
    string public message = "Hello Base Network!";

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
