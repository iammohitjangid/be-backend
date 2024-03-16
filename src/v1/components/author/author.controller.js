const getAuthorById =
  ({ doGetAuthorById }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const payload = {
      id,
    };
    const userResponse = await doGetAuthorById(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const getAuthors =
  ({ doGetAuthors }) =>
  async (httpRequest) => {
    const userData = httpRequest.query;
    const { limit, offset } = httpRequest.paginate;
    const payload = { ...userData, limit, offset };
    const userResponse = await doGetAuthors(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const createAuthor =
  ({ doCreateAuthor }) =>
  async (httpRequest) => {
    const userData = httpRequest.body;
    const { user_id } = httpRequest.userId;
    const payload = {
      userData,
      user_id,
    };
    const userResponse = await doCreateAuthor(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const deleteAuthor =
  ({ doDeleteAuthor }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const { user_id } = httpRequest.userId;
    const payload = {
      id,
      user_id,
    };
    const userResponse = await doDeleteAuthor(payload);
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
  getAuthorById,
  getAuthors,
  createAuthor,
  deleteAuthor,
};
