import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
  )
}
export default Profile;