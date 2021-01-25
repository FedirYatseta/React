import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  let postElements = props.postData
    .map(post => <Post message={post.message} count={post.count} />)
  return (
    <div>
      My Posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div><button>Add post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  )
}
export default MyPosts;