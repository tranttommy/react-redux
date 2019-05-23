import postReducer from './postReducer';
import { createPost } from '../actions/postActions';


describe('postReducer', () => {
  it('returns new state with create post', () => {
    const initialState = [];
    const post = {
      id: 3,
      title: 'Title',
      body: 'Body'
    };

    const newState = postReducer(initialState, createPost(post));
    
    expect(initialState).toEqual([]);
    expect(newState).toEqual([
      {
        id: 3,
        title: 'Title',
        body: 'Body'
      }
    ]);
  });
});
