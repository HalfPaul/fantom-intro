// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
    constructor() public ERC20("FantomToken", "FT") {
        _mint(msg.sender, 100000000000000000000000);
    }
}
