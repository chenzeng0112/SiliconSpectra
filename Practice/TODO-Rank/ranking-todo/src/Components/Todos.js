import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        todos: [],
    }

    addTodo = (content, index) => {
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            content,
            index,
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.addTodo(this.state.content, this.state.index);
        this.setState({ content: '', index: '' })
    }

    delTodo = id => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex" }} >
                    <form onSubmit={this.handleSubmit}>
                        <label>Items: </label>
                        <input
                            type="text"
                            placeholder="Add TODOs ..."
                            onChange={this.handleChange}
                            name="content"
                            value={this.state.content}
                        />
                        <label> Ranking: </label>
                        <input
                            type="number"
                            placeholder="Enter Index ..."
                            onChange={this.handleChange}
                            name="index"
                            value={this.state.index}
                        />
                        <input type="submit" />
                    </form>
                </div>
                {this.state.todos
                    .sort((a, b) => a.index - b.index)
                    .map(todo => (
                        <h4 key={todo.id} onClick={() => this.delTodo(todo.id)}>
                            {todo.content}
                            {" "}
                            {todo.index}
                        </h4>
                    ))
                }
            </React.Fragment>
        )
    }
}
