const getBookById =
  ({ doGetBookById }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const payload = {
      id,
    };
    const userResponse = await doGetBookById(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const getBooks =
  ({ doGetBooks }) =>
  async (httpRequest) => {
    const userData = httpRequest.params;
    const { limit, offset } = httpRequest.paginate;
    const payload = { ...userData, limit, offset };
    const userResponse = await doGetBooks(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const createBook =
  ({ doCreateBook }) =>
  async (httpRequest) => {
    const userData = httpRequest.body;
    const { user_id } = httpRequest.userId;
    const payload = {
      userData,
      user_id,
    };
    const userResponse = await doCreateBook(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const deleteBook =
  ({ doDeleteBook }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const { user_id } = httpRequest.userId;
    const payload = {
      id,
      user_id,
    };
    const userResponse = await doDeleteBook(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };

module.exports = { getBookById, getBooks, createBook, deleteBook };
