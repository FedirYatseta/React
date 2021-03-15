
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { AddMessageActionCreator, UpdateMessageActionCreator } from '../../redux/dialogReducer'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage  : () =>{
            dispatch(AddMessageActionCreator());
        },
        
        updateNewMessageBody: (text)=> {
            dispatch(UpdateMessageActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;