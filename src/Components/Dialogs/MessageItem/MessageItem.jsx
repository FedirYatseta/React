import React from 'react';
import RoundImage from '../ImageAva/RoundImage';
import s from './../Dialogs.module.css';
import ava from './../../../img/ava.png';
const MessageItem = (props) => {
    return (
        <div>
            <div className={s.avaImage}>
                <RoundImage src={ava} />
            </div>
            <div className={s.avaMessage}>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default MessageItem;