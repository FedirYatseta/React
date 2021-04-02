import React from 'react';
import s from './ProfileInfo.module.css';
import arh from '../../../img/arh.jpg';
import Preloader from '../../Preloader/Preloader';
const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.ProfileInfo}>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <div>
        <span>{props.profile.aboutMe} </span>
      </div>
      <div className={s.contact}>Контакти
        <div> {props.profile.contacts.facebook}</div>
        <div> {props.profile.contacts.website}</div>
        <div> {props.profile.contacts.vk}</div>
        <div> {props.profile.contacts.twitter}</div>
        <div> {props.profile.contacts.instagram}</div>
        <div> {props.profile.contacts.youtube}</div>
        <div> {props.profile.contacts.github}</div>

      </div>
    </div>
  )
}
export default ProfileInfo;