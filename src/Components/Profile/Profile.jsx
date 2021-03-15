import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;