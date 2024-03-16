exports.pagination = async (req, res, next) => {
  const pagination = {
    limit: req.query.limit ? parseInt(req.query.limit) : 10,
    offset: req.query.page
      ? parseInt(
          (req.query.page - 1) *
            (req.query.limit ? parseInt(req.query.limit) : 10)
        )
      : 0,
  };
  req.paginate = pagination;
  //delete req.query.limit;
  //delete req.query.page;
  next();
};
