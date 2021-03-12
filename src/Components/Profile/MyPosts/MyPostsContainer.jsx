import React from 'react';
import { AddPostActionCreator, UpdateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext';


const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(AddPostActionCreator());
          }
          let onPostChange = (text) => {
            let action = UpdateNewPostActionCreator(text);
            store.dispatch(action);
          }
          return (
            <MyPosts
              updateNewPost={onPostChange}
              addPost={addPost}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;