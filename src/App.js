import React, { Component } from 'react';
import logo from './thermometer.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Weather from './containers/Weather';

class App extends Component {
  render() {
    console.log(this.state);    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Weather App</h1>
        </header>
        <body>
        <div>
        <Route path="/weather" exact component={Weather} />
        </div>
        </body>
      </div>
    );
  }
}

export default App;
