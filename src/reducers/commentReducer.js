import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

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
    case DELETE_POST: {
      // eslint-disable-next-line no-unused-vars
      const { [action.payload]: _, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
}
