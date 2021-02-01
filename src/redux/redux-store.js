import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './profileReducer';
import MessageReducer from './dialogReducer';

let reducers = combineReducers(
    {
        profilePage:  ProfilePageReducer,
        messagesPage:  MessageReducer
    }
);

let store = createStore(reducers);

 export default store;