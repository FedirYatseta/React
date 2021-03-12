import React from 'react';
import Dialogs from './Dialogs'
import {AddMessageActionCreator, UpdateMessageActionCreator} from '../../redux/dialogReducer'

const DialogsContainer = (props) => {
    debugger;
   let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    }
    let changeMessageText = (text) => {
        props.store.dispatch(UpdateMessageActionCreator(text))

    }
    return <Dialogs updateNewMessageBody={changeMessageText} sendMessage={addMessage} messagesPage={state}/>
}

export default DialogsContainer;