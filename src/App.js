import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from "react-router-dom"
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import DialogsContainer from './Components/Dialogs/DialogsContainer'

const App = (props) => {
debugger;
  console.log(props.state)
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path="/profile"
          render={() => <Profile store={props.store}
            
          />} />
          
        <Route path="/dialogs"
          render={() => <DialogsContainer store={props.store}
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