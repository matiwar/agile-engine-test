class Transaction {
  constructor(type, amount) {
    if (amount <= 0) {
      throw new Error("Transaction amount must be greater than 0")
    }
    this.effectiveDate = new Date().toString()
    this.type = type;
    this.amount = amount;
  }
}
  
module.exports = Transaction;