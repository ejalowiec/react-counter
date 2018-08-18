import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Imie from "./Imie";

class App extends Component {
  render() {
    let robert = {imie: "Robert", nazwisko: "Kowalski", wiek: "33"}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter startValue="7" />
        <Counter startValue="0" />
        <Imie imie="Eryk" />
        {/* <Imie imie={robert.imie} nazwisko={robert.nazwisko} wiek={robert.wiek} /> */}
        <Imie osoba={robert} />
        </div>
    );
  }
}

export default App;
