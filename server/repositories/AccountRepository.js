import Account  from '../model/Account';

let account;

function createAccount (name, balance) {
  account = new Account(1, name, balance);
  return account;
}

function getAccount (id) {
  return account;
}

function addTransaction (transaction) {
  account.addTransaction(transaction);

  return {
    transaction,
  }
}

module.exports = { createAccount, getAccount, addTransaction };
