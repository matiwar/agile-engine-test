const AccountRepository = require('../repositories/AccountRepository');

module.exports = (req, res, next) => {
  const account = AccountRepository.getAccount(1);
  req.account = account;

  if (account.locked) { 
    res.status(423).send({
      message: 'Another transaction is being processed',
    });
  } else {
    next();
  }
};
  