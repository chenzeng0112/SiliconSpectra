import React, { Component } from 'react';
import './ImgSlide.css';

export default class ImgSlide extends Component {
    render() {
        const { showSlide } = this.props;
        return (
            <div className='imgSlide'>
                {showSlide()}
            </div>
        )
    }
}
