import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Route } from "react-router-dom"
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import NewsContainer from './Components/News/NewsContainer';
import UsersContainer from './Components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
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