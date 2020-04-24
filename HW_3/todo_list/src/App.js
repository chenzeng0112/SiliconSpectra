import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
        </React.Fragment>
      </div>
    )
  }
}

export default App;
