import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {

    onSubmit = (event) => {

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className='formStyle'>

            </form>
        )
    }
}

export default AddTodo