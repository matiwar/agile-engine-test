import Router from 'co-router';
import lock from '../middlewares/lock';
import TransactionsService from '../services/TransactionsService';

const router = Router();

let locked = false;

router.get('/', lock, (req, res) => {
  const response = TransactionsService.getTransactions();
  res.status(200).json(response);
});

router.get('/balance', lock, (req, res) => {
  const response = TransactionsService.getBalance();
  res.status(200).json(response);
});

router.post('/', lock, (req, res, next) => {
  const { type, amount } = req.body;
  const response = TransactionsService.addTransaction(type, amount);
  res.status(200).json(response);
});

module.exports = router;
