import { ethers } from "hardhat";
import { ERCTOKEN__factory } from "../typechain";

async function dep() {
  const [owner] = await ethers.getSigners();
  const bnt = await new ERCTOKEN__factory(owner).deploy(
    "Banana Token",
    "BNT",
    18
  );
  await bnt.deployed();
  console.log("BNT deployed to:", bnt.address);

  const cnt = await new ERCTOKEN__factory(owner).deploy(
    "Coconut Token",
    "CNT",
    18
  );
  await cnt.deployed();
  console.log("CNT deployed to:", cnt.address);
}

dep().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
