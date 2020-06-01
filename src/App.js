import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Profile from './Profile'

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <Profile text={{name:'mamta'}}/>
      </header>
      
    </div>
  );
}

export default App;
