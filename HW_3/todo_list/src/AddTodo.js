import React from 'react'
import './AddTodo.css'

class AddTodo extends React.Component {
    state = {
        content: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.content);
        this.setState({ content: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <input
                    type='text'
                    name='content'
                    className='inputBox'
                    placeholder='Add Todo here ...'
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                />
            </form>
        )
    };
}

export default AddTodo