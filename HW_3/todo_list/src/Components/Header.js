import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className='headerStyle'>
                <p className='textStyle'>ToDo LIST</p>
                <button className='headerBtn' >
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <span className='spanStyle1'>快乐的</span>
                        <span className='spanStyle2'>源泉</span>
                    </a>
                </button>

            </header >
        )
    }
}

export default Header
