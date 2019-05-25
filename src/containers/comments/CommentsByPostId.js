import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentSelectors';
import { deleteComment } from '../../actions/commentActions';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.postId)
});

const mapDispatchToProps = (dispatch, props) => ({
  deleteComment(commentIndex) {
    dispatch(deleteComment(props.postId, commentIndex));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
