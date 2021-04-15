
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
        ]
}
const ADD_MESSAGE = 'ADD_MESSAGE'

const MessageReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
        let body = action.message;
        return {
            ...state,
            messageData: [...state.messageData , { id: 4, message: body }]
        }}
        default:
            return state;
    }
}

export const AddMessageActionCreator = (message) =>( {type: ADD_MESSAGE, message}) 


export default MessageReducer;
