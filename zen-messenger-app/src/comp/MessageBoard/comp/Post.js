import React from 'react'
import moment from 'moment';


const Post = (props) => (
  <div class='post-body'>
    <div class="post-body">
      { props.postBody }
    </div>

    <div class='post-meta'>
      <p>{moment().fromNow()}</p>
    </div>
  </div>
)

export default Post;
