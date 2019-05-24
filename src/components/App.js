import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import PostById from '../containers/posts/PostById';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path="/posts/:id" component={PostById} />
      </Switch>
    </Router>
  );
}
