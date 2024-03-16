const { adminLogin, pagination } = require('../../../middleware');
const { userLogin } = require('../../../middleware');
module.exports = ({
  router,
  makeValidatorCallback,
  makeExpressCallback,
  validator,
  controller,
}) => {
  router.get(
    '/user',
    userLogin,
    pagination,
    // makeValidatorCallback(validator.getUserCart),
    makeExpressCallback(controller.getUserCart)
  );
  router.get(
    '/admin',
    adminLogin,
    pagination,
    makeValidatorCallback(validator.getCarts),
    makeExpressCallback(controller.getCarts)
  );
  router.post(
    '/add-to-cart',
    userLogin,
    makeValidatorCallback(validator.addToCart),
    makeExpressCallback(controller.addToCart)
  );
  router.post(
    '/remove-from-cart',
    userLogin,
    makeValidatorCallback(validator.removeFromCart),
    makeExpressCallback(controller.removeFromCart)
  );

  return router;
};
