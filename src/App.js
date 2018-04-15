import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'shushu',
  }

  usernameChangedHandler = (event) => {
    this.setState(
      {
        username: event.target.value,
      }
    );
  };

  render() {
    const style = {
      color : 'red',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={style}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput changed={this.usernameChangedHandler.bind(this)} username={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
