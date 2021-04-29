import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileDataForm from "./ProfileAddForm/ProfileDataForm"
import arh from '../../../img/SearchJob.jpg';
import job from '../../../img/job.jpg';
import ava from '../../../img/ava.png';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <div className={s.preloaderContainer}> <Preloader /></div>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.ProfileInfo}>
      <div>
        <div> Статус:<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></div>
        <div><h1>{props.profile.fullName}</h1></div>
        <img src={props.profile.photos.large != undefined ?  props.profile.photos.large : `${ava}`} alt='' />
        <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
      </div>
      
      <div className={s.contact}>
      {editMode
        ? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile} setEditMode={setEditMode} />
        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  debugger
  return (<div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <span>Про мене - {profile.aboutMe !== '' ? <b>{profile.aboutMe} </b> : <input />} </span>
    </div>
    <div className={s.jobimg}>{profile.lookingForAJob ? <div><img src={arh} alt='' />Шукаю</div> : <div><img src={job} alt='' />Маю</div>}
      <div><b>Мої навики: </b> {profile.lookingForAJobDescription !== '' ? <b>{profile.lookingForAJobDescription}</b> : <input />}</div> </div>
    <div>
      {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      }
      )}
    </div>

  </div>

  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className='container'><b>{contactTitle}</b>: {contactValue} </div>
}
export default ProfileInfo;