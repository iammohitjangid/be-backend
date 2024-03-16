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

module.exports.getOrderById = (httpRequest) => {
  const schema = Joi.object({
    id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.params, options);
};

module.exports.cartCheckout = (httpRequest) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
  });
  return schema.validate(httpRequest.body, options);
};
