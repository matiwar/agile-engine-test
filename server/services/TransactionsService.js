import AccountRepository from'../repositories/AccountRepository';
import Transaction from '../model/Transaction';

AccountRepository.createAccount('Test account', 0);

function getBalance () {
  const account = AccountRepository.getAccount(1);
  return {
    balance: account.balance,
  };
}

function getTransactions () {
  const account = AccountRepository.getAccount(1);

  return {
    transactions: account.transactions,
  };
}

function addTransaction (type, amount) {
  const account = AccountRepository.getAccount(1);
  account.changeLocked(true);
  try {
    const transaction = new Transaction(type, amount);
    account.addTransaction(transaction);
    account.changeLocked(false);
    return {
      transaction,
    }
  } catch(err) {
    account.changeLocked(false);
    throw err;
  }
}

module.exports = { getBalance, getTransactions, addTransaction };
