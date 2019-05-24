export const CREATE_POST = 'CREATE_POST';
export const createPost = ({ id, title, body }) => ({
  type: CREATE_POST,
  payload: { id, title, body }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = ({ id, title, body }) => ({
  type: UPDATE_POST,
  payload: { id, title, body }
});
