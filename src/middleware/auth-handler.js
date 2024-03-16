const { verify } = require('../utils/jwt');
//const db = require("../db/models");

module.exports.userLoggedIn = async (req, res, next) => {
  try {
    const { headers } = req;
    if (!headers || !headers.authorization) {
      throw new BadRequestError('headers not provided!');
    }
    const token = headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedError(`Unauthorized access! Please login`);
    }
    // check for revoke token
    const decoded = await verify(token);
    req.userId = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw new UnauthorizedError(`Token is Expired`);
    } else if (err.name === 'JsonWebTokenError') {
      throw new UnauthorizedError(`Invalid token`);
    }
    throw err;
  }
};
module.exports.adminLoggedIn = async (req, res, next) => {
  try {
    const { headers } = req;
    if (!headers || !headers.authorization) {
      throw new BadRequestError('headers not provided!');
    }
    const token = headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedError(`Unauthorized access! Please login`);
    }
    const decoded = await verify(token, true);
    req.userId = decoded;

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw new UnauthorizedError(`Token is Expired`);
    } else if (err.name === 'JsonWebTokenError') {
      throw new UnauthorizedError(`Invalid token`);
    }
    throw err;
  }
};
