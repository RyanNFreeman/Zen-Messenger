import React, {Component} from 'react';
import Post from './comp/Post.js';
import PostEditor from './comp/PostEditor.js';
import './style/MessageBoard.css';

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: [],
    }
  }

  addPost(newPostBody) {
      const newState = Object.assign({}, this.state);
      newState.posts.push(newPostBody);
      this.setState(newState);
  }

  render() {
    return(
      <div class='message-board'>
        {
          this.state.posts.map((postBody, i) => {
            return (
              <Post key={i} postBody={postBody} />
            );
          })
        }

        <PostEditor addPost={this.addPost} />
      </div>
    )
  }
}

export default ThreadDisplay;
