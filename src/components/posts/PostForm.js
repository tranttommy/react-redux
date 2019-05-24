import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: '',
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        <input name="body" type="textarea" value={this.state.body} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
