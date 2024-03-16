const { adminLogin, pagination } = require('../../../middleware');
module.exports = ({
  router,
  makeValidatorCallback,
  makeExpressCallback,
  validator,
  controller,
}) => {
  router.get(
    '/:id',
    makeValidatorCallback(validator.getCategoryById),
    makeExpressCallback(controller.getCategoryById)
  );
  router.get(
    '/',
    pagination,
    //makeValidatorCallback(validator.getCategories),
    makeExpressCallback(controller.getCategories)
  );
  router.post(
    '/',
    adminLogin,
    makeValidatorCallback(validator.createCategory),
    makeExpressCallback(controller.createCategory)
  );
  router.delete(
    '/:id',
    adminLogin,
    makeValidatorCallback(validator.deleteCategory),
    makeExpressCallback(controller.deleteCategory)
  );

  return router;
};
