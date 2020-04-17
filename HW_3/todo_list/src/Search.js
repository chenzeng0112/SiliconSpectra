import React from 'react'

class Search extends React.Component {

    render() {
        return (
            <div style={searchBox}>
                <input
                    type='text'
                    placeholder='Search TODOs'
                    style={inputStyle}
                    onChange={this.props.searchTodo}
                />
            </div>
        )
    }
}

const searchBox = {
    display: 'flex',
    margin: 'auto',
    height: '100px'
}

const inputStyle = {
    flex: '10',
    padding: '10px',
    fontSize: '40px'
}


export default Search