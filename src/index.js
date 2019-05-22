import { createStore } from 'redux';
import reducer from './reducers/lunchReducer';
import {
  addDrink,
  addSandwich,
  addChip,
  removeDrinks,
  removeSandwiches,
  cancelLunch,
  removeChips
} from './reduxActions';

export const store = createStore(reducer);

store.dispatch(addDrink('soda'));
console.log('1 drink', store.getState());

store.dispatch(addDrink('juice'));
console.log('2 drinks', store.getState());

store.dispatch(addSandwich('tuna'));
console.log('1 sandwich', store.getState());

store.dispatch(addSandwich('lgbt'));
console.log('2 sandwiches', store.getState());

store.dispatch(cancelLunch());
console.log('no nothing', store.getState());

store.dispatch(addChip('crunchy'));
console.log('1 chip', store.getState());

store.dispatch(addChip('cool ranch'));
console.log('2 chips', store.getState());

store.dispatch(removeDrinks());
console.log('no drinks', store.getState());

store.dispatch(removeSandwiches());
console.log('no sandwiches', store.getState());

store.dispatch(removeChips());
console.log('no chips', store.getState());
