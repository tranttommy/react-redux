import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Post({ post, deletePost }) {
  return (
    <span>
      <span>{post.title}</span>
      <button onClick={deletePost}>X</button>
    </span>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  deletePost: PropTypes.func.isRequired
};
