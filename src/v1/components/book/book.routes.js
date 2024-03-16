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
    makeValidatorCallback(validator.getBookById),
    makeExpressCallback(controller.getBookById)
  );
  router.get(
    '/',
    pagination,
    makeValidatorCallback(validator.getBooks),
    makeExpressCallback(controller.getBooks)
  );
  router.post(
    '/',
    adminLogin,
    makeValidatorCallback(validator.createBook),
    makeExpressCallback(controller.createBook)
  );
  router.delete(
    '/:id',
    adminLogin,
    makeValidatorCallback(validator.deleteBook),
    makeExpressCallback(controller.deleteBook)
  );

  return router;
};
