module.exports = (controller) => async (req, res) => {
  let httpRequest = '';

  httpRequest = {
    body: req.body,
    query: req.query,
    files: req.files,
    file: req.file,
    params: req.params,
    ip: req.ip,
    method: req.method,
    files: req.files,
    path: req.path,
    paginate: req.paginate,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Authorization: req.get('Authorization'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
    userId: req.userId,
  };
  const httpResponse = await controller(httpRequest);

  if (httpResponse.headers) {
    httpResponse.headers['ngrok-skip-browser-warning'] = 'skip-browser-warning';
    res.set(httpResponse.headers);
    httpResponse.body.data.xlsx.write(httpResponse);
    return res.status(httpResponse.statusCode).end();
  }

  if (httpResponse.headers) res.set(httpResponse.headers);
  return res.status(httpResponse.statusCode).send(httpResponse.body);
};
