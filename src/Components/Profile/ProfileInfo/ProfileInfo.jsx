import React from 'react';
import s from './ProfileInfo.module.css';

import arh from '../../../img/SearchJob.jpg';
import job from '../../../img/job.jpg';
import ava from '../../../img/ava.png';
import Preloader from '../../Preloader/Preloader';
const ProfileInfo = (props) => {

  if (!props.profile) {
    return <div className={s.preloaderContainer}> <Preloader /></div>
  }
  return (
    <div className={s.ProfileInfo}>
      <div>
        <div><h1>{props.profile.fullName}</h1></div>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : `${ava}`} alt=''/>
      </div>

      <div className={s.contact}>
        <div>
          <span>Про мене - {props.profile.aboutMe} </span>
        </div>
        <div className={s.jobimg}>{props.profile.lookingForAJob ? <img src={arh} alt='' /> : <img src={job} alt='' />}
          <div>{props.profile.lookingForAJobDescription}</div> </div>
        <h3>Контакти</h3>
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