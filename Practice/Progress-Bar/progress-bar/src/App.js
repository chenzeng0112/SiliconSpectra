import React, { Component } from 'react';
import './App.css';

import ProgressBar from './Components/ProgressBar'

export default class App extends Component {
  state = {
    percentage: 0,
  }

  percentageLimits = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  }

  handleIncrease = () => {
    this.setState({ percentage: this.percentageLimits(0, this.state.percentage + 10, 100) })
  }

  handleDecrease = () => {
    this.setState({ percentage: this.percentageLimits(0, this.state.percentage - 10, 100) })
  }

  render() {
    return (
      <div className='appWrapper'>
        <div className='container'>
          <div className='button'>
            <button onClick={this.handleDecrease}>-</button>
            <button onClick={this.handleIncrease}>+</button>
          </div>
          <ProgressBar percentage={this.state.percentage} />
        </div>
      </div>
    )
  }
}
