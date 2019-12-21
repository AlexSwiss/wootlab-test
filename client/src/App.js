import React, { Component } from 'react';
import './App.css';
import listItems from './components/listItems';
import navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <navbar />
      <listItems />
      <h2>Get all items</h2>
      </div>
    );
  }
}

export default App;