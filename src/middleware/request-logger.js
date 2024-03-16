module.exports = async (req, res, next) => {
  console.log('--------- req.body logging ---------------');
  console.log(req.body);

  const requestLog = {
    date: new Date(),
    logType: 'REQUEST_LOG',
    env: process.env.NODE_ENV,
    level: 'info',
    api: req.url,
    method: req.method,
    body: req.body,
    client: req.ip,
  };
  console.log('log.error(requestLog)------------------');
  console.log(requestLog);

  next();
};
