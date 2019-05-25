import React from 'react';
import PropTypes from 'prop-types';
import CommentsByPostId from '../../containers/comments/CommentsByPostId';
import CreateComment from '../../containers/comments/CreateComment';

export default function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CommentsByPostId postId={post.id} />
      <CreateComment postId={post.id} />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired
};
