const getUser =
  ({ doGetUser }) =>
  async (httpRequest) => {
    const userId = httpRequest?.userId;
    const payload = {
      userId,
    };
    const userResponse = await doGetUser(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        message: 'user fetched Successfully!',
        data: userResponse,
      },
    };
  };
const createUser =
  ({ doCreateUser }) =>
  async (httpRequest) => {
    const body = httpRequest.body;
    const userId = httpRequest?.userId;
    const payload = {
      body,
      userId,
    };
    const userResponse = await doCreateUser(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        message: 'user created Successfully!',
        data: userResponse,
      },
    };
  };
const login =
  ({ doLogin }) =>
  async (httpRequest) => {
    const body = httpRequest.body;
    //const { customerId } = httpRequest;
    const payload = {
      body,
    };
    const userResponse = await doLogin(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        message: 'login successfully!',
        data: userResponse,
      },
    };
  };

module.exports = { createUser, login, getUser };
