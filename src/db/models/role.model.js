const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { users } = require('../../config/constant');

const roleSchema = new Schema(
  {
    role: {
      type: String,
      enum: Object.values(users),
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Role', roleSchema);
