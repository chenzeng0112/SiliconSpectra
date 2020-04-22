import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';
import AddTodo from './Components/AddTodo.js';
import TodoItem from './Components/TodoItem.js'
import Search from './Components/Search.js'

class App extends React.Component {
  state = {
    todos: [],
    searchText: '',
  };

  // addTodo
  addTodo = (content) => {
    const newTodo = {
      id: uuid(),
      content,
      completed: false,
      editing: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // markComplete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    })
  }

  // delTodo
  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  // editTodo
  editTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? { ...todo, editing: !todo.editing } : todo;
      })
    })
  }

  // editSave
  editSave = (id, content) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? { ...todo, editing: !todo.editing, content } : todo;
      })
    })
  }

  // searchTodo
  searchTodo = (event) => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    const { todos, searchText } = this.state
    const todoDisplay = todos.filter(todo =>
      todo.content.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div>
        <React.Fragment>
          <Header />
          <Search searchTodo={this.searchTodo} />
          <AddTodo addTodo={this.addTodo} />
          {todoDisplay
            .map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                editTodo={this.editTodo}
                editSave={this.editSave}
              />
            ))
          }
        </React.Fragment>
      </div>
    )
  }
}

export default App;
