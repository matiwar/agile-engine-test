import express from 'express'
import path from 'path'
import fs from 'fs';
import view from '../src/view'
import config from './config';
import AccountRepository from'./repositories/AccountRepository';

const app = express()
const router = express.Router()

const initialState = {
  account: AccountRepository.getAccount(1),
};

const serverRenderer = (req, res, next) => {
  const { preloadedState, content }  = view(initialState)
  fs.readFile(path.resolve('./src/public/index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>`
      ).replace('<script></script>',
      `<script>window.__STATE__ = ${JSON.stringify(preloadedState)}</script>`)
    )
  })
};

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));
router.use('^/$', serverRenderer);
router.use('/api', require('./routes'));
router.use('/ping', require('express-healthcheck')());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
});