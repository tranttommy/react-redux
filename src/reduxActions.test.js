import {
  addDrink,
  addSandwich,
  addChip,
  removeDrinks,
  removeSandwiches,
  removeChips,
  cancelLunch
} from './reduxActions';

describe('redux actions', () => {
  it('creates addDrink action object', () => {
    expect(addDrink('hello')).toEqual({
      type: 'ADD_DRINK',
      payload: 'hello'
    });
  });

  it('creates addSandwich action object', () => {
    expect(addSandwich('hello')).toEqual({
      type: 'ADD_SANDWICH',
      payload: 'hello'
    });
  });

  it('creates addChip action object', () => {
    expect(addChip('hello')).toEqual({
      type: 'ADD_CHIP',
      payload: 'hello'
    });
  });

  it('creates removeDrinks action object', () => {
    expect(removeDrinks('hello')).toEqual({
      type: 'REMOVE_DRINKS'
    });
  });

  it('creates removeSandwiches action object', () => {
    expect(removeSandwiches('hello')).toEqual({
      type: 'REMOVE_SANDWICHES'
    });
  });

  it('creates removeChips action object', () => {
    expect(removeChips('hello')).toEqual({
      type: 'REMOVE_CHIPS'
    });
  });
  
  it('creates cancelLunch action object', () => {
    expect(cancelLunch()).toEqual({
      type: 'CANCEL_LUNCH'
    });
  });
});
