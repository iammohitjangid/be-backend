const { Order, Cart } = require('../../../db/models');
const { getId } = require('../../../utils/helpers');

const doGetOrderById = async (payload) => {
  try {
    const { id } = payload;
    const order = await Order.findById(id);
    if (!order) {
      throw new BadRequestError('order Not found!');
    }
    return order;
  } catch (err) {
    throw err;
  }
};
const doGetOrders = async (payload) => {
  try {
    const { limit, offset } = payload;
    const orders = await Order.find({}).limit(limit).skip(offset);
    const count = await Order.countDocuments();
    return { orders, count };
  } catch (err) {
    throw err;
  }
};
const doCartCheckout = async (payload) => {
  try {
    const { user_id, userData } = payload;
    const cartData = await Cart.findOne({ user_id })
      .populate('user_id')
      .populate({
        path: 'items.book',
        populate: {
          path: 'catergories',
        },
      })
      .lean();
    if (!cartData) {
      throw new BadRequestError('Error finding cart');
    }
    if (!cartData.items.length) {
      throw new BadRequestError('Cart is Empty');
    }
    delete cartData._id;
    cartData.user_info = {
      name: cartData.user_id.name,
      email: cartData.user_id.email,
    };
    cartData.order_id = getId('Order');
    const order = await Order.create(cartData);
    if (!order) {
      throw new BadRequestError('error creating order');
    }
    await Cart.updateOne(
      {
        user_id,
      },
      {
        $set: {
          items: [],
          amount: 0,
        },
      }
    );

    return order;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doGetOrderById,
  doGetOrders,
  doCartCheckout,
};
