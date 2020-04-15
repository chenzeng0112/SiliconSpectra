import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import "./index.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item}
            handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todoItem}
            </div>
        )
    }
}

export default App