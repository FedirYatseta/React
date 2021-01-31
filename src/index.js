import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let _callSubscribe = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                dialogData={store.getState().messagesPage.dialogData}
                messageData={store.getState().messagesPage.messageData}
                dispatch={store.dispatch.bind(store)}
                 />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
_callSubscribe(store.getState());

store.subscribe(_callSubscribe);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();