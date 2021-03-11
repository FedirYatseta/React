import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from "react-router-dom"
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';

const App = (props) => {

  console.log(props.state)
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path="/profile"
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />} />
        <Route path="/dialogs"
          render={() => <Dialogs
            messagesPage={props.state.messagesPage}
            dispatch={props.dispatch}
          />} />

        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/news"
          render={() => <News
            newsPage ={props.state.newsPage}
            dispatch={props.dispatch}
          />} />
      </div>

    </div>

  );
}

export default App;