import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}
