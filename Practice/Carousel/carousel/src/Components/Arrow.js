import React, { Component } from 'react';
import './Arrow.css';

export default class Arrow extends Component {
    render() {
        const { direction, handleClick, glyph } = this.props;
        return (
            <div
                className={`slideArrow ${direction}`}
                onClick={() => handleClick()}
            >
                {glyph}
            </div>
        )
    }
}
