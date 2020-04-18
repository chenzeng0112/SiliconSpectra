import React from 'react'

class TodoItem extends React.Component {
    state = {
        content: this.props.todo.content,
        orderDefault: 1,
    }

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    viewStyle = () => {
        return {
            fontSize: '35px',
            display: this.props.todo.editing ? 'none' : 'block',
        }
    }

    editSytle = () => {
        return {
            display: this.props.todo.editing ? 'block' : 'none'
        }
    }

    handleEdit = (event) => {
        this.setState({ content: event.target.value })
    }

    saveButton = () => {
        const { todo, editSave } = this.props
        editSave(todo.id, this.state.content)
    }

    handleChange = (event) => {
        this.setState({ orderDefault: event.target.value })
    }

    handleKeyDown = (event) => {
        const { sortChange, todo } = this.props
        if (event.keyCode === 13 && this.state.orderDefault !== null) {
            sortChange(todo.id, this.state.orderDefault)
        }
    }


    render() {
        const { id, content, completed } = this.props.todo;

        const btnStyle = {
            display: 'inline-block',
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '4px 20px',
            cursor: 'pointer',
            float: 'right',
            fontWeight: 'bold',
            margin: '4px 40px',
            width: '300px',
            height: '45px',
            fontSize: '30px'
        }

        const btnStyleNew = {
            display: 'inline-block',
            background: 'black',
            color: '#fff',
            border: 'none',
            padding: '2px 20px',
            cursor: 'pointer',
            float: 'right',
            fontWeight: 'bold',
            margin: '4px 40px',
            width: '300px',
            height: '45px',
            fontSize: '30px'
        }

        return (
            <div style={this.getStyle()}>
                <div style={this.viewStyle()}>
                    <input
                        style={{ margin: '20px 80px', transform: 'scale(2.5)' }}
                        type='checkbox'
                        checked={completed}
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {content}
                    <input
                        type='number'
                        value={this.state.orderDefault}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        style={{ fontSize: '30px', margin: '0 140px', textAlign: 'center' }}
                    />
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>DELETE</button>
                    <button style={btnStyle} onClick={this.props.editTodo.bind(this, id)}>EDIT</button>
                </div>
                <div style={this.editSytle()}>
                    <input
                        style={{ fontSize: '40px', margin: '0 100px' }}
                        type='text'
                        onChange={this.handleEdit}
                        value={this.state.content}
                    />
                    <button style={btnStyleNew} onClick={this.props.editTodo.bind(this, id)}>CANCEL</button>
                    <button style={btnStyleNew} onClick={this.saveButton}>SAVE</button>
                </div>
            </div >
        )
    }
}

export default TodoItem