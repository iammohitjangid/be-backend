const getUserCart =
  ({ doGetUserCart }) =>
  async (httpRequest) => {
    const { user_id: id } = httpRequest.userId;
    const payload = {
      id,
    };
    const userResponse = await doGetUserCart(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const getCarts =
  ({ doGetCarts }) =>
  async (httpRequest) => {
    const { user_id } = httpRequest.query;
    const { limit, offset } = httpRequest.paginate;
    const userId = httpRequest.userId;
    const payload = { user_id, userId, limit, offset };
    const userResponse = await doGetCarts(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const addToCart =
  ({ doAddToCart }) =>
  async (httpRequest) => {
    const body = httpRequest.body;
    const { user_id } = httpRequest.userId;
    const payload = {
      body,
      user_id,
    };
    const userResponse = await doAddToCart(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const removeFromCart =
  ({ doRemoveFromCart }) =>
  async (httpRequest) => {
    const body = httpRequest.body;
    const { user_id } = httpRequest.userId;
    const payload = {
      body,
      user_id,
    };
    const userResponse = await doRemoveFromCart(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };

module.exports = {
  getUserCart,
  getCarts,
  addToCart,
  removeFromCart,
};
