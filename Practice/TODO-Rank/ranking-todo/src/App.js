import React, { Component } from 'react'
import './App.css';
import Todos from './Components/Todos.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    )
  }
}
