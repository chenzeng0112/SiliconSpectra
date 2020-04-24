import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='inputBox'>
        <input
          tpye='text'
          placeholder='AUTO COMPLETE ...'
          className='inputText'
        />
      </div>
    )
  }
}

export default App
