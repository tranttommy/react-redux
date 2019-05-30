export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postId, body) => ({
  type: ADD_COMMENT,
  payload: { postId, body }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentIndex }
});
