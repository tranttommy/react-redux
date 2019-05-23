import { ADD_COMMENT } from '../actions/commentActions';

const initialState = [];
export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
