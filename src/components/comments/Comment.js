import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment, index, deleteComment }) {
  return (
    <p>
      {comment.body}
      <button onClick={() => deleteComment(index)}>X</button>
    </p>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
