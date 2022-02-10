import React from 'react';
import imgPost from '../assets/post.png';
import './post.css';
import  Avatar from '@material-ui/core/Avatar';

function Post({username, imageUrl, caption}) {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar className='post-avatar' alt={username} src={"/static/images/avatar.png"}/>
        <h3>{username}</h3>
      </div>
      {/* header avatar + user name */}

      <img className='post-img' src={imageUrl}/>
      {/* image */}

      <h4 className='post-text'><strong>{username}: </strong> {caption}</h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;