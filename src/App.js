import React from 'react';
import logo from './logo.svg';
import './App.css';
import PureTaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React...
        </a>
      </header>
      <div className="App-div">
        <PureTaskList/>
      </div>
    </div>
  );
}

export default App;
