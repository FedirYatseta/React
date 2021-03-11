import React from 'react';
import s from './../News.module.css';


const NewItem = (props) => {
    return (<div>
        <div className={s.news}>
            {props.name}
            <div>
                {props.text}
                <div className={s.imgTitle}>
                <img src={props.imgTitle} alt={props.name}/>
                </div>
            </div>
        </div>

    </div>)
}


export default NewItem;