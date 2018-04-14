import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'shushu',
  }

  changeUsernameHandler = (newName) => {
    this.setState(
      {
        username: newName,
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput onchange={this.changeUsernameHandler.bind(this)} username={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
