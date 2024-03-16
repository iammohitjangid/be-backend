const { Joi } = require('../support/validator');
function validateConfig(configs) {
  const schema = Joi.object({
    PORT: Joi.number().port().required(),
    NODE_ENV: Joi.string().valid('production', 'test').required(),
  }).unknown(true);
  return schema.validate(configs);
}
module.exports = validateConfig;
