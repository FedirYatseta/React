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

    //Додавання посту в MyPost
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            count: 21
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state)// виклик функції рендера після додавання поста
    },

    //Додавання посту в MyPost
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscribe(this._state)// виклик функції рендера після додавання поста
    },
    //Відправка повідомлення
    
    addMessage() {
        debugger;
        let newMes = {
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messageData.push(newMes)
        this._state.messagesPage.newMessageText = '';
        this._callSubscribe() // виклик функції рендера після додавання повідомлення
    },

    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText
        this._callSubscribe()// виклик функції рендера після додавання поста
    },

    subscribe(observer) {
        this._callSubscribe = observer; // observer - тут оновлюється UI коли відбувається змінти в state
    }
}

export default store;
