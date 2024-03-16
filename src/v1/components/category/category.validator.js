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

module.exports.getCategoryById = (httpRequest) => {
  const schema = Joi.object({
    id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.params, options);
};
/* module.exports.getCategories = (httpRequest) => {
  const schema = Joi.object({
    catergory_id: Joi.string().custom(validateMongooseId),
    author_id: Joi.string().custom(validateMongooseId),
  });
  return schema.validate(httpRequest.query, options);
}; */
module.exports.createCategory = (httpRequest) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
  });
  return schema.validate(httpRequest.body, options);
};
module.exports.deleteCategory = (httpRequest) => {
  const schema = Joi.object({
    id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.params, options);
};
