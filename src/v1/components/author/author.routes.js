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
    makeValidatorCallback(validator.getAuthorById),
    makeExpressCallback(controller.getAuthorById)
  );
  router.get(
    '/',
    pagination,
    //makeValidatorCallback(validator.getCategories),
    makeExpressCallback(controller.getAuthors)
  );
  router.post(
    '/',
    adminLogin,
    makeValidatorCallback(validator.createAuthor),
    makeExpressCallback(controller.createAuthor)
  );
  router.patch(
    '/',
    adminLogin,
    makeValidatorCallback(validator.editAuthor),
    makeExpressCallback(controller.editAuthor)
  );
  router.delete(
    '/:id',
    adminLogin,
    makeValidatorCallback(validator.deleteAuthor),
    makeExpressCallback(controller.deleteAuthor)
  );

  return router;
};
