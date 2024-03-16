const { Author } = require('../../../db/models');

const doGetAuthorById = async (payload) => {
  try {
    const { id } = payload;
    const author = await Author.findById(id);
    if (!author) {
      throw new BadRequestError('Author Not found!');
    }
    return author;
  } catch (err) {
    throw err;
  }
};
const doGetAuthors = async (payload) => {
  try {
    const { limit, offset } = payload;
    const createdAuthor = await Author.find({}).limit(limit).skip(offset);
    const count = await Author.countDocuments();
    return { createdAuthor, count };
  } catch (err) {
    throw err;
  }
};
const doCreateAuthor = async (payload) => {
  try {
    const { user_id, userData } = payload;
    const createdAuthor = await Author.create(userData);
    if (!createdAuthor) {
      throw new BadRequestError('Error creating book');
    }
    return createdAuthor;
  } catch (err) {
    throw err;
  }
};
const doDeleteAuthor = async (payload) => {
  try {
    const { id } = payload;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (deletedAuthor) {
      throw new BadRequestError(' Delete successfully');
    }
    return deletedAuthor;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doGetAuthorById,
  doGetAuthors,
  doCreateAuthor,
  doDeleteAuthor,
};
