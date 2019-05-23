import { createPost } from './postActions';

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
});
