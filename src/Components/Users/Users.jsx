import React from "react";
import s from './../Users/Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (<div className={s.UsersContainer}>
        <Paginator {...props} />
        {
            props.usersData.map(u => <User user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
            />
            )
        }
    </div>)
}

export default Users;