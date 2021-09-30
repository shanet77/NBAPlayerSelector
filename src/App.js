import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import TinderCards from './PlayerCards';
import SwipeButtons from './SwipeButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayersSelected from './PlayersSelected';
import Login from './Login.js';


function App() {
  const[token, setToken] = useState();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className='app'>
      <Router>
        <Switch>
         <Route path="/PlayersSelected">
           <Header backButton="/" />
           <PlayersSelected />
         </Route>
         

          {/* home path */}
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

      
      </Router>
    </div>
  )
}

export default App
