const authCallback = require('./auth-handler');
const makeExpressCallback = require('./express-callback');
const makeValidatorCallback = require('./validator-callback');
const errorHandler = require('./error-handler');
const badJsonHandler = require('./bad-json-handler');
const notFoundHandler = require('./not-found-error');
const requestLog = require('./request-logger');
const { pagination } = require('./pagination');

module.exports = {
  userLogin: authCallback.userLoggedIn,
  adminLogin: authCallback.adminLoggedIn,
  makeExpressCallback,
  makeValidatorCallback,
  errorHandler,
  badJsonHandler,
  notFoundHandler,
  requestLog,
  pagination,
};
