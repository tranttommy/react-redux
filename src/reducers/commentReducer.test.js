import commentReducer from './commentReducer';
import { addComment } from '../actions/commentActions';

describe('commentReducer', () => {
  it('returns new state with added comment', () => {
    const initialState = [];
    const comment = {
      postId: 23,
      body: 'Helloe'
    };
    const newState = commentReducer(initialState, addComment(comment));
    expect(initialState).toEqual([]);
    expect(newState).toEqual([
      {
        postId: 23,
        body: 'Helloe'
      }
    ]);
  });
});
