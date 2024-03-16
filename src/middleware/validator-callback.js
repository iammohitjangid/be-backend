module.exports = (validator) => (req, res, next) => {
  let httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
  };

  const { error } = validator(httpRequest);
  if (error) throw new BadRequestError(error.message);
  return next();
};
