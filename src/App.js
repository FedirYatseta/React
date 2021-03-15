import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from "react-router-dom"
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import NewsContainer from './Components/News/NewsContainer';
import Users from './Components/Users/Users';

const App = () => {
 
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/news" render={() => <NewsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;