import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';




const Dialogs = (props) => {

    let dialogsElements = props.dialogData
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messageElements = props.messageData
        .map(message => <MessageItem message={message.message} />)
    //створення ref в textarea 
    let newMessageElement = React.createRef();
    //стрелочна функція яка передається кнопці для додавання поста з textarea і викликається по кліку
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        //обнулення введеного тексту в полі
        newMessageElement.current.value ='';
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;