import React from 'react'

class ShowList extends React.Component {
    render() {
        return (
            <div style={alignStyle}>
                <button style={btnStyle} onClick={this.props.showTodo}>ALL</button>
                <button style={btnStyle} onClick={this.props.showTodo}>PROCESSING</button>
                <button style={btnStyle} onClick={this.props.showTodo}>DONE</button>
            </div>
        )
    }
}

const alignStyle = {
    width: '100%',
    textAlign: 'center'
}

const btnStyle = {
    display: 'inline-block',
    fontSize: '40px',
    width: '20%',
    height: '65px',
    margin: '20px 10px',
    backgroundColor: '#555',
    color: '#fff',
    cursor: 'pointer'
}

export default ShowList