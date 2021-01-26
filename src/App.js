import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom"
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';



const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={ ()=><Dialogs dialogData={props.dialogData} messageData={props.messageData}/>}/>
          <Route path="/profile" render={ ()=><Profile postData={props.postData} addPost={props.addPost}/>} />
          <Route path="/music" render={ ()=><Music />} />
          <Route path="/settings" render={ ()=><Settings />} />
          <Route path="/news" render={ ()=><News />} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;