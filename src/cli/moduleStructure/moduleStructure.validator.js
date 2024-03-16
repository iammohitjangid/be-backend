const { Joi } = require("../../../support/validator");
const { validateEmptyReqBody } = require("../../../utils/validateEmptyReqBody");
const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

module.exports.sampleController = (httpRequest) => {
  const schema = Joi.object({
    mobile: Joi.string().required(),
  });
  return schema.validate(httpRequest.body, options);
};
