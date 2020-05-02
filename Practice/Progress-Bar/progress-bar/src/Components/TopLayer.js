import React, { Component } from 'react';
import './TopLayer.css'

export default class TopLayer extends Component {
    render() {
        const { percentage } = this.props
        return (
            <div className='top' style={{ width: `${percentage}%` }}>

            </div >
        )
    }
}
