import React from 'react';
import s from './Post.module.css';
import ava from '../../../../img/ava.png';
const Post = (props) => {

  return (
    <div className={s.item}>
      <img src={ava} alt="ava" />
       {props.message}
      <div><span>Like {props.count}</span></div>
    </div>
  )
}
export default Post;