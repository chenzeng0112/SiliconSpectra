import React, { Component } from 'react'
import './ProgressBar.css'
import TopLayer from './TopLayer.js'

export default class ProgressBar extends Component {

    render() {
        return (
            <div className='track'>
                <TopLayer percentage={this.props.percentage} />
            </div>
        )
    }
}
