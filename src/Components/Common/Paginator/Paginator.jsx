import React from "react";
import s from './Paginator.module.css';

let Paginator = ({totalUserCount,pageSize,currentPage,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div className={s.UsersContainer}>
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p && s.selectPage}
                    onClick={() => { onPageChanged(p) }}>
                    <span key={p.id} className={s.wrapperButton}>
                        {p}
                    </span>
                </span>
            })}
        </div>
    </div>)
}

export default Paginator;