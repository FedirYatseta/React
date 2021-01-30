import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogData
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messageElements = props.messageData
        .map(message => <MessageItem message={message.message} />)

    let newMessageElement = React.createRef();//створення ref в textarea 
    //стрелочна функція яка передається кнопці для додавання поста з textarea і викликається по кліку
    let addMessage = () => {
        props.addMessage();
        //обнулення введеного тексту в полі
    }
    let changeMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)

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
                    <textarea ref={newMessageElement} onChange={changeMessageText} value={props.newMessageText} />
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;