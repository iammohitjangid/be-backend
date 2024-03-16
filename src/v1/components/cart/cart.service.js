const { Cart, Book } = require('../../../db/models');

const doGetUserCart = async (payload) => {
  try {
    const { id } = payload;
    const cart = await Cart.findOne({ user_id: id })
      .populate('user_id')
      .populate('items.book');
    if (!cart) {
      throw new BadRequestError('Cart Not found!');
    }
    return cart;
  } catch (err) {
    throw err;
  }
};
const doGetCarts = async (payload) => {
  try {
    const { userId, user_id, limit, offset } = payload;
    const query = {};
    if (user_id) {
      query.user_id = user_id;
    }
    const cartData = await Cart.find(query)
      .populate('user_id')
      .populate('items.book')
      .limit(limit)
      .skip(offset);
    const count = await Cart.countDocuments();
    return { cartData, count };
  } catch (err) {
    throw err;
  }
};
const doAddToCart = async (payload) => {
  try {
    const { user_id, body } = payload;
    const { quantity, book_id } = body;
    const userCart = await Cart.findOne({
      user_id,
    });
    if (!userCart) {
      throw new BadRequest('error finding user cart');
    }
    const book = await Book.findById(book_id);
    if (!book) {
      throw new BadRequest('error finding book');
    }
    const existingItemIndex = userCart.items.findIndex(
      (item) => item.book.toString() === book_id
    );

    if (existingItemIndex !== -1) {
      userCart.items[existingItemIndex].quantity += quantity;
    } else {
      userCart.items.push({ book: book_id, quantity });
    }
    userCart.amount = userCart.amount + book.price * quantity;
    await userCart.save();
    return;
  } catch (err) {
    throw err;
  }
};
const doRemoveFromCart = async (payload) => {
  try {
    const { user_id, body } = payload;
    const { quantity, book_id } = body;
    const userCart = await Cart.findOne({
      user_id,
    });
    if (!userCart) {
      throw new BadRequest('Error finding user cart');
    }

    const book = await Book.findById(book_id);
    if (!book) {
      throw new BadRequest('Error finding book');
    }

    const existingItemIndex = userCart.items.findIndex(
      (item) => item.book.toString() === book_id
    );

    if (existingItemIndex !== -1) {
      if (userCart.items[existingItemIndex].quantity <= quantity) {
        userCart.items.splice(existingItemIndex, 1);
      } else {
        userCart.items[existingItemIndex].quantity -= quantity;
      }
      userCart.amount = Math.max(0, userCart.amount - book.price * quantity);
    } else {
      throw new BadRequest('Book is not in the cart');
    }

    await userCart.save();
    return;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doGetUserCart,
  doGetCarts,
  doAddToCart,
  doRemoveFromCart,
};
