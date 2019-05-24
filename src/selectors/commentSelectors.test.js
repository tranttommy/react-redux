import { getComments } from './commentSelectors';

describe('commentSelectors', () => {
  it('gets comments by post id', () => {
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
      ],
      comments: {
        '2': ['Hello', 'Thar'],
        '3': ['EHE', 'AXE'],
      }
    };
    expect(getComments(state, 2)).toEqual(['Hello', 'Thar']);
  });
});
