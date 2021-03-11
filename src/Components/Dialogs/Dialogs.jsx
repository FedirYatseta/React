import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import {AddMessageActionCreator, UpdateMessageActionCreator} from '../../redux/dialogReducer'

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogData
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messageElements = props.messagesPage.messageData
        .map(message => <MessageItem message={message.message} />)

    let newMessageText = props.newMessageText;

    let addMessage = () => {
        props.dispatch(AddMessageActionCreator());
    }
    let changeMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(UpdateMessageActionCreator(text))

    }
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
                    <textarea onChange={changeMessageText}
                     value={newMessageText} />
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;