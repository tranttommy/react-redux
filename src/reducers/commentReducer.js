import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};
export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.postId]: state[action.payload.postId] ? [...(state[action.payload.postId]), action.payload.body] : [action.payload.body]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postId]: state[action.payload.postId].filter((_, i) => i !== action.payload.commentIndex)
      };
    default:
      return state;
  }
}
