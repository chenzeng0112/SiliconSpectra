import React from 'react'
import './Search.css'

class Search extends React.Component {
    render() {
        return (
            <div className='searchBox'>
                <input
                    type='text'
                    placeholder='Search TODOs ...'
                    className='searchInput'
                    onChange={this.props.searchTodo}
                />
            </div>
        )
    }
}

export default Search