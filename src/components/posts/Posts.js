import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Posts({ posts, deletePost }) {
  const postList = posts.map(post => (
    <li key={post.id}>
      <Post post={post} deletePost={() => deletePost(post.id)} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePost: PropTypes.func.isRequired
};
