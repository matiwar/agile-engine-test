import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import config from '../config';

const app = express()
const router = express.Router()

const initialState = {
  name: 'Mati',
};

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App { ...initialState } />)}</div>`
      )
    )
  })
};

router.use('^/$', serverRenderer);
router.use('/api', require('./routes'));

router.use(express.static(path.resolve(__dirname, '..', 'build')));
router.use('/ping', require('express-healthcheck')());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
});