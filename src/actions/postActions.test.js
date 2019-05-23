import { createPost, deletePost, updatePost } from './postActions';

describe('postActions', () => {  
  it('returns createPost action', () => {
    const post = {
      id: 1,
      title: 'My Cool Post',
      body: 'Cool post body'
    };

    expect(createPost(post)).toEqual({
      type: 'CREATE_POST',
      payload: {
        id: 1,
        title: 'My Cool Post',
        body: 'Cool post body'
      }
    });
  });

  it('returns deletePost action', () => {
    expect(deletePost(4)).toEqual({
      type: 'DELETE_POST',
      payload: 4
    });
  });

  it('returns updatePost action', () => {
    const newPost = {
      id: 1,
      body: 'My cool body.'
    };

    expect(updatePost(newPost)).toEqual({
      type: 'UPDATE_POST',
      payload: {
        id: 1,
        body: 'My cool body.'
      }
    });
  });
});
