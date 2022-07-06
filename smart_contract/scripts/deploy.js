// const main = async  () => {

//   const Transactions = await hre.ethers.getContractFactory("Transactions");
//   const transactions = await Transactions.deploy();

//   await transactions.deployed();

//   console.log("Transactions deployed to:", transactions.address);
// }

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

// runMain();


const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();