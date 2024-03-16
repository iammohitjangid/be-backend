const { adminLogin, userLogin, pagination } = require('../../../middleware');
module.exports = ({
  router,
  makeValidatorCallback,
  makeExpressCallback,
  validator,
  controller,
}) => {
  router.get(
    '/:id',
    makeValidatorCallback(validator.getOrderById),
    makeExpressCallback(controller.getOrderById)
  );
  router.get(
    '/',
    adminLogin,
    pagination,
    // makeValidatorCallback(validator.getOrders),
    makeExpressCallback(controller.getOrders)
  );
  router.post(
    '/check-out',
    userLogin,
    //makeValidatorCallback(validator.cartCheckout),
    makeExpressCallback(controller.cartCheckout)
  );

  return router;
};
