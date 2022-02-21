const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Token", function () {
  it("Token supply should be correct", async function () {
    const Token = await ethers.getContractFactory("SimpleToken");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.totalSupply()).to.equal(ethers.utils.parseEther("100000"));
  });
});
