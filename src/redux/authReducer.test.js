import React from 'react'
import AuthReducer, {setAuthMe } from './authReducer'

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

test('new auth users', () => {
    //1. test data
  let action = setAuthMe('null','null','null',false)

  //2. action
  let newState = AuthReducer(state, action)

  //3. expectation

 expect(newState.isAuth).toBe(false);
});
