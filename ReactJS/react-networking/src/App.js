import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn Axios
        </p>
      </header>
      <Users />
    </div>
  );
}

export default App;
