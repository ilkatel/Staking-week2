import * as dotenv from "dotenv";

import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ERCTOKEN__factory, STAKING__factory } from "../typechain";

dotenv.config();

let signer: SignerWithAddress;
let otherAccount: SignerWithAddress;
let factory: Contract;
let router: Contract;
let uniswap: Contract;
let staking: Contract;
let bnt: Contract;
let cnt: Contract;
let pair: string;
const zeroAddress = ethers.constants.AddressZero;

async function sleep(duration: number) {
  const now = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
  await ethers.provider.send("evm_mine", [now + duration]);
}

/*
describe("CREATING LIQUIDITY TESTS", function () {
  beforeEach(async function () {
    [signer, otherAccount] = await ethers.getSigners();
    factory = await ethers.getContractAt("IUniswapV2Factory", process.env.FACTORY as string);
    router = await ethers.getContractAt("IUniswapV2Router02", process.env.ROUTER as string);
  });

  it("Pool created and mint successfull", async function () {
    bnt = await new ERCTOKEN__factory(signer).deploy("Banana Token", "BNT", 18);
    await bnt.deployed();

    cnt = await new ERCTOKEN__factory(signer).deploy("Coconut Token", "CNT", 18);
    await cnt.deployed();

    pair = await factory.getPair(bnt.address, cnt.address);
    // Zero pair address if pair non-existent
    expect(pair).to.be.eq(zeroAddress);

    await bnt.mint(signer.address, ethers.utils.parseEther("100"));
    await cnt.mint(signer.address, ethers.utils.parseEther("10"));
    await bnt.approve(router.address, ethers.utils.parseEther("100"));
    await cnt.approve(router.address, ethers.utils.parseEther("10"));

    await router.addLiquidity(
      bnt.address,
      cnt.address,
      ethers.utils.parseEther("100"),
      ethers.utils.parseEther("10"),
      100,
      100,
      signer.address,
      1000000000000
    );

    pair = await factory.getPair(bnt.address, cnt.address);
    uniswap = await ethers.getContractAt("IUniswapV2Pair", pair);

    // Successfully getting lp tokens if pool created
    expect(await uniswap.balanceOf(signer.address)).to.eq("31622776601683792319");

    // Zero lp tokens if pool not created
    expect(await uniswap.balanceOf(otherAccount.address)).to.be.eq("0");

    staking = await new STAKING__factory(signer).deploy("Reward Token", "RWT", 18, 20, 1, 1, uniswap.address);
    await staking.deployed();
    
    const amount = 100;
    await uniswap.approve(staking.address, amount);
    await expect(async () => await staking.stake(amount))
      .to.changeTokenBalances(uniswap, [signer, staking], [-amount, amount]);
  });
});
*/

describe("STAKING CONTRACT TESTS", function () {
  beforeEach(async function () {
    [signer, otherAccount] = await ethers.getSigners();
    factory = await ethers.getContractAt("IUniswapV2Factory", process.env.FACTORY as string);
    router = await ethers.getContractAt("IUniswapV2Router02", process.env.ROUTER as string);

    bnt = await new ERCTOKEN__factory(signer).deploy("Banana Token", "BNT", 18);
    await bnt.deployed();

    cnt = await new ERCTOKEN__factory(signer).deploy("Coconut Token", "CNT", 18);
    await cnt.deployed();

    await bnt.mint(signer.address, ethers.utils.parseEther("100"));
    await cnt.mint(signer.address, ethers.utils.parseEther("10"));
    await bnt.approve(router.address, ethers.utils.parseEther("100"));
    await cnt.approve(router.address, ethers.utils.parseEther("10"));

    await router.addLiquidity(
      bnt.address,
      cnt.address,
      ethers.utils.parseEther("100"),
      ethers.utils.parseEther("10"),
      100,
      100,
      signer.address,
      1000000000000
    );

    pair = await factory.getPair(bnt.address, cnt.address);
    uniswap = await ethers.getContractAt("IUniswapV2Pair", pair);

    staking = await new STAKING__factory(signer).deploy("Reward Token", "RWT", 18, 20, 20*60, 10*60, uniswap.address);
    await staking.deployed();
  });

  it("Testing require functions", async function () {
    await expect(staking.stake(0)).to.be.revertedWith("Cant stake zero value!");
    await expect(staking.stake(1)).to.be.reverted;
    await expect(staking.claim()).to.be.revertedWith("You not staking tokens!");
    await expect(staking.unstake()).to.be.revertedWith("You not staking tokens!");
  });

  it("Stake test", async function () {
    const amount = 100_000_000;
    await uniswap.approve(staking.address, amount);
    // Stake change balances
    await expect(async () => await staking.stake(amount))
      .to.changeTokenBalances(uniswap, [signer, staking], [-amount, amount]);
    // Nothing claim yet
    await expect(async () => await staking.claim())
      .to.changeTokenBalance(staking, signer, 0);
    await sleep(600);
    // Claim reward tokens
    await expect(async () => await staking.claim())
      .to.changeTokenBalance(staking, signer, 20000000);
  });

  it("Unstake test", async function () {
    const amount = 100_000_000;
    await uniswap.approve(staking.address, amount);
    await staking.stake(amount);
    // Cant unstake yet
    await expect(staking.unstake()).to.be.revertedWith("Cant unstake tokens yet!");
    await sleep(1200);
    // Unstake change balances
    await expect(async () => await staking.unstake())
      .to.changeTokenBalances(uniswap, [signer, staking], [amount, -amount]);
  });

  it("Update settings test", async function () {
    await staking.updateStaking(10, 10, 10);
    // Update variables successfully
    expect(await staking.freezing()).to.be.eq(10);
    expect(await staking.interval()).to.be.eq(10);
    expect(await staking.percent()).to.be.eq(10);
  });
});

