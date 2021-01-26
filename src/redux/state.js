
let state = {
    profilePage: {
        postData: [
            { id: '1', message: 'Hi, how are you?', count: '15' },
            { id: '2', message: 'It is my first post', count: '8' }
        ]
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
        ]
    }
}

//Додавання посту в MyPost
export let addPost = (postMessage) => {
    let newPost = {
        id: '3',
        message: 'Тільки не це!!!',
        count: '31'
    }
    state.profilePage.postData.push(newPost);
}

export default state;