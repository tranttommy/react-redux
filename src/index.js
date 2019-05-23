import { createStore } from 'redux';
import reducer from './reducers';
import { createPost, deletePost } from './actions/postActions';
import { addComment } from './actions/commentActions';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

store.dispatch(createPost({
  id: 12,
  title: 'Title',
  body: 'Body'
}));
console.log(store.getState());


store.dispatch(deletePost(12));
console.log(store.getState());

store.dispatch(createPost({
  id: 12,
  title: 'Title',
  body: 'Body'
}));

store.dispatch(createPost({
  id: 13,
  title: 'Title',
  body: 'Body'
}));

store.dispatch(addComment({
  postId: 12,
  body: 'Comment1'
}));

store.dispatch(addComment({
  postId: 12,
  body: 'Comment2'
}));
console.log(store.getState());

store.dispatch(deletePost(12));
console.log(store.getState());
