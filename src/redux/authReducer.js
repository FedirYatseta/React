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
debugger;
export const setAuthMe = (id, email, login) => ({ type: 'AUTH_ME', data: { id, email, login } })

export default AuthReducer;
