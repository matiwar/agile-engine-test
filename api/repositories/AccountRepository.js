const Account = require('../model/Account');

let account;

createAccount = (name, balance) => {
  account = new Account(1, name, balance);
  return account;
}

getAccount = (id) => {
  return account;
}

addTransaction = (transaction) => {
  account.addTransaction(transaction);

  return {
    transaction,
  }
}

module.exports = { createAccount, getAccount, addTransaction };
