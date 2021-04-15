import { authMeAPI } from '../API/api'

let initialState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false
}

const AUTH_ME = 'AUTH_ME'

const LOGIN_FORM = 'LOGIN_FORM'

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return { ...state, ...action.data, isAuth: true }
        case LOGIN_FORM:
            return { ...state, ...action.data }
        default:
            return state;
    }
}
export const setAuthMe = (id, email, login) => ({ type: 'AUTH_ME', data: { id, email, login } })

export const setLogin = (email, password, rememberMe) => ({ type: 'LOGIN_FORM', data: { email, password, rememberMe } })

export const loginThunk = () => {
    return (dispatch) => {
        authMeAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthMe(id, email, login))
                }
            })
    }
}

export const loginForm = () => {
    return (dispatch) => {
        authMeAPI.login()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, password, rememberMe } = response.data.data;
                    dispatch(setLogin(email, password, rememberMe))
                }
            })
    }
}




export default AuthReducer;
