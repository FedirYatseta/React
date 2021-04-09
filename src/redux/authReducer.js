import { usersAPI } from '../API/api'

let initialState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false
}

const AUTH_ME = 'AUTH_ME'
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return { ...state, ...action.data, isAuth: true }
        default:
            return state;
    }
}
export const setAuthMe = (id, email, login) => ({ type: 'AUTH_ME', data: { id, email, login } })

export const loginThunk = () => {
    return (dispatch) => {
        debugger;
        usersAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthMe(id, email, login))
                }
            })
    }
}
export default AuthReducer;
