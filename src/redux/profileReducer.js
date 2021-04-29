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
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO = "SAVE_PHOTO"
const SAVE_PROFILE = "SAVE_PROFILE"


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
        case DELETE_POST: {
            return { ...state, post: state.posts.filter(p => p.id !== action.id) }
        }

        case SAVE_PHOTO: {
            return { ...state, profile: {...state.profile, photos:action.photos} }
        }

        case SAVE_PROFILE: {
            return { ...state, profile: {...state.contact} }
        }
        default: return state;
    }
}


export const AddPostActionCreator = (post) => ({ type: ADD_POST, post })
export const UpdateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-TEXT-POST', text })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setJobProfile = (job) => ({ type: 'SET_JOB_PROFILE', job })
export const usersStatus = (status) => ({ type: 'USER_STATUS', status });
export const deletePost = (id) => ({ type: 'DELETE_POST', id });
export const savePhotoSuccess = (photos) => ({ type: 'SAVE_PHOTO', photos });

export const saveProfileSuccess = (contact) => ({ type: 'SAVE_PHOTO', contact });

export const profilePage = (userId) => async (dispatch) => {
    dispatch(setJobProfile(false))
    const response = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(response.data))
    dispatch(setJobProfile(response.true))
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(usersStatus(response.data));
}


export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatusAPI(status)
    if (response.data.resultCode === 0) { dispatch(usersStatus(status)); }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhotoSuccess(file)
    if (response.data.resultCode === 0)
     { dispatch(savePhotoSuccess(file)); }
}

export const saveProfile = (contact) => async (dispatch, getState) => {
    debugger; 
    const userId = getState().authMe.userId
    const response = await profileAPI.saveProfileQuery(contact)
    if (response.data.resultCode === 0){ 
       
     dispatch(profilePage(userId)); 
    }
}



export default ProfilePageReducer;
