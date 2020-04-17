import React from 'react'

class TodoItem extends React.Component {
    state = {
        content: this.props.todo.content
    }

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    viewStyle = () => {
        return {
            fontSize: '35px',
            display: this.props.todo.editing ? 'none' : 'block'
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


    render() {
        const { id, content } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <span style={this.viewStyle()}>
                    <input
                        style={{ margin: '0 20px', transform: 'scale(2.5)' }}
                        type='checkbox'
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {content}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>DELETE</button>
                    <button style={btnStyle} onClick={this.props.editTodo.bind(this, id)}>EDIT</button>
                </span>
                <span style={this.editSytle()}>
                    <input
                        style={{ fontSize: '25px', margin: '0 40px' }}
                        type='text'
                        onChange={this.handleEdit}
                        value={this.state.content}
                    />
                    <button style={btnStyleNew} onClick={this.props.editTodo.bind(this, id)}>CANCEL</button>
                    <button style={btnStyleNew} onClick={this.saveButton}>SAVE</button>
                </span>
            </div >
        )
    }
}

const btnStyle = {
    display: 'inline-block',
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '4px 20px',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
    margin: '0 20px',
    width: '300px',
    height: '45px',
    fontSize: '25px'
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
    margin: '0 20px',
    width: '300px',
    height: '35px',
    fontSize: '25px'
}

export default TodoItem