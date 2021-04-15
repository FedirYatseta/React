import { profileAPI } from '../API/api'

let initialState = {
    posts: [],
    profile: null,
    searchJob: true,
    status: '',
}

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_JOB_PROFILE = 'SET_JOB_PROFILE'
const USER_STATUS = "USER_STATUS"


const ProfilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                message: action.post,
                count: 21
            };
            return {
                ...state,
                posts: [...state.posts, post],
               
            }
        }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_JOB_PROFILE:
            return { ...state, job: action.job }

        case USER_STATUS: {
            return { ...state, status: action.status }
        }
        default: return state;
    }
}


export const AddPostActionCreator = (post) => ({ type: ADD_POST, post})
export const UpdateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-TEXT-POST', text })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setJobProfile = (job) => ({ type: 'SET_JOB_PROFILE', job })
export const usersStatus = (status) => ({ type: 'USER_STATUS', status });

export const profilePage = (userId) => {
    return (dispatch) => {
        dispatch(setJobProfile(false))
        profileAPI.getProfileUser(userId)
            .then(data => {
                dispatch(setJobProfile(true))
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {

                dispatch(usersStatus(data));
            });
    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatusAPI(status)
            .then(response => {
                if (response.data.resultCode === 0) { dispatch(usersStatus(status)); }

            });
    }
}


export default ProfilePageReducer;
