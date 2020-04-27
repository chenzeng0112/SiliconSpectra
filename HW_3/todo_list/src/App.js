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
  addTodo = (content) => {
    const newTodo = {
      id: uuid(),
      content,
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <AddTodo addTodo={this.addTodo} />
        </React.Fragment>
      </div>
    )
  }
}

export default App;