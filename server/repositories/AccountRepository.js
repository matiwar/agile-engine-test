import Account  from '../model/Account';

let account;

function createAccount(name, balance) {
  account = new Account(1, name, balance);
  return account;
}

function getAccount(id) {
  return account || createAccount('Test account', 0);
}

function addTransaction(transaction) {
  account.addTransaction(transaction);

  return {
    transaction,
  }
}

module.exports = { createAccount, getAccount, addTransaction };
