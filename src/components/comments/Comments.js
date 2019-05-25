import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Comments({ comments }) {
  const commentList = comments.map((comment, i) => (
    <li key={i}>
      <Comment comment={comment} />
    </li>
  ));
  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};
