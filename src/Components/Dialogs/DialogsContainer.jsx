
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { AddMessageActionCreator, UpdateMessageActionCreator } from '../../redux/dialogReducer'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.authMe.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage  : (modelAuthor) =>{
            dispatch(AddMessageActionCreator(modelAuthor));
        },
        
        updateNewMessageBody: (text)=> {
            dispatch(UpdateMessageActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;