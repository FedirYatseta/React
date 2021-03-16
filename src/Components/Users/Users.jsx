import React from 'react';
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css'

let Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            { id: '1', photoUrl: '', followed: false, name: 'Dima', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I am so pretty' },
            { id: '2', photoUrl: '', followed: true, name: 'Igor', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I am so pretty' },
            { id: '3', photoUrl: '', followed: true, name: 'Shasha', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I am so pretty' },
            { id: '4', photoUrl: '', followed: true, name: 'Egot', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I am so pretty' }
        ]
        )
    }
    return <div className={s.Users}>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                    <div className={s.usersAva}>
                        <img src={arh} alt="" />
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
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}

export default Users;