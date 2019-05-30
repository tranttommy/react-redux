import { addComment, deleteComment } from './commentActions';

describe('commentActions', () => {
  it('creates addComment action', () => {
    const comment = {
      postId: 4,
      body: 'You succckkksss'
    };

    expect(addComment(comment.postId, comment.body)).toEqual({
      type: 'ADD_COMMENT',
      payload: {
        postId: 4,
        body: 'You succckkksss'
      }
    });
  });

  it('creates deleteComment action', () => {
    expect(deleteComment(4, 3)).toEqual({
      type: 'DELETE_COMMENT',
      payload: {
        postId: 4,
        commentIndex: 3
      }
    });
  });
});
