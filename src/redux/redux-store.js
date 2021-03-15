import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './profileReducer';
import MessageReducer from './dialogReducer';
import NewsReducer from './newsReducer';
import UsersReducer from "./usersReducer";

let reducers = combineReducers(
    {

        profilePage:  ProfilePageReducer,
        messagesPage:  MessageReducer,
        newsPage: NewsReducer,
        UsersPage: UsersReducer
    }
);

let store = createStore(reducers);

 export default store;