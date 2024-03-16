const { Joi } = require('../../../support/validator');
const { validateMongooseId } = require('../../../utils/helpers');
const { validateEmptyReqBody } = require('../../../utils/validateEmptyReqBody');
const options = {
  errors: {
    wrap: {
      label: '',
    },
  },
};

module.exports.getCarts = (httpRequest) => {
  const schema = Joi.object({
    user_id: Joi.string().custom(validateMongooseId),
  });
  return schema.validate(httpRequest.query, options);
};
module.exports.addToCart = (httpRequest) => {
  const schema = Joi.object({
    book_id: Joi.string().custom(validateMongooseId).required(),
    quantity: Joi.number().required(),
  });
  return schema.validate(httpRequest.body, options);
};
module.exports.removeFromCart = (httpRequest) => {
  const schema = Joi.object({
    book_id: Joi.string().custom(validateMongooseId).required(),
    quantity: Joi.number().required(),
  });
  return schema.validate(httpRequest.body, options);
};
