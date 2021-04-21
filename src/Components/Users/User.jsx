import React from "react";
import { NavLink } from "react-router-dom";
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (<div>
        <span>
            <div className={s.usersAva}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : arh} alt="" />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress
                        .some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>
                        Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                {/* <div>{u.location.city}</div> */}
                {/* <div>{u.location.country}</div> */}
            </span>
        </span>
    </div>
    )
}
export default User;