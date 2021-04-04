import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './profileReducer';
import MessageReducer from './dialogReducer';
import NewsReducer from './newsReducer';
import UsersReducer from "./usersReducer";
import AuthReducer from './authReducer'

let reducers = combineReducers(
    {

        profilePage:  ProfilePageReducer,
        messagesPage:  MessageReducer,
        newsPage: NewsReducer,
        usersPage: UsersReducer,
        authMe: AuthReducer
    }
);

let store = createStore(reducers);
window.store = store;
 export default store;