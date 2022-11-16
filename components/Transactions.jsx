import React, { useContext } from "react";
import { TransactionContext } from "../context/Transaction";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({ addressTo, addressFrom, amount, index }) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <h1 className="text-white text-xl ">{index + 1}.</h1>
          <p className="text-white text-base">
            From: {shortenAddress(addressFrom)}
          </p>

          <p className="text-white text-base">
            To: {shortenAddress(addressTo)}
          </p>

          <p className="text-white text-base">Amount: {amount} ETH</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex flex-col md:p-12 py-12 px-4">
      {currentAccount ? (
        <h3 className="text-white text-3xl text-center my-2">
          Latest Transactions
        </h3>
      ) : (
        <h3 className="text-white text-3xl text-center my-2">
          Connect your account to see the latest transactions
        </h3>
      )}
      <div className="flex flex-wrap justify-center items-center mt-10">
        {transactions.reverse().map((transaction, i) => (
          <TransactionCard key={i} {...transaction} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
