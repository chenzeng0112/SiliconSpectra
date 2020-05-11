import React from 'react';
import './AddTodo.css';

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
        this.setState({ content: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='formStyle'>
                <input
                    type='text'
                    value={this.state.content}
                    placeholder='Add Todo Item ...'
                    className='inputStyle'
                    onChange={this.onChange}
                />
                <button className='btnStyle'>SUBMIT</button>
            </form>
        )
    }
}

export default AddTodo