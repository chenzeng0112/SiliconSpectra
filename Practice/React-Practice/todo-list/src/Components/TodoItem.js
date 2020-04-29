import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    state = {
        content: this.props.todo.content,
        // orderDefault: this.props.todo.orderIndex,
        orderDefault: 1,
    }

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    withoutEditingMode = () => {
        return {
            display: this.props.todo.editing ? 'none' : 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    }

    editingMode = () => {
        return {
            display: this.props.todo.editing ? 'flex' : 'none',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    }

    handleEdit = (event) => {
        this.setState({ content: event.target.value });
    }

    saveButton = () => {
        const { todo, editSave } = this.props;
        editSave(todo.id, this.state.content);
    }

    handleEditKeyDown = (event) => {
        const { todo, editSave } = this.props;
        if (event.keyCode === 13) {
            editSave(todo.id, this.state.content);
        }
    }

    handleSort = (event) => {
        this.setState({ orderDefault: event.target.value });
        // console.log(event.target.value)
    }

    handleSortKeyDown = (event) => {
        const { sortTodo, todo } = this.props
        if (event.keyCode === 13 && this.state.orderDefault !== null) {
            sortTodo(todo.id, this.state.orderDefault);
        }
    }

    render() {
        const { id, content, completed } = this.props.todo;

        return (
            <div className='todoStyle'>
                <div style={this.withoutEditingMode()}>
                    <div className="todoItem">
                        <input
                            type='checkbox'
                            checked={completed}
                            className='checkBox'
                            onChange={() => this.props.markComplete(id)}
                            style={this.getStyle()}
                        />
                        <h4
                            onClick={() => this.props.markComplete(id)}
                            style={this.getStyle()}
                        >
                            {content}
                        </h4>
                        <input
                            type='number'
                            value={this.state.orderDefault}
                            onChange={this.handleSort}
                            onKeyDown={this.handleSortKeyDown}
                            className='sortBox'
                        />
                    </div>
                    <div className='bttnItem'>
                        <button className='bttnStyle' onClick={() => this.props.editTodo(id)}>EDIT</button>
                        <button className='bttnStyle' onClick={() => this.props.delTodo(id)}>DELETE</button>
                    </div>
                </div>
                <div style={this.editingMode()}>
                    <div className="editItem">
                        <input
                            type='text'
                            className='inputBox'
                            value={this.state.content}
                            onChange={this.handleEdit}
                            onKeyDown={this.handleEditKeyDown}
                        />
                    </div>
                    <div className='bttnItem'>
                        <button className='bttnStyleNew' onClick={this.saveButton}>SAVE</button>
                        <button className='bttnStyleNew' onClick={() => this.props.editTodo(id)}>CANCEL</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoItem