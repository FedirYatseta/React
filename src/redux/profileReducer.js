

let initialState = {
    posts: [ ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
            case SET_USER_PROFILE:
                return{ ...state, profile: action.profile}
        default: return state;
    }
}


export const AddPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const UpdateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-TEXT-POST', text})
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile})
export default ProfilePageReducer;
