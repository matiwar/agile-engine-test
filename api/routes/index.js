const express = require('express');
const logger = require('../utils/logger');

const api = express();

api.use('/transactions', require('./TransactionsRoutes'));

// eslint-disable-next-line
api.use((err, req, res, next) => {
  logger.error(err);

  res.status(err.status || 500).json({
    message: err.message,
  });
});


module.exports = api;
