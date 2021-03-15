export const AddPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const UpdateNewPostActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-TEXT-POST', newText: text
    }
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', count: 12 },
        { id: 2, message: 'It is my first post', count: 11 }
    ],
    newPostText: 'it-kamasutra.com'
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-TEXT-POST'

const ProfilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPostText = {
                id: 5,
                message: state.newPostText,
                count: 21
            };
            return {
                ...state,
                posts: [...state.posts, newPostText],
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default: return state;
    }
}
export default ProfilePageReducer;
