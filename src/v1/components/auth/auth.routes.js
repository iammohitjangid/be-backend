const { adminLogin, userLogin } = require('../../../middleware');

module.exports = ({
  router,
  makeValidatorCallback,
  makeExpressCallback,
  validator,
  controller,
}) => {
  router.post(
    '/create-admin',
    adminLogin,
    makeValidatorCallback(validator.createUser),
    makeExpressCallback(controller.createUser)
  );
  router.get('/', userLogin, makeExpressCallback(controller.getUser));
  router.get('/admin', adminLogin, makeExpressCallback(controller.getUser));
  router.post(
    '/create-user',
    makeValidatorCallback(validator.createUser),
    makeExpressCallback(controller.createUser)
  );
  router.post(
    '/login',
    makeValidatorCallback(validator.login),
    makeExpressCallback(controller.login)
  );

  return router;
};
