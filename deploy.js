async function main() {
  const Contract = await ethers.getContractFactory("HelloBase");
  const c = await Contract.deploy();
  await c.deployed();
  console.log("HelloBase deployed at:", c.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
