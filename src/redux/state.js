export const AddPostActionCreator = () => {
    return {
        type:'ADD-POST'
    }
}
export const UpdateNewPostActionCreator = (text) => {
    return {
        type:'UPDATE-NEW-TEXT-POST',newText: text
    }
}
export const AddMessageActionCreator = () => {
    return {
        type:'ADD-MESSAGE'
    }
}
export const UpdateMessageActionCreator = (text) => {
    return {
        type:'UPDATE-MESSAGE-TEXT' , body:text
    }
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-TEXT-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

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
        this._callSubscribe = observer; // observer - тут оновлюється UI коли відбувається змінти в state
    },

    
    dispatch(action){
       
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                count: 21
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }
    
        else if(action.type === ADD_MESSAGE){
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.messageData.push({id:4, message: body})
            this._state.messagesPage.newMessageText = '';
            this._callSubscribe(this._state) // виклик функції рендера після додавання повідомлення
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.messagesPage.newMessageText = action.body;
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }

        
    }
}

export default store;
