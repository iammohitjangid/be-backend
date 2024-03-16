const { Category } = require('../../../db/models');

const doGetCategoryById = async (payload) => {
  try {
    const { id } = payload;
    const category = await Category.findById(id);
    if (!category) {
      throw new BadRequestError('Book Not found!');
    }
    return category;
  } catch (err) {
    throw err;
  }
};
const doGetCategories = async (payload) => {
  try {
    const { limit, offset } = payload;
    const getCategory = await Category.find({}).limit(limit).skip(offset);
    const count = await Category.countDocuments();
    return { getCategory, count };
  } catch (err) {
    throw err;
  }
};
const doCreateCategory = async (payload) => {
  try {
    const { user_id, userData } = payload;
    const createdCategory = await Category.create(userData);
    if (!createdCategory) {
      throw new BadRequestError('Error creating book');
    }
    return createdCategory;
  } catch (err) {
    throw err;
  }
};
const doDeleteCategory = async (payload) => {
  try {
    const { id } = payload;
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      throw new BadRequestError('Book Delete successfully');
    }
    return deletedCategory;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doGetCategoryById,
  doGetCategories,
  doCreateCategory,
  doDeleteCategory,
};
