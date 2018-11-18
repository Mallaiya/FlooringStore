import React, { Component } from 'react';

import './App.css';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Section from './Components/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Banner />
        <Section />
      </div>
    );
  }
}

export default App;
