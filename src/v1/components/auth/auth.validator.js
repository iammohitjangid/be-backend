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

module.exports.createUser = (httpRequest) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role_id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.body, options);
};
module.exports.login = (httpRequest) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(httpRequest.body, options);
};
