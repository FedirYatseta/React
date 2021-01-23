import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {

  return (
    <div>
      My MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}></div>
      <Post message='Hi, how are you?' count='15'/>
      <Post message='It is my first post' count='10'/>
      </div>
  )
}
export default MyPosts;