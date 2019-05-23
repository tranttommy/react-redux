export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
  type: CREATE_POST,
  payload: {
    id: post.id,
    title: post.title,
    body: post.body
  }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = () => ({
  type: DELETE_POST
});
