import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import ava from './../../img/ava.png';
import RoundImage from './ImageAva/RoundImage';



const Dialogs = (props) => {

    let dialogsElements = props.dialogData
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messageElements = props.messageData
        .map(message => <MessageItem message={message.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <div className={s.sendMessage}>
                        <textarea></textarea>
                        <button class="buttons" href='#' >
                             Send
                        </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;