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


let initialState = {
        dialogData: [
            { name: 'Fedir', id: '1' },
            { name: 'Evgen', id: '2' },
            { name: 'Oleg', id: '3' },
            { name: 'Sasha', id: '4' },
            { name: 'Kostya', id: '5' },
        ],

        messageData: [
            { id: 1, message: 'How are you?' },
            { id: 2, message: 'I am fine.' },
            { id: 3, message: 'What?' }
        ],
        newMessageText: ""
    

}
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const MessageReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newMessageText;
            let copyState = {...state};
            copyState.messageData = [...copyState.messageData];
            copyState.messageData.push({ id: 4, message: body })
            copyState.newMessageText = '';
            // виклик функції рендера після додавання повідомлення
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state};
            copyState.newMessageText = action.body;
            return copyState;
        }
        default:
            return state;
    }
}
export default MessageReducer;
