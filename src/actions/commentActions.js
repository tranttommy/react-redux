export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = ({ postId, body }) => ({
  type: ADD_COMMENT,
  payload: { postId, body }
});
