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
                { message: 'How are you?' },
                { message: 'I am fine.' },
                { message: 'What?' }
            ],
            newMessageText: 'this is answer'
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
       
        if(action.type ==='ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                count: 21
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }
        else if(action.type === 'UPDATE-NEW-TEXT-POST'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }
    
        else if(action.type === 'ADD-MESSAGE'){
            let newMes = {
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messageData.push(newMes)
            this._state.messagesPage.newMessageText = '';
            this._callSubscribe(this._state) // виклик функції рендера після додавання повідомлення
        }
        else if (action.type === 'UPDATE-MESSAGE-TEXT'){
            this._state.messagesPage.newMessageText = action.newText
            this._callSubscribe(this._state)// виклик функції рендера після додавання поста
        }

        
    }
}

export default store;
