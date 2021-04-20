import React from "react";
import { NavLink } from "react-router-dom";
import arh from '../../img/ava.png';
import s from './../Users/Users.module.css';



let Paginator = (props) => {
    // let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
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
    </div>)
}

export default Users;