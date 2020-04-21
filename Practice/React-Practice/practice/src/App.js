import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';
import AddTodo from './Components/AddTodo.js';

class App extends React.Component {
  state = {
    todos: [],
  };

  // addTodo
  addTodo = (id, content) => {
    const newTodo = {
      id: uuid(),
      content,
      completed: false,
    }
    this.setState({ todo: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
