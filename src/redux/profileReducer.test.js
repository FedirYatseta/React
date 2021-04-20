import React from 'react'
import ProfilePageReducer, {AddPostActionCreator,deletePost } from './profileReducer'

let state  = {
    posts: []
}

test('new post should bo added', () => {
    //1. test data
  let action = AddPostActionCreator('sdfsdfdsf')

  //2. action
  let newState = ProfilePageReducer(state, action)

  //3. expectation

 expect(newState.posts.length).toBe(1);
 expect(newState.posts[0].message).toBe('sdfsdfdsf');
});


test('delete post', () => {
    //1. test data
  let action = deletePost(0)

  //2. action
  let newState = ProfilePageReducer(state, action)

  //3. expectation

 expect(newState.posts.length).toBe(0);
 
});
