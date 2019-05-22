import { createStore } from 'redux';

const initialState = {
  sandwiches: [],
  drinks: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drinks: [...state.drinks, action.payload] };
    case 'REMOVE_DRINKS':
      return { ...state, drinks: [] };
    case 'ADD_SANDWICH':
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case 'REMOVE_SANDWICHES':
      return { ...state, sandwiches: [] };
    case 'ADD_CHIP':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_CHIPS':
      return { ...state, chips: [] };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'soda'
});
console.log('1 drink', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'juice'
});
console.log('2 drinks', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'tuna'
});
console.log('1 sandwich', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'lgbt'
});
console.log('2 sandwiches', store.getState());

store.dispatch({
  type: 'ADD_CHIP',
  payload: 'crunchy'
});
console.log('1 chip', store.getState());

store.dispatch({
  type: 'ADD_CHIP',
  payload: 'cool ranch'
});
console.log('2 chips', store.getState());

store.dispatch({
  type: 'REMOVE_DRINKS'
});
console.log('no drinks', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICHES'
});
console.log('no sandwiches', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS'
});
console.log('no chips', store.getState());
