import React from 'react';
import { AddPostActionCreator, UpdateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(AddPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = UpdateNewPostActionCreator(text);
    props.store.dispatch(action);
  }
    return   <MyPosts updateNewPost={onPostChange} addPost={addPost} posts={state.profilePage.posts} 
    newPostText={state.profilePage.newPostText}/> 
    
}
export default MyPostsContainer;