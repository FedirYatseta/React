
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { AddMessageActionCreator } from '../../redux/dialogReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:(message) => {
            dispatch(AddMessageActionCreator(message));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);