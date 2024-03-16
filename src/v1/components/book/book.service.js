const { Book } = require('../../../db/models');

const doGetBookById = async (payload) => {
  try {
    const { id } = payload;
    const book = await Book.findById(id);
    if (!book) {
      throw new BadRequestError('Book Not found!');
    }
    return book;
  } catch (err) {
    throw err;
  }
};
const doGetBooks = async (payload) => {
  try {
    const { category_id, author_id, limit, offset } = payload;
    let query = {};
    if (author_id) {
      query.author_id = author_id;
    }
    if (category_id) {
      query.categories = category_id;
    }
    const books = await Book.find(query).limit(limit).skip(offset);
    const count = await Book.countDocuments();
    return { books, count };
  } catch (err) {
    throw err;
  }
};
const doCreateBook = async (payload) => {
  try {
    const { user_id, userData } = payload;
    const createdBook = await Book.create(userData);
    if (!createdBook) {
      throw new BadRequestError('Error creating book');
    }
    return createdBook;
  } catch (err) {
    throw err;
  }
};
const doDeleteBook = async (payload) => {
  try {
    const { id } = payload;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new BadRequestError('Book Delete successfully');
    }
    return deletedBook;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doGetBookById,
  doGetBooks,
  doCreateBook,
  doDeleteBook,
};
