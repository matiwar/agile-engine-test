const app = require('express')();
const compress = require('compression');
const bodyParser = require('body-parser');

const logger = require('./api/utils/logger');
const config = require('./config');

const PORT = config.port;
const BASEPATH = config.basePath;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());

app.get(`${BASEPATH}ping`, require('express-healthcheck')());

app.use(`${BASEPATH}`, require('./api/routes'));


app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}.`);
});
