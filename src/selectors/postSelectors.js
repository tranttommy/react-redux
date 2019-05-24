export const getPosts = state => state.posts;
export const getPost = (state, id) => state.posts.find(post => post.id === id);
