import React, {Component} from 'react';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.eventHandle = this.eventHandle.bind(this);
    this.createPost = this.createPost.bind(this);

    this.state = {
      newPostBody: '',
    };
  }

  eventHandle(event) {
    this.setState({
      newPostBody: event.target.value
    })
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    })
  }

  render() {
    return(
      <div class='post-editor'>
        <textarea class='post-editor-input' value={this.state.newPostBody} onChange={this.eventHandle} />
        <button className='post-editor-button' onClick={this.createPost}>Post</button>
      </div>
    );
  }
}

export default PostEditor;
