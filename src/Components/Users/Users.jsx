import React from "react";
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div className={s.Users}>
        <div >
            {pages.map(p => {
                return <span className={props.currentPage === p && s.switch} onClick={() => { props.onPageChanged(p) }}><span className={s.wrapperButton}>{p}</span></span>
            })}
        </div>
        {props.usersData.map(u => <div key={u.id}>
            <span>
                <div className={s.usersAva}>
                    <img src={u.photos.small != null ? u.photos.small : arh} alt="" />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
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