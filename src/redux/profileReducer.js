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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-TEXT-POST'

const ProfilePageReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 21
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: return state;
    }
}
export default ProfilePageReducer;
