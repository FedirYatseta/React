import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './profileReducer';
import MessageReducer from './dialogReducer';
import NewsReducer from './newsReducer';

let reducers = combineReducers(
    {

        profilePage:  ProfilePageReducer,
        messagesPage:  MessageReducer,
        newsPage: NewsReducer
    }
);

let store = createStore(reducers);

 export default store;