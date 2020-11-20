import React from "react";
import { useSelector } from "react-redux";
import './Account.css';
import AddTransaction from "../AddTransaction";
import TransactionsList from "../TransactionsList";

const Component = () => {
  const account = useSelector(state => state.account);
  const { balance } = account;

  return (
    <div className="account">
      <h1 className="account-name">{account.name}</h1>
      <p className="balance">( ${balance} )</p>

      <div className="container">
        <AddTransaction />
        <TransactionsList />
      </div>
    </div>
  );
};

export default Component;