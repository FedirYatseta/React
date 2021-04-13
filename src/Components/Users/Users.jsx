import React from "react";
import { NavLink } from "react-router-dom";
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    return (<div className={s.UsersContainer}>
        <div >
            {pages.map(p => {
                return <span key={p.toString()} className={toString(props.currentPage) === toString(p) && toString(s.switch)}
                 onClick={() => { props.onPageChanged(p) }}>
                     <span key={p.id} className={s.wrapperButton}>
                         {p}
                     </span>
                     </span>
            })}
        </div>
        {
        props.usersData.map(u => <div key={u.id}>
            <span>
                <div className={s.usersAva}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : arh} alt="" />
                    </NavLink>
                </div>
                <div>

                {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { props.follow(u.id) }}>
                                      Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.city}</div> */}
                    {/* <div>{u.location.country}</div> */}
                </span>
            </span>
        </div>)
        }
    </div>)
}

export default Users;