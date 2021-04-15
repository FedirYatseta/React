import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"same text"} name="post" component={'textarea'} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} key={p.id} count={p.count} />)

  let onAddPost = (e) => {
    props.addPost(e.post);
  }


  const ReduxPostForm = reduxForm({
    form: 'post'
  })(MyPostForm)

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <ReduxPostForm onSubmit={onAddPost} />
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  )
}
export default MyPosts;