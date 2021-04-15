import React from 'react';
import { Redirect } from 'react-router-dom'
import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form'

const MassageFrom = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={s.sendMessage}>
            <div>
                <Field placeholder={"enter your message"} name={'message'} component={'textarea'} />
            </div>
            <div>
                <button> Send</button>
            </div>
        </form>
    )
}


const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.messageData.map(m => <MessageItem message={m.message} key={m.id} />)



    let addNewMessage = (values) => {
        props.sendMessage(values.message)

    }

    const ReduxMessageForm = reduxForm(
        {
            form: 'message'
        }
    )(MassageFrom)

    if (props.isAuth === false) return <Redirect to={'/login'} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <div >
                    <ReduxMessageForm onSubmit={addNewMessage} />
                    {/* <textarea onChange={changeMessageText}
                        value={newMessageText} />
                    <button onClick={addMessage}>
                        Send
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;