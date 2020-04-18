import React from 'react';
import './AddTodo.css'

class AddTodo extends React.Component {
    state = {
        content: '',
        initialIndex: 1,
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.content, this.state.initialIndex);
        this.setState({ content: '' });
    }

    onChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input
                    type="text"
                    name="content"
                    style={inputStyle}
                    placeholder="Add Todo Item ..."
                    value={this.state.content}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="SUBMIT"
                    className="btn"
                    style={submitStyle}
                />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    height: '100px'
}

const inputStyle = {
    flex: '10',
    padding: '10px',
    fontSize: '40px'
}

const submitStyle = {
    flex: '1'
}

export default AddTodo