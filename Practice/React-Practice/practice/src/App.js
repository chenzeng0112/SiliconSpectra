import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Header from './Components/Header.js';
import AddTodo from './Components/AddTodo.js';
import TodoItem from './Components/TodoItem.js';
import Search from './Components/Search.js';
import Showlist from './Components/Showlist.js';

class App extends React.Component {
  state = {
    todos: [],
    searchText: '',
    showAll: true,
    showDone: false,
  };

  // addTodo
  addTodo = (content, orderIndex) => {
    const newTodo = {
      id: uuid(),
      content,
      orderIndex,
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

  // showTodo
  showTodo = (event) => {
    let showState = event.target.innerText;
    let tempShowAll = true;
    let tempShowDone = true;
    if (showState === 'ALL') {
      tempShowAll = true;
      tempShowDone = false;
    } else if (showState === 'PROCESSING') {
      tempShowAll = false;
      tempShowDone = false;
    } else if (showState === 'DONE') {
      tempShowAll = false;
      tempShowDone = true;
    }
    this.setState({ showAll: tempShowAll, showDone: tempShowDone });
  }

  // sortTodo
  sortTodo = (id, tempIndex) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? { ...todo, orderIndex: tempIndex } : todo;
      })
    })
  }


  render() {
    const { todos, searchText, showAll, showDone } = this.state
    const todoDisplay = todos.filter(todo =>
      todo.content.toLowerCase().includes(searchText.toLowerCase())
    );

    let updateDisplay = [];
    if (showAll === true && showDone === false) {
      updateDisplay = todoDisplay;
    } else if (showAll === false && showDone === false) {
      updateDisplay = todos.filter(todo => !todo.completed);
    } else if (showAll === false && showDone === true) {
      updateDisplay = todos.filter(todo => todo.completed);
    }

    return (
      <div>
        <React.Fragment>
          <Header />
          <Showlist showTodo={this.showTodo} />
          <Search searchTodo={this.searchTodo} />
          <AddTodo addTodo={this.addTodo} />
          {updateDisplay
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                editTodo={this.editTodo}
                editSave={this.editSave}
                sortTodo={this.sortTodo}
              />
            ))
          }
        </React.Fragment>
      </div>
    )
  }
}

export default App;
