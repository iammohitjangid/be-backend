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

module.exports.getBookById = (httpRequest) => {
  const schema = Joi.object({
    id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.params, options);
};
module.exports.getBooks = (httpRequest) => {
  const schema = Joi.object({
    catergory_id: Joi.string().custom(validateMongooseId),
    author_id: Joi.string().custom(validateMongooseId),
  });
  return schema.validate(httpRequest.query, options);
};
module.exports.createBook = (httpRequest) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().uri().required(),
    catergories: Joi.array()
      .items(Joi.string().custom(validateMongooseId).required())
      .required(),
    author_id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.body, options);
};
module.exports.deleteBook = (httpRequest) => {
  const schema = Joi.object({
    id: Joi.string().custom(validateMongooseId).required(),
  });
  return schema.validate(httpRequest.params, options);
};
