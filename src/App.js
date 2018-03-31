import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Series from './components/series/series';
import NewSeries from './components/series/newSeries';
import CompleteSeason from './components/series/completeSeason';
import AddSeries from './components/series/addSeries';
import UpdateSeries from './components/series/updateSeries';
import EnableSeries from './components/series/enableSeries';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Series />
        <NewSeries />
        <CompleteSeason />        
        <AddSeries />        
        <UpdateSeries />        
        <EnableSeries />  
      </div>
    );
  }
}

export default App;
