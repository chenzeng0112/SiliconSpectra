import React from 'react'
import './Showlist.css'

class Showlist extends React.Component {
    render() {
        return (
            <div className='showList'>
                <button className='showBtn' onClick={this.props.showTodo}>ALL</button>
                <button className='showBtn' onClick={this.props.showTodo}>PROCESSING</button>
                <button className='showBtn' onClick={this.props.showTodo}>DONE</button>
            </div>
        )
    }
}

export default Showlist
