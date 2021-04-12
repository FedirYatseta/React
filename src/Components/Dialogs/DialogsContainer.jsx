
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { AddMessageActionCreator, UpdateMessageActionCreator } from '../../redux/dialogReducer'
import { withAuthRedirect } from '../../hoc/whithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
       
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;