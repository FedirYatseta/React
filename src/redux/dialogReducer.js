export const AddMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const UpdateMessageActionCreator = (text) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT', body: text
    }
}


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const MessageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            state.messageData.push({ id: 4, message: body })
            state.newMessageText = '';
            // виклик функції рендера після додавання повідомлення
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}
export default MessageReducer;
