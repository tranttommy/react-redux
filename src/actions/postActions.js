export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
  type: CREATE_POST,
  payload: {
    id: post.id,
    title: post.title,
    body: post.body
  }
});

