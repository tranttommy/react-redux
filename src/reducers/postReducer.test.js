import postReducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';


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

  it('returns new state with deleted post', () => {
    const initialState = [
      {
        id: 4,
        title: 'Tatle',
        body: 'Bady'
      },
      {
        id: 3,
        title: 'Title',
        body: 'Body'
      },
      {
        id: 2,
        title: 'Tittle',
        body: 'Boddy'
      }
    ];

    const newState = postReducer(initialState, deletePost(3));

    expect(initialState).toEqual([
      {
        id: 4,
        title: 'Tatle',
        body: 'Bady'
      },
      {
        id: 3,
        title: 'Title',
        body: 'Body'
      },
      {
        id: 2,
        title: 'Tittle',
        body: 'Boddy'
      }
    ])
    expect(newState).toEqual([
      {
        id: 4,
        title: 'Tatle',
        body: 'Bady'
      },
      {
        id: 2,
        title: 'Tittle',
        body: 'Boddy'
      }
    ]);
  });
});
