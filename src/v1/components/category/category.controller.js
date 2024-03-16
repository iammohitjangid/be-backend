const getCategoryById =
  ({ doGetCategoryById }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const payload = {
      id,
    };
    const userResponse = await doGetCategoryById(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const getCategories =
  ({ doGetCategories }) =>
  async (httpRequest) => {
    const userData = httpRequest.query;
    const { limit, offset } = httpRequest.paginate;

    const payload = { ...userData, limit, offset };
    const userResponse = await doGetCategories(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const createCategory =
  ({ doCreateCategory }) =>
  async (httpRequest) => {
    const userData = httpRequest.body;
    const { user_id } = httpRequest.userId;
    const payload = {
      userData,
      user_id,
    };
    const userResponse = await doCreateCategory(payload);
    return {
      statusCode: 200,
      body: {
        success: true,
        type: 'success',
        data: userResponse,
      },
    };
  };
const deleteCategory =
  ({ doDeleteCategory }) =>
  async (httpRequest) => {
    const { id } = httpRequest.params;
    const { user_id } = httpRequest.userId;
    const payload = {
      id,
      user_id,
    };
    const userResponse = await doDeleteCategory(payload);
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
  getCategoryById,
  getCategories,
  createCategory,
  deleteCategory,
};
