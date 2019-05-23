export const CREATE_POST = 'CREATE_POST';
export const createPost = ({ id, title, body }) => ({
  type: CREATE_POST,
  payload: { id, title, body }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = () => ({
  type: DELETE_POST
});
