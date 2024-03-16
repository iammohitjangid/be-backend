module.exports = async (err, req, res, next) => {
  const errorData = {
    date: new Date(),
    env: process.env.NODE_ENV,
    level: 'error',
    error: err?.response?.data,
    name: err.name,
    message: err.message,
    api: req.url,
    method: req.method,
    body: req.body,
    client: req.ip,
  };

  console.log('---------------   errorData ---------------');
  console.log(errorData);

  if (err instanceof APIError) {
    return res.status(err.status).send({
      success: false,
      type: 'error',
      message: err.message,
      data: {},
    });
  }

  if (err instanceof UnProcessableEntityError) {
    return res.status(err.status).send({
      success: false,
      type: 'error',
      message: err.message,
      data: {},
    });
  }

  if (err instanceof BadRequestError) {
    return res.status(err.status).send({
      success: false,
      type: 'error',
      message: err.message,
      data: errorData,
    });
  }

  if (err instanceof UnauthorizedError) {
    return res.status(err.status).send({
      success: false,
      type: 'error',
      message: err.message,
      data: {},
    });
  }

  if (err instanceof ConflictError) {
    return res.status(err.status).send({
      success: false,
      type: 'error',
      message: err.message,
      data: errorData,
    });
  }

  // connect all errors
  return res.status(500).send({
    success: false,
    type: 'error',
    message: 'Something went wrong!',
    data: errorData,
  });
};
