import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost} from './redux/state'


export let rendererEntriesTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App postData={state.profilePage.postData} 
      dialogData={state.messagesPage.dialogData} 
      messageData={state.messagesPage.messageData} 
      addPost={addPost} 
      addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();