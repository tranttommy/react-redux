import commentReducer from './commentReducer';
import { addComment, deleteComment } from '../actions/commentActions';

describe('commentReducer', () => {
  it('returns new state with added comment', () => {
    const initialState = {};
    const comment = {
      postId: 23,
      body: 'Helloe'
    };
    const newState = commentReducer(initialState, addComment(comment));
    expect(initialState).toEqual({});
    expect(newState).toEqual({
      '23': ['Helloe']
    });
  });

  it('returns new state with delete comment', () => {
    const initialState = {
      '23': ['Comment1', 'Comment2', 'Comment3', 'Comment4']
    };
    const newState = commentReducer(initialState, deleteComment(23, 1));
    expect(newState).toEqual({
      '23': ['Comment1', 'Comment3', 'Comment4']
    });
    const newerState = commentReducer(newState, deleteComment(23, 1));
    expect(newerState).toEqual({
      '23': ['Comment1', 'Comment4']
    });
  });
});
