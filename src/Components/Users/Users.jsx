
import React from "react";
import * as axios from 'axios';
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css';
import { urlApi } from '../../redux/urlAPI/urlAPI';
class Users extends React.Component {

    constructor(props){
        super(props);
        axios.get(urlApi + "/users").then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return(
        <div className={s.Users}>
            {
                this.props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div className={s.usersAva}>
                            <img src={u.photos.small != null ? u.photos.small : arh} alt="" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
}


export default Users;