import React from 'react';
import './App.css';
import Header from './Header.js'
import AddTodo from './AddTodo.js'
import Search from './Search.js'
import ShowList from './ShowList.js'
import TodoItem from './TodoItem.js'
import { v4 as uuid } from 'uuid';

class App extends React.Component {
  state = {
    todos: [],
    searchText: "",
    showAll: true,
    showDone: false,
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

  addTodo = (content, orderIndex) => {
    const newTodo = {
      id: uuid(),
      content,
      orderIndex,
      completed: false,
      editing: false,
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
    this.setState(() => {
      return {
        showAll: tempShowAll,
        showDone: tempShowDone,
      }
    })
  }

  sortChange = (id, tempIndex) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            orderIndex: tempIndex,
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
    const { showAll, showDone, todos, searchText } = this.state;

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
      <div className='App'>
        <div className='container'>
          <Header />
          <React.Fragment>
            <ShowList showTodo={this.showTodo} />
            <Search searchTodo={this.searchTodo} />
            <AddTodo addTodo={this.addTodo} />
            {updateDisplay
              .sort((a, b) => a.orderIndex - b.orderIndex)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                  editTodo={this.editTodo}
                  editSave={this.editSave}
                  sortChange={this.sortChange}
                />
              ))}
          </React.Fragment>
        </div>
      </div>
    )
  };
}

export default App;
