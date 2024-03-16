const getOrderById =
  ({ doGetOrderById }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const payload = {
      id,
    };
    const userResponse = await doGetOrderById(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const getOrders =
  ({ doGetOrders }) =>
  async (httpRequest) => {
    const userData = httpRequest.query;
    const { limit, offset } = httpRequest.paginate;
    const payload = { ...userData, limit, offset };
    const userResponse = await doGetOrders(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const cartCheckout =
  ({ doCartCheckout }) =>
  async (httpRequest) => {
    const { user_id } = httpRequest.userId;
    const payload = {
      user_id,
    };
    const userResponse = await doCartCheckout(payload);
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
  getOrderById,
  getOrders,
  cartCheckout,
};
