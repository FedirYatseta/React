import React from "react";
import s from './../Users/Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import Preloader from "../Preloader/Preloader"

let Users = (props) => {
    return( <> <div className={s.preloader}>{props.isFetching ? <Preloader /> : null}</div> 
        <div className={s.UsersContainer}>
            <div>
                <Paginator {...props} />
            </div>
           
            <div className={s.userBlockWrap}>
                <div>
                    {
                        props.usersData.map(u => <User user={u}
                            key={u.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                      )
                    }
                </div>
            </div>
        </div> </> )
}

export default Users;