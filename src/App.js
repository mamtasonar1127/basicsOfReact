import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Component 
        </a> 

      <Home/>
      <Profile text="Function Profile Component"/>

      </header> */}
      {
          React.createElement(
          'h1',
          null,
          'Hello JSX'
        )
      }

    </div>
  );
}

export default App;
