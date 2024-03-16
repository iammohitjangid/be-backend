function load(router) {
  require('./config');
  require('./database');

  return {
    routes: require('./v1/routes')(router),
  };
}

module.exports = load;
