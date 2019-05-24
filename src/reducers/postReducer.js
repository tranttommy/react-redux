import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload);
    case UPDATE_POST:
      return state.map(post => post.id === action.payload.id ? action.payload : post);
  }
}
