import React from 'react';
import './App.css';

import AddTodo from './AddTodo.js'
import Todos from './Todos.js'

import { v4 as uuid } from 'uuid';

class App extends React.Component {
  state = {
    todos: []
  };

  addTodo = (id, content) => {
    const newTodo = {
      id: uuid(),
      content,
      completed: false
    }
    this.setState({ todos: { ...this.state.todos, newTodo } })
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} />
        </React.Fragment>
      </div>
    )
  };
}

export default App;
