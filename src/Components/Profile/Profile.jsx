import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import arh from '../../img/arh.jpg';
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={arh} alt="arh" />
      </div>
      <div>
        ava + description
          </div>
      <MyPosts />
    </div>
  )
}
export default Profile;