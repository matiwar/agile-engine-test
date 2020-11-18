const AccountRepository = require('../repositories/AccountRepository');
const Transaction = require('../model/Transaction');

AccountRepository.createAccount('Test account', 0);

getBalance = () => {
  const account = AccountRepository.getAccount(1);
  return {
    balance: account.balance,
  };
}

getTransactions = () => {
  const account = AccountRepository.getAccount(1);

  return {
    transactions: account.transactions,
  };
}

addTransaction = (type, amount) => {
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
