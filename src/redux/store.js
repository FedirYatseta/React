/*import  MessageReducer from './dialogReducer';
import  ProfileReducer  from './profileReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', count: 12 },
                { id: 2, message: 'It is my first post', count: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            dialogData: [
                { name: 'Fedir', id: '1' },
                { name: 'Evgen', id: '2' },
                { name: 'Oleg', id: '3' },
                { name: 'Sasha', id: '4' },
                { name: 'Kostya', id: '5' },
            ],

            messageData: [
                { id:1, message: 'How are you?' },
                { id:2, message: 'I am fine.' },
                { id:3, message: 'What?' }
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubscribe = observer; // observer -  оновлюється UI коли відбувається змінти в state
    },
    dispatch(action){
       this._state.profilePage =  ProfileReducer(this._state.profilePage, action)
       this._state.messagesPage =  MessageReducer(this._state.messagesPage, action)
       this._callSubscribe(this._state);
    }
}

export default store;
*/