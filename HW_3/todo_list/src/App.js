import React from 'react';
import './App.css';
import Header from './Header.js'
import AddTodo from './AddTodo.js'
import Todos from './Todos.js'
import Search from './Search.js'

import { v4 as uuid } from 'uuid';

class App extends React.Component {
  state = {
    todos: [],
    searchText: "",
  };

  markComplete = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (content) => {
    const newTodo = {
      id: uuid(),
      content,
      completed: false,
      editing: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  searchTodo = (event) => {
    this.setState({ searchText: event.target.value })
  }

  editTodo = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            editing: !todo.editing,
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  editSave = (id, content) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            editing: !todo.editing,
            content,
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const searchItem = this.state.todos.filter(todo => {
      return todo.content.toLowerCase().includes(this.state.searchText.toLowerCase());
    });

    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <React.Fragment>
            <Search searchTodo={this.searchTodo} />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={searchItem}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
              editTodo={this.editTodo}
              editSave={this.editSave}
            />
          </React.Fragment>
        </div>
      </div>
    )
  };
}

export default App;
