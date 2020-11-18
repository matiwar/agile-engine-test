class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.transactions = [];
    this.locked = false;
  }
  
  addTransaction(transaction) {
    this.updateBalance(transaction);
    this.transactions.push(transaction);
  }

  updateBalance(transaction) {
    const { type, amount } = transaction;
    let newBalance = this.balance;

    switch (type) {
      case 'DEBIT':
        newBalance = newBalance - amount;
        if (newBalance < 0) {
          throw new Error("Account balance can't be lower than 0");
        }
        break;
      case 'CREDIT':
        newBalance = newBalance + amount;
        break;
      default:
        throw new Error("Invalid transaction type");
    }

    this.balance = newBalance;
  }

  changeLocked(value) {
    this.locked = value;
  }
}
  
module.exports = Account;