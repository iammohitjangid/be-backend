const { default: mongoose } = require('mongoose');
const ShortUniqueId = require('short-unique-id');

const validateMongooseId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('id must be a valid mongodb objectId');
  }
  return value;
};

function getId(prefix) {
  const randomString = Math.random().toString(36).substring(2);
  return `${prefix}-${randomString.toUpperCase()}`;
}

module.exports = {
  validateMongooseId,
  getId,
};
