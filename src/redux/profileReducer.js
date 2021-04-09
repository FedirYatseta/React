import {usersAPI} from '../API/api'

let initialState = {
    posts: [],
    newPostText: 'it-kamasutra.com',
    profile: null,
    searchJob: true
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_JOB_PROFILE = 'SET_JOB_PROFILE'

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
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_JOB_PROFILE:
            return { ...state, job: action.job }
        default: return state;
    }
}


export const AddPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const UpdateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-TEXT-POST', text })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setJobProfile = (job) => ({ type: 'SET_JOB_PROFILE', job })


export const profilePage = (userId) => {
    return (dispatch) => {
        dispatch(setJobProfile(false))
        usersAPI.getProfileUser(userId)
            .then(data => {
                debugger;
                dispatch(setJobProfile(true))
                dispatch(setUserProfile(data))
            })
    }
}

export default ProfilePageReducer;
