const {
  TEST_DB_CONNECTION_URL,
  USER_JWT_KEY,
  ADMIN_JWT_KEY,
  SESSION_TIMEOUT,
  NODE_ENV,
} = process.env;

module.exports = {
  Environment: {
    environmentKey: NODE_ENV,
  },
  db: {
    url: TEST_DB_CONNECTION_URL,
  },

  jwtConfig: {
    userJWTKey: USER_JWT_KEY,
    adminJWTKey: ADMIN_JWT_KEY,
    sessionTimeOut: SESSION_TIMEOUT,
  },
};
