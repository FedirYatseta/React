import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: '1', message: 'Hi, how are you?', count: '15' },
  { id: '2', message: 'It is my first post', count: '8' }
]

let dialogData = [
  { name: 'Fedir', id: '1' },
  { name: 'Evgen', id: '2' }
]

let messageData = [
{ message: 'how are you?' },
{ message: 'I am fine' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
