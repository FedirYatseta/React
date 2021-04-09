import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Redirect} from 'react-router-dom'


const Profile = (props) => {
  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.content}>
      <ProfileInfo  profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;