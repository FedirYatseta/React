import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { AddPostActionCreator, UpdateNewPostActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {
  let postElements = props.posts
    .map(post => <Post message={post.message} count={post.count} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(AddPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdateNewPostActionCreator(text));
  }
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  )
}
export default MyPosts;