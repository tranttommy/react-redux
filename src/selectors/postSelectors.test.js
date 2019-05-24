import { getPosts, getPost } from './postSelectors';

describe('postSelecters', () => {
  const state = {
    posts: [
      {
        id: 1, title: 'T', body: 'B'
      },
      {
        id: 2, title: 't', body: 'b'
      },
      {
        id: 3, title: 'a', body: 'e'
      }
    ]
  };

  it('gets posts', () => {
    expect(getPosts(state)).toEqual([
      {
        id: 1, title: 'T', body: 'B'
      },
      {
        id: 2, title: 't', body: 'b'
      },
      {
        id: 3, title: 'a', body: 'e'
      }
    ]);
  });

  it('gets a post by id', () => {
    expect(getPost(state, 2)).toEqual({
      id: 2, title: 't', body: 'b'
    });
  });
});
