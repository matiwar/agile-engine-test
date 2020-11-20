import AccountRepository from'../repositories/AccountRepository';
import Transaction from '../model/Transaction';

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
      account,
    }
  } catch(err) {
    account.changeLocked(false);
    throw err;
  }
}

module.exports = { getBalance, getTransactions, addTransaction };
