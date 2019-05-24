import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(post) {
    dispatch(createPost(post));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
