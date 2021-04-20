import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ProfilePageReducer from './profileReducer';
import MessageReducer from './dialogReducer';
import NewsReducer from './newsReducer';
import UsersReducer from "./usersReducer";
import AuthReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers(
    {

        profilePage: ProfilePageReducer,
        messagesPage: MessageReducer,
        newsPage: NewsReducer,
        usersPage: UsersReducer,
        authMe: AuthReducer,
        form: formReducer,
        app: appReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;