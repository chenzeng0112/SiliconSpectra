import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='headerStyle'>
                <button className='buttonStyle'>
                    <span className='spanStyle1'>ToDo </span>
                    <span className='spanStyle2'> LIST</span>
                </button>

            </header>
        )
    }
}

export default Header