import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <p>{comment.body}</p>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