describe("ERC20 Token test", async () => {
  beforeEach(async function () {
    staking = await new STAKING__factory(signer).deploy("Reward Token", "RWT", 18, 20, 1, 1, zeroAddress);
    await staking.deployed();
  });

  it("SHOULD BE SUCCESS  | get dufault args", async function () {
    expect(await staking.name()).to.be.eq("Reward Token");
    expect(await staking.symbol()).to.be.eq("RWT");
    expect(await staking.totalSupply()).to.be.eq(0);
    expect(await staking.decimals()).to.be.eq(18);
  });

  it("SHOULD BE REVERTED | try mint to zero address", async function () {
    await expect(staking.mint(zeroAddress, 200)).to.be.revertedWith("Cant mint to zero address");
  });

  it("SHOULD BE REVERTED | try burn from zero address", async function () {
    await expect(staking.burn(zeroAddress, 200)).to.be.revertedWith("Cant burn from zero address");
  });

  it("SHOULD BE REVERTED | try burn out of balance", async function () {
    await expect(staking.burn(otherAccount.address, 200)).to.be.revertedWith("Amount out of balance");
  });

  it("SHOULD BE REVERTED | not signer try mint or burn", async function () {
    await expect(staking.connect(otherAccount).burn(signer.address, 200)).to.be.revertedWith("You are not an owner");
    await expect(staking.connect(otherAccount).mint(signer.address, 200)).to.be.revertedWith("You are not an owner");
  });

  it("SHOULD BE SUCCESS  | mint and burn change balance", async function () {
    await staking.mint(signer.address, 200);
    expect(await staking.balanceOf(signer.address)).to.be.eq(200);

    await staking.burn(signer.address, 100);
    expect(await staking.balanceOf(signer.address)).to.be.eq(100);
  });
});

describe("ERC20 Token test | step 2", async () => {
  beforeEach(async function () {
    staking = await new STAKING__factory(signer).deploy("Reward Token", "RWT", 18, 20, 1, 1, zeroAddress);
    await staking.deployed();

    await staking.mint(signer.address, 100_000);
  });

  it("SHOULD BE REVERTED | try to transfer to the null address", async function () {
    await expect(staking.transfer(zeroAddress, 100))
      .to.be.revertedWith("Cannot transfer to the null address");
  });

  it("SHOULD BE REVERTED | try to transfer from null address", async function () {
    await expect(staking.transferFrom(zeroAddress, otherAccount.address, 200))
      .to.be.revertedWith("Cannot transfer from the null address");
  });

  it("SHOULD BE REVERTED | try to transfer out of balance", async function () {
    await expect(staking.transfer(otherAccount.address, 100_000_000))
      .to.be.revertedWith("Cannot transfer out of balance")
  });

  it("SHOULD BE SUCCESS  | correctly transfer", async function () {
    await staking.transfer(otherAccount.address, 100);
    expect(await staking.balanceOf(otherAccount.address)).to.be.eq(100);
  });

  it("SHOULD BE REVERTED | try to approve to the null address", async function () {
    await expect(staking.approve(zeroAddress, 100))
      .to.be.revertedWith("Cannot approve to the null address");
  });

  it("SHOULD BE SUCCESS  | approve changed allowance", async function () {
    await staking.approve(otherAccount.address, 100);
    expect(await staking.allowance(signer.address, otherAccount.address)).to.be.eq(100);
  });

  it("SHOULD BE REVERTED | try to spend out of allowance", async function () {
    await staking.approve(otherAccount.address, 100);
    await expect(staking.connect(otherAccount).transferFrom(signer.address, otherAccount.address, 200))
      .to.be.revertedWith("Cannot spend out of allowance");
  });

  it("SHOULD BE REVERTED | try to transfer null value", async function () {
    await expect(staking.transfer(otherAccount.address, 0))
      .to.be.revertedWith("Cannot transfer null value");
  });

  it("SHOULD BE SUCCESS  | transfer from", async function () {
    await staking.approve(otherAccount.address, 100);
    await staking.connect(otherAccount).transferFrom(signer.address, otherAccount.address, 100);
    expect(await staking.balanceOf(otherAccount.address)).to.be.eq(100);
  });
});