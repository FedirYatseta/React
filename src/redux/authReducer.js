import { stopSubmit } from 'redux-form'
import { authMeAPI } from '../API/api'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const AUTH_ME = 'AUTH_ME'

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
export const setAuthMe = (userId, email, login, isAuth) => ({ type: 'AUTH_ME', payload: { userId, email, login, isAuth } })

export const loginThunk = () => {
    return (dispatch) => {
        authMeAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthMe(id, email, login, true))
                } 
            })
    }
}

export const loginForm = (email, password, rememberMe) => {
    return (dispatch) => {
        authMeAPI.login(email, password, rememberMe)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setAuthMe())
                }else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                    let action = stopSubmit('login', {_error: message});
                    dispatch(action);
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authMeAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthMe(null, null, null, false))
                }
            })
    }
}

export default AuthReducer;
