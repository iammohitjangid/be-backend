const { User, Cart } = require('../../../db/models');
const Bcrypt = require('bcrypt');
const { sign } = require('../../../utils/jwt');

const doGetUser = async (payload) => {
  try {
    const { userId } = payload;
    const user = await User.findById(userId?.user_id);
    if (!user) {
      throw new BadRequestError('User not found');
    }
    let isAdmin = false;
    if (user.role_id === '65f08b8b3fae25788fc8a8ba') {
      isAdmin = true;
    }
    return { name: user.name, email: user.email, isAdmin };
  } catch (err) {
    throw err;
  }
};
const doCreateUser = async (payload) => {
  try {
    const { body, userId } = payload;
    const role_id = userId?.role_id;
    const isUserExist = await User.findOne({ email: body.email });
    if (isUserExist) {
      throw new BadRequestError('User already exists');
    }
    const userData = await User.create(body);
    if (!userData) {
      throw new BadRequestError('Error creating user');
    }
    if (!role_id) {
      await Cart.create({ user_id: userData._id });
      return sign({ user_id: userData._id, role_id: body.role_id });
    }
    return sign({ user_id: userData._id, role_id: body.role_id }, true);
  } catch (err) {
    throw err;
  }
};
const doLogin = async (payload) => {
  try {
    const { body } = payload;
    const userData = await User.findOne({ email: body.email })
      .populate('role_id')
      .lean();
    if (!userData) {
      throw new BadRequestError('User not found');
    }
    const comparePass = await Bcrypt.compare(body.password, userData.password);
    if (!comparePass) {
      throw new BadRequestError('Wrong password');
    }
    const { role_id } = userData;
    let userToken;
    let isAdmin = false;
    if (role_id.role === 'ADMIN') {
      userToken = sign({ user_id: userData._id, role_id: role_id._id }, true);
      isAdmin = true;
    } else {
      userToken = sign({ user_id: userData._id, role_id: role_id._id });
    }
    return { userToken, isAdmin };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  doCreateUser,
  doLogin,
  doGetUser,
};
