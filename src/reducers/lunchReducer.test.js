import lunchReducer from './lunchReducer';
import { addChip, cancelLunch } from '../actions/lunchActions';

describe('lunch reducer', () => {
  let initialState = {};
  beforeEach(() => {
    initialState = {
      drinks: [],
      sandwiches: ['hot dog'],
      chips: []
    };
  });

  it('adds tostitos to state', () => {
    expect(lunchReducer(initialState, addChip('tostitos'))).toEqual({
      drinks: [],
      sandwiches: ['hot dog'],
      chips: ['tostitos']
    });
  });

  it('empties the state', () => {
    expect(lunchReducer(initialState, cancelLunch())).toEqual({
      sandwiches: [],
      drinks: [],
      chips: []
    });
  });
});
