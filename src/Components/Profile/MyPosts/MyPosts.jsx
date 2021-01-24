import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
  {id:'1', message:'Hi, how are you?', count: '15'},
  {id:'2', message:'It is my first post', count: '10'}
]
const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <div>
          <textarea></textarea></div> 
         <div><button>Add post</button></div>
      </div>
      <div className={s.posts}></div>
      <Post message={postData[0].message} count={postData[0].count}/>
      <Post message={postData[1].message} count={postData[1].count}/>
      
      </div>
  )
}
export default MyPosts;