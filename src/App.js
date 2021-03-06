import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SeriesList from './components/series/seriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">List of TV Series</h1>
        </header>
        <SeriesList />
      </div>
    );
  }
}

export default App;
