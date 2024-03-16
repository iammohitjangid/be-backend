const jwt = require('jsonwebtoken');
const config = require('config');

if (!config.has('jwt')) {
  throw new BadRequestError('jwt not found!');
}

const { adminJWTKey, userJWTKey, sessionTimeOut } = config.get('jwtConfig');

function sign(payload, isAdmin = false) {
  try {
    const token = jwt.sign(payload, isAdmin ? adminJWTKey : userJWTKey, {
      expiresIn: sessionTimeOut,
    });
    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function verify(payload, isAdmin = false) {
  try {
    return jwt.verify(payload, isAdmin ? adminJWTKey : userJWTKey);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  sign,
  verify,
};
