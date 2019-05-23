import {
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_CHIP,
  REMOVE_DRINKS,
  REMOVE_SANDWICHES,
  REMOVE_CHIPS,
  CANCEL_LUNCH
} from '../actions/lunchActions';

const initialState = {
  sandwiches: [],
  drinks: [],
  chips: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case REMOVE_DRINKS:
      return { ...state, drinks: [] };
    case ADD_SANDWICH:
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case REMOVE_SANDWICHES:
      return { ...state, sandwiches: [] };
    case ADD_CHIP:
      return { ...state, chips: [...state.chips, action.payload] };
    case REMOVE_CHIPS:
      return { ...state, chips: [] };
    case CANCEL_LUNCH:
      return initialState;
    default:
      return state;
  }
}
