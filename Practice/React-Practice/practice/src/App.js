import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';
import AddTodo from './Components/AddTodo.js';
import TodoItem from './Components/TodoItem.js'

class App extends React.Component {
  state = {
    todos: [],
  };

  // addTodo
  addTodo = (content, id) => {
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
        <TodoItem />
      </div>
    )
  }
}

export default App;
