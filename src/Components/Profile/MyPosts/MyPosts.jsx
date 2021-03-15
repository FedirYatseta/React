import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} key={p.id} count={p.count} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  )
}
export default MyPosts;