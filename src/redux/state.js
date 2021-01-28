import { rendererEntriesTree } from '../Render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', count: 12},
            {id: 2, message: 'It is my first post', count: 11}
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
}

window.state = state;
//Додавання посту в MyPost
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        count: 21
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rendererEntriesTree(state)// виклик функції рендера після додавання поста
}

//Додавання посту в MyPost
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rendererEntriesTree(state)// виклик функції рендера після додавання поста
}
//Відправка повідомлення
export let addMessage = () => {
    let newMes = {
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messageData.push(newMes)
    state.messagesPage.newMessageText = '';
    rendererEntriesTree(state) // виклик функції рендера після додавання повідомлення
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText
    rendererEntriesTree(state)// виклик функції рендера після додавання поста
}

export default state;