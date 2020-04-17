import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <p style={{ fontSize: '60px' }}>Todo List</p>
            <button style={btnStyle} >
                <a href="https://www.pornhubpremium.com/" target="_blank" rel="noopener noreferrer">
                    <span style={{ color: 'white' }}>快乐的</span>
                    <span style={{ borderRadius: '30px', backgroundColor: '#FF9900', color: 'black' }}>源泉</span>
                </a>
            </button>

        </header >
    )
}

const btnStyle = {
    padding: '10px',
    display: 'inline-block',
    fontSize: "100px",
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    color: '#fff',
    backgroundColor: "black",
    border: 'none',
    borderRadius: '40px',
    boxShadow: '0 9px #999',

}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}

export default Header