import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';
import AddTodo from './Components/AddTodo.js';

class App extends React.Component {
  state = {
    todos: [],
  }

  // addTodo
  addTodo = () => {

  }

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