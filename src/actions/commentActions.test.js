import { addComment } from './commentActions';

describe('commentActions', () => {
  it('creates addComment action', () => {
    const comment = {
      postId: 4,
      body: 'You succckkksss'
    };

    expect(addComment(comment)).toEqual({
      type: 'ADD_COMMENT',
      payload: {
        postId: 4,
        body: 'You succckkksss'
      }
    });
  });
});
