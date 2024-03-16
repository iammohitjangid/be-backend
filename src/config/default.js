const { JWT_KEY, SESSION_TIMEOUT, REFERESH_SESSION_TIMEOUT } = process.env;

module.exports = {
  API_PREFIX: "/api/v1",
  API_PREFIX_V2: "/api/v2",
  API_PREFIX_SECURE: "/secure/api/v1",
  API_PREFIX_V2_SECURE: "/secure/api/v2",
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,

  jwt: {
    key: JWT_KEY,
    sessionTimeout: SESSION_TIMEOUT,
    refreshSessionTimeout: REFERESH_SESSION_TIMEOUT,
  },
};
