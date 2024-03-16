const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

require('express-async-errors');
const router = express.Router();
require('../src/utils/api-errors');

require('dotenv').config();

const config = require('config');

require('../src/config/validate');

const { API_PREFIX, API_PREFIX_V2 } = config;
global.config = config;

app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

const {
  errorHandler,
  badJsonHandler,
  requestLog,
} = require('../src/middleware');

const { routes } = require('./loaders')(router);

app.use(badJsonHandler);

app.use(requestLog);
app.use(API_PREFIX, routes);

app.use(errorHandler);

module.exports = app;
