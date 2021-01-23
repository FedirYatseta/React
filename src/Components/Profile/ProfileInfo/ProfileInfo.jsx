import React from 'react';
import s from './ProfileInfo.module.css';
import arh from '../../../img/arh.jpg';
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={arh} alt="arh" />
      </div>
      <div>
       ava + desc
      </div>
    </div>
  )
}
export default ProfileInfo;