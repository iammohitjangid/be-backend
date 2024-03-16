const mongoose = require('mongoose');
const dbs = require('../db/models');
const config = require('config');
if (!config.has('db')) {
  throw new InternalServerError('Database url not specified');
}
const db = config.get('db');
const { url } = db;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to db successfully!'))
  .catch((err) => {
    console.log(err);
    throw new Error('Failed to connect to database!');
  });
