import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogsItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const MessageItem = (props) => {
    return <div className={s.message}>{props.message}</div>
}
let dialogData = [
    { name: 'Fedir', id: '1' },
    { name: 'Evgen', id: '2' }
]

let messageData = [
    { message: 'how are you?' },
    { message: 'I am fine' }
]

let dialogsElements = dialogData
    .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

let messageElements = messageData
    .map(message => <MessageItem message={message.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;