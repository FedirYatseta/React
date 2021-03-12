import React from 'react';
import Dialogs from './Dialogs'
import { AddMessageActionCreator, UpdateMessageActionCreator } from '../../redux/dialogReducer'
import StoreContext from './../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().messagesPage;
    
                let addMessage = () => {
                    store.dispatch(AddMessageActionCreator());
                }
                let changeMessageText = (text) => {
                    store.dispatch(UpdateMessageActionCreator(text))
                }
                return (
                        <Dialogs updateNewMessageBody={changeMessageText} sendMessage={addMessage} messagesPage={state} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}



export default DialogsContainer;