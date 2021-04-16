import { loginThunk } from './authReducer'
let initialState = {
    initialized: false

}

const SET_INITIALIZED = 'SET_INITIALIZED'

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state;
    }
}
export const initializedSuccess = () => ({ type: 'SET_INITIALIZED' })

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(loginThunk());
        Promise.all([promise]).then(() => (
            dispatch(initializedSuccess())
        )
        )
        
    }
}

export default appReducer;
