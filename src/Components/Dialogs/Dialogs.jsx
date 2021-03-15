import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.messageData.map(m => <MessageItem message={m.message} key={m.id}/>)
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.sendMessage();
    }
    let changeMessageText = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text)

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